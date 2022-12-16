import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../Common/Header'
import { useSelector, useDispatch } from 'react-redux';

import { addToWishlist, removeFromCart } from '../redux/actions/Actions';

import { useNavigation } from '@react-navigation/native';
import CartItem from '../Common/CartItem';
import CommonButton from "../Common/CommonButton";
import { FlatList } from 'react-native-gesture-handler';
import { removeItemToCart, addItemToWishlist } from '../redux/actions/Actions';

const Cart = () => {

   const cartData = useSelector(state => state.Reducers);
   const [cartList, setCartList] = useState([]);
   const dispatch = useDispatch();
   const navigation = useNavigation();

   return (
      <View style={{ flex: 1 }}>
         {
            cartData.length > 0 ? (
               <FlatList
                  data={cartData}
          
                  renderItem={({ item, index }) => {
                     return (
                        <CartItem
                           onAddWishlist={x => {
                              dispatch(addItemToWishlist(item));
                           }}

                           item={item}

                           onRemoveItem={() => {
                              dispatch(removeItemToCart(index));
                           }}
                        />
                     );
                  }}
               />
            ) : (
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>No Items Added in Cart</Text>
               </View>
            )}
      </View>
   )
}

export default Cart

const styles = StyleSheet.create({})