/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'

import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import ModalScreen from './screens/Modal'
import Loader from './screens/Loader'

export default createStackNavigator({
  Home: {screen: Loader,title:'Home Screen'},
  Profile: {screen: ProfileScreen,title:'Profile Screen'},
  Modal: {screen: ModalScreen,title:'Modal Screen'},
});

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! {"\n"} Oke , we are good to go </Text>
        <Text style={styles.instructions}>Wkwkwkwkwk</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


*/