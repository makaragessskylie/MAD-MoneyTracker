import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/icon/Frame.svg'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>MoneyTracker</Text>
    </View>
  );
};


export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02CF8E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      fontSize: 32,
      fontFamily: 'poppins-Medium',
    },
});