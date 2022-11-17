import { StyleSheet, Text, View, Modal, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function ModalCom({title}) {
    const [modalShow, setModalShow] = useState(false);

    return (
        <View>

            <Modal animationType='slider' transparent={true} visible={modalShow}>
                <View style={{alignItems:'center',justifyContent:'center',borderColor:'red',borderWidth:1}}>
                    <Image source={require('../images/playstore.png')}
                        style={{ width: 150, height: 150, marginBottom: 10, marginTop: 50, justifyContent: 'center' }} />

                    <Text style={styles.text}>
                        {title}
                    </Text>
                    <Text onPress={()=>{
                        setModalShow(!modalShow)
                    }} style={styles.textclose}>
                    Close
                </Text>
                </View>
            </Modal>
            <Pressable style={styles.button} onPress={() => { setModalShow(true) }}>
                <Text style={styles.buttonText}> About React native</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 60,
        borderRadius: 6, justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#009688',
        elevation: 8
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        padding: 10
    },
    textclose:{
        fontSize:24,
        textAlign:'center',
        color:'#00ffee'
    }
})