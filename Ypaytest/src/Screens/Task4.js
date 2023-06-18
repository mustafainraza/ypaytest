import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Task4Components/Welcome';
import Form from './Task4Components/Form';

const Stack = createNativeStackNavigator();

export default function Task4() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
}
