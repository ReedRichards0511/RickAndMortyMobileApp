import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { CharacterInfo } from '../interfaces/CharactersInterface';
import { useNavigation } from '@react-navigation/native';




interface Props {
    character: CharacterInfo,
}

export const CharacterCard = ({ character }: Props) => {

    const navigation = useNavigation();


    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={
                () => navigation.navigate('Character' as never,
                    { characterInfo: character } as never
                )
            }
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginVertical: 5,
                height: 160,
                width: 140,
                marginHorizontal: 10,
                borderRadius: 10,
                backgroundColor: '#fff',
                padding: 15,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,

            }}>
            <Image
                source={{
                    uri: character.image
                }}
                style={{
                    width: 140,
                    height: 100,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginTop: -15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}

            >

            </Image>
            <Text style={{
                textAlign: 'center',
                justifyContent: 'center',
            }}
            >{character.name}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({})