import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { decrement, increment, incrementByAmount } from '../redux/slices/AuthSlice';

const RegisterScreen = () => {

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador con Redux toolkit</Text>

        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    counter: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    }
})