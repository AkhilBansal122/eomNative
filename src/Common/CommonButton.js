import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({onPress,title,bgcolor,textColor}) => {
  return (
    <View>
    <TouchableOpacity 
    onPress={()=>{
        onPress();
    }}

    style={{
        backgroundColor:bgcolor,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:'95%',
        borderRadius:10,
        alignSelf:'center',
        marginTop:50
    }}>
      <Text style={{color:textColor}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({})