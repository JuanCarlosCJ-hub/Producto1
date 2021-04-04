import React from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  boton: {
    left:30,
   justifyContent: 'center',
    alignItems: 'flex-start',

  },

  textoBoton:{

    color:'#ffffff',
    fontSize: 18
  },
  boton2:{
    left:150,
   justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textoBoton2:{

    color:'#ffffff',
    fontSize: 18
  },
fila:{
  flexDirection:'row',
  borderColor: '#ffffff',
  borderBottomWidth: 1,
  backgroundColor: '#912a23',
 height: 170,
   width:500,
}

})


export class Menu extends React.Component{
  viewMsg = ()=>{
      Alert.alert("Has apretado el boton");

  }
  render(){
    return(
<View>

<View style={styles.fila}>

<TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
  <Text style={styles.textoBoton}>EVOLUCIÓN </Text>
  </TouchableOpacity>



  <TouchableOpacity style={styles.boton2}  onPress={this.viewMsg}>
   <Text style={styles.textoBoton2}>NUEVO RETO</Text>
   </TouchableOpacity>
</View>


<View style={styles.fila}>

<TouchableOpacity style={styles.boton} onPress={this.viewMsg}>
  <Text style={styles.textoBoton}>PERFIL </Text>
  </TouchableOpacity>


<TouchableOpacity style={styles.boton2} onPress={this.viewMsg}>
    <Text style={styles.textoBoton2}>        CONTACTAR</Text>
 </TouchableOpacity>


</View>
      </View>
    )
  }
}