import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';

const AddAddress = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [city, setCity] = useState();

  const [building, setBuilding] = useState();

  const [pincode, setPinCode] = useState();

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
        <TouchableOpacity style={{
          marginLeft: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: .2,
          padding: 5,

        }} onPress={() => {
          navigation.goBack();
        }}>
          <Image source={require('../images/back.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        onchngeText={(txt) => {
          setCity(txt);
        }}
        value={city}
        placeholder={'Enter City Name'}
        icon={require('../images/buildings.png')} />

      <CustomTextInput
        onchngeText={(txt) => {
          setBuilding(txt)
        }}
        value={building}
        placeholder={'Enter Building Name'}
        icon={require('../images/building.png')} />

      <CustomTextInput

        keyboardType={'number-pad'}
        onchngeText={(txt) => {
          setPinCode(txt)
        }}
        value={pincode}
        placeholder={'Enter Pin Number'}
        icon={require('../images/pin.png')} />

      <CommonButton
        
        bgcolor={"#000"}
        textColor={'#fff'}
        title={"Save Address"}

        onPress={() => {
          if (city != '' && building != '' && pincode != '') {
            dispatch(addAddress({
              city: city,
              building: building,
              pincode: pincode
            }));
          }
          navigation.goBack();
        }}
      />
    </View>
  )
}

export default AddAddress

const styles = StyleSheet.create({})