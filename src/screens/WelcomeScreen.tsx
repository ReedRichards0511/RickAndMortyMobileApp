import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import MyBlur from '../components/MyBlur'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = ({navigation}:any) => {

    const { height } = Dimensions.get('window')
    
    return (
        <>
            <MyBlur />
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Image
                        source={require('../assets/rick.png')}
                        style={{
                            width: '70%',
                            height: (height / 6) * 2,
                            borderRadius: 16,
                            marginBottom: 40,
                        }}
                    />
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>Rick And Morty App</Text>
                        <Text style={styles.body}>Explora a todos los personajes de esta maravillosa serie y
                            sus caracteristicas
                        </Text>
                        <View style={styles.buttonContainer} >
                            <TouchableOpacity style={styles.button1}>
                                <Text style={styles.buttonText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2}
                                onPress={() => navigation.navigate('SignIn')}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    contentContainer: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 35,
        textAlign: 'center',
        color: '#353147'
    },
    body: {
        paddingTop: 20,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: '400',
        textAlign: 'center',
        color: '#353147'
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
        marginTop: 40
    }
})