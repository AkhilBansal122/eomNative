import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = () => {
  return (
    <View style={{
      justifyContent: 'space-between', width: '100%', height: 70,
      flexDirection: 'row',
      borderBottomWidth: 0.2,
      borderBottomColor: '#8e8e8e',
      backgroundColor: '#fff',
      alignItems: 'center'
    }}>
      <Text style={{
        fontWeight: '600',
        color: '#000',
        marginLeft: 20,

        fontSize: 20
      }}>Grocery App</Text>

      <TouchableOpacity style={{
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 30
      }}>
        <Text style={{ fontSize: 12,color:'#000' }}>Mode</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Header

const styles = StyleSheet.create({})