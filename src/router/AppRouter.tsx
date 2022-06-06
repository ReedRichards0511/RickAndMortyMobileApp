import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignIn from '../screens/SignIn';
import CharactersScreen from '../screens/CharactersScreen';


const Stack = createNativeStackNavigator();

const AppRouter = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='SignIn' component={SignIn}  options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Chacarters' component={CharactersScreen}  options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppRouter;