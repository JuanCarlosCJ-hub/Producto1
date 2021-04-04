import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Inicio } from './app/views/Inicio.js'
import { Menu } from './app/views/Menu.js'

export default function App() {
  return (
    <View>
    <Inicio />
    <Menu />
    </View>
  );
}
