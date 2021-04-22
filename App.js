import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Inicio } from './app/views/Inicio.js'
import { Menu } from './app/views/Menu.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({

});


function Home(){
  return(

    <View >
    <Inicio  />
    <Menu />
    </View>

  );
}
function Evolucion({ navigation }){
  return(
    <View>
    <Text>La evolucion ira aqui </Text>
    </View>
  )
}
function NuevoReto({ navigation }){
  return(
    <View>
    <Text>El reto ira aqui </Text>
    </View>
  )
}
function Perfil({ navigation }){
  return(
    <View>
    <Text>El perfil ira aqui </Text>
    </View>
  )
}
function Contactar({ navigation }){
  return(
    <View>
    <Text>El formulario ira aqui </Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (


    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1590F2',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    }}
  >
        <Stack.Screen
        name="Home"
        component={Home}
        options={{

          title: 'Inicio',


        }}/>
        <Stack.Screen
        name="Evolucion"
        component={Evolucion}
        options={({navigation})=>({

          title: 'Evolucion',
          headerRight: () => (
             <Button
                   onPress={() => navigation.navigate(Home)}
               title="Inicio"
               color="#122082"
             />
           ),

        })}/>
        <Stack.Screen
        name="NuevoReto"
        component={NuevoReto}
        options={({navigation})=>({

          title: 'Nuevo Reto',
          headerRight: () => (
             <Button
                   onPress={() => navigation.navigate(Home)}
               title="Inicio"
               color="#122082"
             />
           ),

        })}/>
        <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={({navigation})=>({

          title: 'Perfil',
          headerRight: () => (
             <Button
                   onPress={() => navigation.navigate(Home)}
               title="Inicio"
               color="#122082"
             />
           ),

        })}/>
        <Stack.Screen
        name="Contactar"
        component={Contactar}
        options={({navigation})=>({

          title: 'Contactar',
          headerRight: () => (
             <Button
                   onPress={() => navigation.navigate(Home)}
               title="Inicio"
               color="#122082"
             />
           ),

        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
