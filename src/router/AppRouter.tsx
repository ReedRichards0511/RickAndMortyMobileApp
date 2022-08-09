import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignIn from '../screens/SignIn';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterScreen from '../screens/CharacterScreen';
import { CharacterInfo } from '../interfaces/CharactersInterface';
import RegisterScreen from '../screens/RegisterScreen';

export type RootStackParams = {
    Welcome: undefined;
    SignIn: undefined;
    Characters: undefined;
    Register: undefined;
    Character: { characterInfo: CharacterInfo, color: string };
}

const Stack = createNativeStackNavigator<RootStackParams>();

const AppRouter = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='Characters' component={CharactersScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='Character' component={CharacterScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppRouter;