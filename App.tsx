

import React from 'react';
import { Text } from 'react-native';
import AppRouter from './src/router/AppRouter';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';



const App = () => {

  return (
      <AppRouter/>
  );
};



export default App;
