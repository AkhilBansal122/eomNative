import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../Common/Loader';

const SignupScreen = () => {
    const [modalVisible,setmodalVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setCongirmPassword] = useState('');

    const [errconfirmPassword, seterrCongirmPassword] = useState('');

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMobile, setErrorMobile] = useState(false);
    const [errorMobilenum, setErrorMobilenum] = useState('');

    const [errorPassword, setErrorPassword] = useState(false);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

    let isvalid = true;
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const validate = (() => {

        if (name.length == 0) {
            isvalid= false;
            setmodalVisible(false);
            setErrorName(true);
        }
        else {
            setErrorName(false);
        }

        if (email.length == 0) {
            setmodalVisible(false);
            isvalid= false;
            setErrorEmail(true);
        }
        else {
            if (pattern.test(String(email).toLowerCase())) {
                setErrorEmail(false);
            }
            else {
                isvalid= false;
                setmodalVisible(false);
                setErrorEmail(true);
            }
        }
        
        if(mobile.length==0)
        {
            isvalid= false;
            setErrorMobile(true);
            setmodalVisible(false);
            setErrorMobilenum("Please Enter Mobile Number");
        }
        else if((mobile.length>10) || (mobile.length<10))
        {
            setmodalVisible(false);
            isvalid= false;
            setErrorMobilenum("Please Enter 10 Digit Mobile Number");
            setErrorMobile(true);
        }
        else{
            setErrorMobile(false);
            setErrorMobilenum('');
        }

        // password 
        if (password.length == 0) {
            setmodalVisible(false);
            isvalid= false;
            setErrorPassword(true);
        }
        else {
            setErrorPassword(false);
        }

        //confirmPassword
        if(confirmPassword.length==0)
        {
            setmodalVisible(false);
            isvalid= false;
            setErrorConfirmPassword(true);
            seterrCongirmPassword("Please Enter Confirm Password");
        }
        else if(password!=confirmPassword)
        {
            setmodalVisible(false);
            isvalid= false;
            setErrorConfirmPassword(true);
            seterrCongirmPassword("Password And Confirm Password Not Match");
        }
        else{
            setErrorConfirmPassword(false);
            seterrCongirmPassword("");
        }
        
        isvalid ? storeData()  : false;
    });

    const storeData = async () => {
        if((!errorName && !errorEmail && !errorMobile && !errorPassword && !errorConfirmPassword))
        {
            setmodalVisible(true);
            await AsyncStorage.setItem("name",name);
            await AsyncStorage.setItem("email",email);
            await AsyncStorage.setItem("mobileNumber",mobile);
            await AsyncStorage.setItem("password",password);
          //  const value = await AsyncStorage.getItem('mobileNumber');
            useNavigationa.goBack();

        }
      }

    const useNavigationa = useNavigation();
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Image source={require('../images/playstore.png')}
                    style={
                        {
                            width: 100,
                            height: 100,
                            alignSelf: 'center',
                            borderRadius: 50,
                            marginTop: 40,
                            resizeMode: 'contain'
                        }} />

                <Text style={{
                    marginTop: 5,
                    alignSelf: 'center',
                    fontSize: 24,
                    fontWeight: '900',
                    color: '#000'
                }}>Signup</Text>

                <CustomTextInput value={name} onchngeText={(txt)=>{
                    setName(txt)
                  }} placeholder={'Enter Name'} icon={require('../images/icon/user.png')} />
                {errorName ? <Text style={styles.errorStyle}>Please Enter Name</Text> : ''}

                <CustomTextInput
                onchngeText={(txt)=>{
                    setEmail(txt)
                  }}

                value={email} placeholder={'Enter Email'} icon={require('../images/icon/mail.png')} />
                {errorEmail ? <Text style={styles.errorStyle}>Please Enter Valid Email Id</Text> : ''}

                <CustomTextInput 
                value={mobile}
                keyboardType={'number-pad'}
                onchngeText={(txt)=>{
                    setMobile(txt)
                  }}
                  placeholder={'Enter Mobile Number'} icon={require('../images/icon/telephone.png')} />
               
                  {errorMobile ? <Text style={styles.errorStyle}>{errorMobilenum}</Text> : ''}
                <CustomTextInput 
                onchngeText={(txt)=>{
                    setPassword(txt)
                  }}
                   value={password} placeholder={'Enter Password'} icon={require('../images/icon/padlock.png')} type={'password'} />
                {errorPassword ? <Text style={styles.errorStyle}>Please Enter Password</Text> : ''}

                <CustomTextInput onchngeText={(txt)=>{
                    setCongirmPassword(txt)
                  }}
                   value={confirmPassword} placeholder={'Enter Confirm Password'} icon={require('../images/icon/padlock.png')} type={'password'} />
                {errorConfirmPassword ? <Text style={styles.errorStyle}>{errconfirmPassword}</Text> : ''}

                <CommonButton onPress={()=>{
                    validate();
                  }} title={'Signup'} bgcolor={'#000'} textColor={'#fff'} />

                <Text
                    onPress={() => {
                        useNavigationa.goBack();
                    }}
                    style={{
                        marginTop: 10,
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '900',
                        textDecorationLine: 'underline',
                        marginBottom: 50,
                        color: '#000'
                    }}>Already Have Account ?</Text>
                    <Loader modalVisible={modalVisible} />
  
            </View>
        </ScrollView>
    )
}

export default SignupScreen


const styles = StyleSheet.create({
    errorStyle: { marginTop: 10, color: 'red', marginLeft: 20, fontSize: 14, fontWeight: '900' }
})