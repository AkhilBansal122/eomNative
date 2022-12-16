import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../Common/Header'
import { getCategory } from '../../services/ProductsService';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { products } from '../Products';

import ProductItem from '../Common/ProductItem';
import { useDispatch,useSelector } from 'react-redux';
import {addItemToCart, addItemToWishlist} from '../redux/actions/Actions';
const Main = () => {

  const dispatch = useDispatch();
  const [categorieslist, setCategorylist] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [shoesList, setShoesLits] = useState([]);
  const [trouserList, setTrouserList] = useState([]);
  const [jeansList, setJeansList] = useState([]);
  const [shirtsList, setShirtsList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [jacketLits, setJacketList] = useState([]);

  
  useEffect(() => {
    let categories = [];
    products.category.map(item => {
      categories.push(item.category);
    });
    setTshirtList(products.category[0].data);
    setJeansList(products.category[1].data);
    setShoesLits(products.category[2].data);
    setJacketList(products.category[3].data);
    setSlipperList(products.category[4].data);
    setTrouserList(products.category[5].data);


    setCategorylist(categories);
  }, []);

  //   const items = useSelector(state => state);
  // console.log(items); 
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ marginLeft: 10, marginRight: 10, color: '#000' }}>{item}</Text>
      </TouchableOpacity>)

  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={{ flex: 1 }}>
        <Header />
        <Image source={require('../images/banner.jpeg')}
          style={{
            width: '94%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10
          }}
        />
        <View style={{ marginTop: 20 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categorieslist}
            renderItem={renderItem}
          />
        </View>

        <Text style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: '600',
          color: '#000',
        }}>New T-Shirts</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={tshirtList}
            renderItem={({ item, index }) => {

              return (
                <ProductItem item={item} 

                onAddWishlist={x => {
                  dispatch(addItemToWishlist(x));
                }}

                onAddToCart={z => {
                  dispatch(addItemToCart(item));
                }} />
              )
            }}
          />
        </View>

        <Text style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: '600',
          color: '#000',
        }}>New Trousers</Text>
        <View style={{ marginTop: 15 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={trouserList}
            renderItem={({ item, index }) => {

              return (
                <ProductItem item={item}
                
                onAddWishlist={x => {
                  dispatch(addItemToWishlist(x));
                }}

                onAddToCart={z => {
                  dispatch(addItemToCart(item));
                }}/>
              )
            }}
          />
        </View>

        <Text style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: '600',
          color: '#000',
        }}>New Jeans</Text>
        <View style={{ marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={jeansList}
            renderItem={({ item, index }) => {

              return (
                <ProductItem item={item} 
                onAddWishlist={x => {
                  dispatch(addItemToWishlist(x));
                }}

                onAddToCart={z => {
                  dispatch(addItemToCart(item));
                }}
                />
              )
            }}
          />
        </View>

        <Text style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: '600',
          color: '#000',
        }}>New Slipper</Text>
        <View style={{ marginTop: 15 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slipperList}
            renderItem={({ item, index }) => {

              return (
                <ProductItem item={item}  onAddWishlist={x => {
                  dispatch(addItemToWishlist(x));
                }}

                onAddToCart={z => {
                  dispatch(addItemToCart(item));
                }} />
              )
            }}
          />
        </View>
           
        <Text style={{
          marginTop: 20,
          fontSize: 18,
          marginLeft: 20,
          fontWeight: '600',
          color: '#000',
        }}>New Shoes</Text>
        <View style={{ marginTop: 15,marginBottom: 100 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={shoesList}
            renderItem={({ item, index }) => {

              return (
                <ProductItem item={item}  
                onAddWishlist={x => {
                  dispatch(addItemToWishlist(x));
                }}

                onAddToCart={z => {
                  dispatch(addItemToCart(item));
                }} />
              )
            }}
          />
        </View>

      </View>
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({})