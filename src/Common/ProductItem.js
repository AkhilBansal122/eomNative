import { View, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

const ProductItem = ({ item }) => {
    return (
        <TouchableOpacity style={{
            borderRadius: 20,
            elevation: 5,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            backgroundColor: '#fff',
            marginBottom: 10,
        }}>
            <View style={{ width: '100%' }}>

                <Image style={{
                    width: '100%',
                    height: 120,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} source={item.image} />

                <Text style={{
                    marginTop: 10,
                    marginLeft: 10,
                    fontSize: 18,
                    fontWeight: '600',
                    color:'#000'
                    
                }}>
                    {item.name}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10
                }}>

                <Text style={{
                        marginTop: 5,
                        marginLeft: 10,
                        fontSize: 18,
                        color:'#000',
                        fontWeight: '600'
                    }}>
                        {'Rs ' + item.price}
                    </Text>
                 
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        padding: 5,
                        right:10,
                        borderRadius: 10,
                    }}>
                        <Text style={{ color: '#000' }}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>

                
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    elevation: 5,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    position: 'absolute',
                    justifyContent: 'center',

                    alignItems: 'center',
                    top: 10,
                    right: 10
                }}>
                    <Image style={{ width: 24, height: 24 }} source={require('../images/heart.png')} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;
