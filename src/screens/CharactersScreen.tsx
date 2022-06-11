import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react'
import { RickAndMortyApi } from '../api/RickAndMortyApi';
import { CharacterInfo, ChacartersData } from '../interfaces/CharactersInterface';
import MyBlur from '../components/MyBlur';
import { useCharactersPaginated } from '../hooks/useCharactersPaginated';
import { CharacterCard } from '../components/CharacterCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const CharactersScreen = () => {


    const { characters, isLoading, loadCharacters, paginaAnterior, paginaSiguiente } = useCharactersPaginated();



    return (
        <>
            <MyBlur />
            <SafeAreaView style={styles.container}></SafeAreaView>
            <View style={styles.globalMargin}>
                {
                    isLoading ?
                        (
                            <View style={styles.loadingContainer}>
                                <Text style={{ fontSize: 20 }}>Loading...</Text>
                                <ActivityIndicator size={65} animating={true} />
                            </View>
                        )
                        :

                        <View style={styles.titleContainer}>

                            <FlatList
                                data={characters}
                                renderItem={({ item }) => <CharacterCard character={item}></CharacterCard>}
                                key={'_'}
                                keyExtractor={item => "_" + item.id}
                                numColumns={2}
                                ListHeaderComponent={() => <Text style={styles.titleText}>Rick And Morty App</Text>}
                                showsVerticalScrollIndicator={false}
                            >
                            </FlatList>
                            <View style={styles.buttonContainer} >
                                <TouchableOpacity style={styles.button1} onPress={paginaAnterior}>
                                    <Text style={styles.buttonText}>Anterior</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button2}
                                    onPress={paginaSiguiente}
                                >
                                    <Text style={styles.buttonText}>Siguiente</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        </>
    )
}

export default CharactersScreen

const styles = StyleSheet.create({
    globalMargin: {
        display: 'flex',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    titleContainer: {
        marginVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 10
    },
    buttonText: {
        fontWeight: '500',
        color: '#353147'
    },
    button1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff70',
        padding: 16,
        borderRadius: 6
    },
    button2: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        backgroundColor: '#DFE3E630',
    },
    loadingContainer: {
        marginBottom: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

})