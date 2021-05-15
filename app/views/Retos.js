import React from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity, Text, Button, FlatList } from 'react-native';
import { db } from '../config/db.js';

const styles = StyleSheet.create({
  boton: {
    left:'10%',
   justifyContent: 'center',
    alignItems: 'flex-start',

  },

  textoBoton:{

    color:'#ffffff',
    fontSize: 14,

  },
  boton2:{
  left:'90%',
  height:'50%',
   justifyContent: 'center',
    alignItems: 'center',
  },
  textoBoton2:{

    color:'#ffffff',
    fontSize: 14,

  },
fila:{
  height:'25%',
  bottom:'90%',
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#ffffff',
  borderBottomWidth:1,
  backgroundColor: '#1590F2',
  justifyContent: 'center'
}

})
let sitios = [];

export class Retos extends React.Component{
  componentDidMount(){
      db.collection("sitios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          sitios.push({"key":doc.id, "value":doc.data()});
        });
        this.setState({sitios:sitios, loading: false});
      });
    }


  state = {
    sitios: [],
    loading: true
  }

renderItem = data =>
<View style={styles.fila}>
<TouchableOpacity styles={styles.boton}>
<Text style={styles.textoBoton2}> {data.item.value.nombre}  </Text>
</TouchableOpacity>
</View>

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
  <FlatList
  style={{
    flex: 1,
  }}
  data={this.state.sitios}
  renderItem={item => this.renderItem(item)}
  keyExtractor={(item, index) => item.key}
  />
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
