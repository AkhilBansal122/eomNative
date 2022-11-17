import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = () => {
  return (
   <View style={{flex:1}}>
      <View style={{
        position:'absolute',
        bottom:0,
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'

      }}>
        <TouchableOpacity style={{
          width:'20%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={require('../images/home.png')} style={{width:25,height:25}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:'20%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={require('../images/home.png')} style={{width:25,height:25}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:'20%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={require('../images/home.png')} style={{width:25,height:25}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:'20%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={require('../images/home.png')} style={{width:25,height:25}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width:'20%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={require('../images/home.png')} style={{width:25,height:25}}/>
        </TouchableOpacity>
      </View>
   </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})