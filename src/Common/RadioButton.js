import React,{useState} from 'react'
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';


const RadioButton = ({PROP}) => {
 const [value, setState] = useState(null);
  

 return (
    <View style={[styles.container2, {
        flexDirection: "column"
      }]}>
      {
        PROP.map((item,index)=>{
            console.log(item.stylesCustom)
            return(
                <View key={item.key} style={item.stylesCustom} >
                     <Image source={item.image} style={{width:100,height:120}} />
                     <Text style={styles.radioText}>{item.text}</Text>
                     <TouchableOpacity
                     onPress={()=>{
                        setState(index)
                     }}
                            style={styles.radioCircle}
                            >
                              {value === index && <View style={styles.selectedRb} />}
                        </TouchableOpacity>

                </View>)
        })
      }
    <Text> Selected: {value} </Text>
    </View>
  )
}

export default RadioButton

 const styles = StyleSheet.create({
    container2: {
        flex: 1,
        padding: 20,
      },
    // 	container: {
//         marginBottom: 35,
//         alignItems: 'center',
//         flexDirection: 'row',
// 		justifyContent: 'space-between',
// 	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
 });