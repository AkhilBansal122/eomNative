import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SpleshScreen from './screen/SpleshScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';


function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
  

  
  const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator>
    <Stack.Screen name="Splesh" component={SpleshScreen}  options={{ 
      headerShown:false,
      statusBarHidden:false
       }} />
        
    <Stack.Screen name="Home" component={HomeScreen}  options={{ 
        headerShown:false,
        title: 'Home Screen' }} />

      <Stack.Screen name="Login" component={LoginScreen} options={{ 
        headerShown:false,
        statusBarHidden:false
         }} />
         <Stack.Screen name="Signup" component={SignupScreen} options={{ 
          headerShown:false,
          statusBarHidden:false
           }} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})