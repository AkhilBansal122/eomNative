import { View, Text, FlatList } from 'react-native'
import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../Common/CartItem';
import { addItemToCart, removeItemToCart,removeItemToWishlist } from '../redux/actions/Actions';
const WIshlist = () => {
  const [cartList, setCartList] = useState([]);

  const cartData =  useSelector(state =>state.ReducersWishlist);
  const dispatch = useDispatch();
//console.log("@@@",cartData);
  return (
    <View style={{flex: 1}}>
     <FlatList
      data = {cartData}
      renderItem = {({item,index})=>{
        return(
          <CartItem
            item={item}
            isWishlist = {"ss"}
            onRemoveFromWishlist = {()=>{
              dispatch(removeItemToWishlist(index));
            }}
            onAddToCart={x=>{
              dispatch(addItemToCart(item));
            }}
          />
        )
      }}
        />
    </View>
  )
}

export default WIshlist