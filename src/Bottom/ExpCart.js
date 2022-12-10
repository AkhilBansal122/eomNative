import React,{useState} from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';

const Cart = () => {

  const [radobutton,setRadionBtn] = useState(false);

  const data1 = [
    {
      key:1,
      label: 'data 1'
    },
    {
      key:2,
      label: 'data 2'
    },
    {
      key:3,
      label: 'data 3'
    },
  ];

  const d1 =[
    {
      key:'1',
      label:data1[0].label
    }
    
  ];
  const d2 =[
    {
      key:'2',
      label:data1[1].label
    }
    
  ];
  const d3 =[
    {
      key:'3',
      label:data1[2].label
    }
    
  ];


  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>

    
          <View style={{ flex: 2, backgroundColor: "red", borderRadius: 20 }}>
          <RadioButtonRN
        
            data={d1}
            selectedBtn={(e) => setRadionBtn(true)}/>
        </View>
        
        
        <View style={{ flex: 2, backgroundColor: "orange", borderRadius: 20 }}>
        <RadioButtonRN
          data={d2}
          selectedBtn={(e) => setRadionBtn(true)}/>
      </View>
      
  
      <View style={{ flex: 2, backgroundColor: "yellow", borderRadius: 20 }}>
      <RadioButtonRN
        data={d3}
        selectedBtn={(e) => setRadionBtn(true)}/>
    </View>
    


    
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Cart;