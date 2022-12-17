
import { useDispatch, useSelector } from 'react-redux';

import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { deleteAddress } from '../redux/actions/Actions';

const MyAddress = () => {

  const navigation = useNavigation();
  const addressList = useSelector(state => state.AddressReducers);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#Bebebe',
        borderBottomWidth: 1
      }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 15 }}>My Address</Text>
        <TouchableOpacity style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: .2,
          padding: 5,

        }} onPress={() => {
          navigation.navigate('AddAddress');
        }}>
          <Text style={{}}>Add Address</Text>

        </TouchableOpacity>
      </View>

      {
        addressList.length>0 ? (<FlatList
          data={addressList}
          renderItem={({ item, index }) => {
            return (
              <View style={{
                width: '100%',
                borderWidth: 0.2,
                borderColor: '#8e8e8e',
                alignSelf: 'center',
  
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <View>
                  <Text style={{ marginLeft: 20 }}>{'City ' + item.city}</Text>
                  <Text style={{ marginLeft: 20 }}>
                    {'Building: ' + item.building}
                  </Text>
                  <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                    {'Pincode: ' + item.pincode}
                  </Text>
                </View>
                <TouchableOpacity style={{
                  borderWidth:0.2,
                  padding: 7, 
                  marginRight: 20
                }}
                onPress={()=>{
                  dispatch(deleteAddress(index))
                }}
                >
                  <Text>Delete Address</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />):(
          <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Text style={{fontSize:18,fontWeight:'600'}}>{"No Address Found"}</Text>
          </View>
          )
      }
      
    </View>

  )
}

export default MyAddress
