import { StyleSheet,SafeAreaView,Button } from 'react-native'
import React,{useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';

import Cart from '../Bottom/Cart';
import RadioButton from '../Common/RadioButton';
import { Text, View,Image } from "react-native";
const HomeScreen = () => {

  const PROP = [
    {
      key: 1,
      text: 'Samsung',
      background:'red',
      image:require('../images/home.png'),
      stylesCustom:{
        flex:1,
        backgroundColor:'red',
        marginBottom:10
      }
      
    },
    {
      key: 2,
      text: 'Apple',
      background:'green',
      image:require('../images/home.png'),
      stylesCustom:{
        flex:1,
        backgroundColor:'green',
        marginBottom:10
      }
    },
    {
      key: 3,
      text: 'Motorola',
      background:'yellow',
      image:require('../images/home.png'),
      stylesCustom:{
        flex:1,
        backgroundColor:'yellow',
        marginBottom:10
      }
      
    }
    
  ];

  
  
  return (
    //<Cart />
    <RadioButton PROP={PROP} />

  
  )
}

export default HomeScreen

