import React from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  boton: {
    left:'10%',
   justifyContent: 'center',
    alignItems: 'flex-start',

  },

  textoBoton:{

    color:'#ffffff',
    fontSize: 18
  },
  boton2:{
  left:'100%',
  height:'50%',
   justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textoBoton2:{

    color:'#ffffff',
    fontSize: 18,

  },
fila:{

  bottom:'80%',
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#ffffff',
  borderBottomWidth:1,
  backgroundColor: '#912a23',
  justifyContent: 'flex-start'
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
