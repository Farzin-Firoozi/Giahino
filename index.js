import 'react-native-gesture-handler';

import React from 'react';
import {AppRegistry} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import App from './App';

import {name as appName} from './app.json';

export default function Main() {
  return (
    // <GestureHandlerRootView>
    <PaperProvider
      theme={{
        ...DefaultTheme,
        roundness: 10,
        colors: {
          ...DefaultTheme.colors,
          primary: '#8EB63B',
          accent: '#f1c40f',
          underlineColor: 'transparent',
        },
      }}>
      <App />
    </PaperProvider>
    // </GestureHandlerRootView>
  );
}

AppRegistry.registerComponent(appName, () => Main);
