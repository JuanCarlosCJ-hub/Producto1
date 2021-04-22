import React from 'react';
import { View, StyleSheet, Image } from 'react-native';




const styles = StyleSheet.create({
imagen:{

resizeMode: 'cover',
 height: '85%',
width: 1600,
},
fila:{

  borderColor: '#ffffff',
  borderBottomWidth: 1,
  backgroundColor: '#912a23',
 height: 170,
   width:500,
}

})

export class Inicio extends React.Component{


  render(){
      return(
<View>
<Image
source={require('./image1.jpg')}
style={styles.imagen}
 />

 </View>

      )
  }

}
