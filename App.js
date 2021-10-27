import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import BookDetails from './screens/BookDetails';
//Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
 
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="BookScreen" component={BookScreen} options={{headerShown: false}}/>
          <Stack.Screen name="BookDetails" component={BookDetails} options={{title: 'Informations'}}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
}


