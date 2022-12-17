import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SpleshScreen from './screen/SpleshScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';

import MyAddress from './screen/MyAddress';
import AddAddress from './screen/AddAddress';
  
  const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
   
    <Stack.Screen name="Home" component={HomeScreen}  options={{ 
        headerShown:false,
        title: 'Home Screen' }} />

        <Stack.Screen name="Splesh" component={SpleshScreen}  options={{ 
          headerShown:false,
          statusBarHidden:false
           }} />
            
      <Stack.Screen name="Login" component={LoginScreen} options={{ 
        headerShown:false,
        statusBarHidden:false
         }} />
         <Stack.Screen name="Signup" component={SignupScreen} options={{ 
          headerShown:false,
          statusBarHidden:false
           }} />
           <Stack.Screen name="MyAddress" component={MyAddress} options={{ 
            headerShown:false,
            statusBarHidden:false
             }} />
             <Stack.Screen name="AddAddress" component={AddAddress} options={{ 
              headerShown:false,
              statusBarHidden:false
               }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})