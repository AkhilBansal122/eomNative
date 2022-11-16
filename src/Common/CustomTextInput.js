import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'


const CustomTextInput = ({ value, onchngeText, placeholder, icon, type, keyboardType }) => {
    return (
        <View style={{
            borderWidth: 2,
            alignSelf: 'center',
            width: '95%',
            height: 52,
            borderRadius: 10,
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20
        }}>
            <Image source={icon}
                style={{ width: 30, height: 30 }} />
            <TextInput
                keyboardType={keyboardType ? keyboardType : 'default'}
                value={value}
                onChangeText={onchngeText}
                secureTextEntry={type ? true : false}
                placeholder={placeholder}
                style={{
                    paddingLeft: 9,
                    alignSelf: 'center',
                    width: '90%',
                    height: 50,
                    fontSize: 20,


                }}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({})