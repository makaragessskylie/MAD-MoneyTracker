import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

