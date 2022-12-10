import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import Cart from '../Bottom/Cart';
import Main from '../Bottom/Main';
import Profile from '../Bottom/Profile';
import Search from '../Bottom/Search';
import Wishlist from '../Bottom/WIshlist';

const HomeScreen = () => {

  const [selectTab, setSelectTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {
        selectTab ==0 ? 
        (<Main/>) : 
        selectTab==1  ? 
        <Wishlist/> : 
        selectTab==2 ? 
        <Cart/>   : 
        selectTab==3 ?  
        <Search/> 
        :<Profile/> 
      }
      <View style={{ flex: 1, bottom: 0, position: 'absolute', justifyContent: 'space-evenly' }}>
        <View style={{
          height: 70, justifyContent: 'space-evenly', flexDirection: 'row',
          backgroundColor: '#f2f2f2', elevation: 2
        }}>

          <TouchableOpacity
            onPress={() => {
              setSelectTab(0);
            }}
            style={
              {
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: 'black',
              }
            }>
            <Image source={require('../images/home.png')} style={{ width: 24, height: 25,tintColor:selectTab==0 ?'#8e8e8e':'#8e8e8e' }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectTab(1);
              
            }}
            style={
              {

                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center', borderBottomColor: 'black',
                
               }
            }>
            <Image source={require('../images/heart.png')} style={{ width: 24, height: 25,tintColor:selectTab==1 ?'#8e8e8e':'#8e8e8e' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setSelectTab(2);
          }} style={
            {
              width: 50,
              height: 50,
              borderRadius: 30,
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:selectTab ==2 ?'green': '#000',
              borderBottomColor: 'black'
            }
          }>
            <Image source={require('../images/cart.png')} style={{ width: 24, height: 30, tintColor:selectTab==2 ?'#fff':'#8e8e8e' }} />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setSelectTab(3);
          }} style={
            {
              width: '25%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: 'black',

            }
          }>
            <Image source={require('../images/search.png')} style={{ width: 24, height: 25,tintColor:selectTab==3 ?'#8e8e8e':'#8e8e8e' }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectTab(4);
            }}
            style={
              {
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }>
            <Image source={require('../images/user.png')} style={{ width: 24, height: 25,tintColor:selectTab==4 ?'#8e8e8e':'#8e8e8e' }} />
          </TouchableOpacity>

        </View>
      </View>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({})