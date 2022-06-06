import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { RickAndMortyApi } from '../api/RickAndMortyApi';
import { ChacartersData, CharacterInfo } from '../interfaces/CharactersInterface';


export const useCharactersPaginated = () => {


    const [characters, setCharacters] = useState<CharacterInfo[]>([]);

    const paginaRef = useRef(1);

    const [isLoading, setisLoading] = useState(true);

    const loadCharacters = async () => {

        try {
            const resp = await RickAndMortyApi.get<ChacartersData>('/character', {
                params: {
                    page: paginaRef.current
                }
            });

            if (resp.data.results.length > 0) {
                setCharacters(resp.data.results)


            } else {
                paginaRef.current--;
                // Alert('No hay mas personajes')
            }

            setCharacters(resp.data.results);
            setisLoading(false);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadCharacters();
    }, [])

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            loadCharacters()
        }
    }
    const paginaSiguiente = () => {
        paginaRef.current++;
        loadCharacters()
    }

    return {
        characters,
        isLoading,
        loadCharacters,
        paginaAnterior,
        paginaSiguiente
    }

}
