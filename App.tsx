

import React from 'react';
import { Text } from 'react-native';
import AppRouter from './src/router/AppRouter';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



const App = () => {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};



export default App;
