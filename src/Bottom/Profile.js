import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react';
let name = "";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigator = useNavigation();
  useEffect(() => {
    getData();
  })
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        ,
        borderBottomColor: '#Bebebe',
        borderBottomWidth: 1
      }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 15 }}>Profile</Text>
        <TouchableOpacity style={{
          width: 30,
          height: 30,
          marginRight: 30,
          justifyContent: 'center',
          alignItems: 'center'

        }}>
          <Image source={require('../images/settings.png')}
            style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <Image source={require('../images/profile.png')}
        style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 30 }} />
      <Text style={{ alignSelf: 'center', fontSize: 18, marginTop: 20 }}>{name}</Text>

      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          borderBottomWidth: 1,
          marginLeft: 30

        }}
        onPress={() => {
          navigator.navigate('MyAddress');
        }
        }
      >
        <Text>My Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          borderBottomWidth: 1,
          marginLeft: 30
        }}>
        <Text>My Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={{
        height: 50,
        width: '90%',
        borderBottomColor: '#8e8e8e',
        justifyContent: 'center',
        borderBottomWidth: 1,
        marginLeft: 30
      }}>
      <Text>My Offers</Text>
    </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 50,
          width: '90%',
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
          borderBottomWidth: 1,
          marginLeft: 30
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})