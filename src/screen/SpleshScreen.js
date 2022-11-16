import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const SpleshScreen = () => {

   const useNavigationa =  useNavigation();

    useEffect(()=>{
        setTimeout(() => {
           useNavigationa.navigate('Login');
        }, 3000);
    },[])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('../images/playstore.png')}
    style={{width: 150, height: 150,borderRadius:100,resizeMode:'contain'}} />

    </View>
  )
}

export default SpleshScreen

const styles = StyleSheet.create({})