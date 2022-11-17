import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SpleshScreen = () => {

   const useNavigationa =  useNavigation();

    useEffect(()=>{
        setTimeout(() => {
          useNavigationa.navigate('Login');
            getstoreData();
        }, 3000);
    },[])

    const getstoreData = async ()=>{
      const checkemail = await AsyncStorage.getItem('email');
     console.log("checkemail",checkemail);
      if(checkemail!=null)
      {
        useNavigationa.navigate('Home');
      }
      else{
        useNavigationa.navigate('Login');
      }
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('../images/playstore.png')}
    style={{width: 150, height: 150,borderRadius:100,resizeMode:'contain'}} />

    </View>
  )
}

export default SpleshScreen

const styles = StyleSheet.create({})