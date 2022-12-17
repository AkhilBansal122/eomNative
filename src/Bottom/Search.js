import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Search = () => {
  return (

    <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
    <TouchableOpacity
    onPress={()=>{console.log("search click")}}
    >

    <Text>Search</Text>
    </TouchableOpacity>  
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})