import React from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity, Text, Button } from 'react-native';
import { db } from '../config/db.js';

let sitios = [];

export class Retos extends React.Component{
  componentDidMount(){
      db.collection("sitios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          sitios.push(doc.data());
        });
        this.setState({sitios:sitios, loading: false});
      });
    }


  state = {
    sitios: [],
    loading: true
  }



render(){

if(this.state.loading){
  return(
    <View>
    <Text>Cargando </Text>
    </View>
  )
}else{
  return(
  <View>
  <Text>Cargado </Text>
  </View>
)
}



return(

  <View>
  <Text>El reto ira aqui </Text>
  </View>
)
}
}
