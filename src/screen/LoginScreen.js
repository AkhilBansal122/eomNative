import { StyleSheet, Text, View, Image } from 'react-native';
import React,{useState} from 'react';
import CustomTextInput from '../Common/CustomTextInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Common/Loader';

const LoginScreen = () => {
  const useNavigationa = useNavigation();  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
   const [erroremail, seterrorEmail] = useState(false);
   const [errorpassword, seterrorPassword] = useState(false);

   const [modalVisible,setmodalVisible] = useState(false);

   let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   let isvalid = true;
  const validate = (()=>{
    if(email.length==0)
    {
      setmodalVisible(false);
      isvalid= false;
      seterrorEmail(true);
    }
    else
    {
      if(pattern.test(String(email).toLowerCase()))
      {
        setmodalVisible(false);
        seterrorEmail(false);
      }
      else
      {
        isvalid= false;
        seterrorEmail(true);
      }
      
    }
     if(password.length==0)
    {
      setmodalVisible(false);
      isvalid= false;
      seterrorPassword(true);
    }
    else{
      seterrorPassword(false);
    }
    isvalid ? storeData() : false;
  });   

  
  const storeData = async () => {


      let getEmail =  await AsyncStorage.getItem("email");
      let getPassword=  await AsyncStorage.getItem("password");
    //  console.log(getPassword);
      if(getEmail!=email)
      {
        setmodalVisible(false);
        seterrorEmail(true);
      }
      if(getPassword!=password)
      {
        setmodalVisible(false);
        seterrorPassword(true);
      }
      else
      {
        seterrorEmail(false);
        seterrorPassword(false);

        setmodalVisible(false);
        //console.log(getPassword);
        setmodalVisible(true);
        useNavigationa.navigate('Home');
        
      }
    }
 

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../images/playstore.png')}
        style={
          {
            width: 100,
            height: 100,
            alignSelf: 'center',
            borderRadius: 50,
            marginTop: 60,
            resizeMode: 'contain'
          }} />

      <Text style={{
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '900',
        color: '#000'
      }}>Login</Text>

      <CustomTextInput value={email} 
      onchngeText={(txt)=>{
        setEmail(txt)
      }}
      placeholder={'Enter Email Id'} icon={require('../images/icon/mail.png')} />
      {erroremail ? <Text style={styles.errorStyle}>Please Enter Valid Email Id</Text> :''}
     
      <CustomTextInput 
      onchngeText={(txt)=>{
        setPassword(txt)
      }}
      value={password} placeholder={'Enter Password'} icon={require('../images/icon/padlock.png')} type={'password'} />
      {errorpassword ? <Text style={styles.errorStyle}>Please Enter Valid Password</Text> :''}

      <CommonButton 
      onPress={()=>{
        validate();
      }}
      title={'Login'} bgcolor={'#000'} textColor={'#fff'} />

      <Text
        onPress={() => {
          useNavigationa.navigate('Signup')
        }}
        style={{
          marginTop: 10,
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '900',
          textDecorationLine: 'underline',
        color: '#000'
        }}>Create New Account ?</Text>
        <Loader modalVisible={modalVisible} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  errorStyle:{marginTop:10,color:'red',marginLeft:20,fontSize:14,fontWeight:'900'}
})