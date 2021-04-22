import React from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';




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
    alignItems: 'flex-end',
  },
  textoBoton2:{

    color:'#ffffff',
    fontSize: 14,

  },
fila:{
  height:'25%',
  bottom:'100%',
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: '#ffffff',
  borderBottomWidth:1,
  backgroundColor: '#1590F2',
  justifyContent: 'space-between'
}

})

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={` ${screenName}`}
      onPress={() => navigation.navigate(screenName)}

    />
  );
}

export class Menu extends React.Component{

  viewMsg = ()=>{
      Alert.alert("Has apretado el boton");

  }


  render(){

    return(
<View>

<View style={styles.fila}>

<GoToButton style={styles.textoBoton} screenName="Evolucion" />


<GoToButton style={styles.boton2} screenName="NuevoReto" />

</View>


<View style={styles.fila}>

<GoToButton style={styles.boton} screenName="Perfil" />


<GoToButton style={styles.boton2} screenName="Contactar" />


</View>
      </View>
    )
  }


}
