import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
   <AppNavigator/>
  )
}

export default App

const styles = StyleSheet.create({})