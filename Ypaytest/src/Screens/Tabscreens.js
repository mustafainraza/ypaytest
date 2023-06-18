import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
const Tab = createBottomTabNavigator();

export default function Tabscreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
        <Tab.Screen name="Task1" component={Task1} />
        <Tab.Screen name="Task2" component={Task2} />
        <Tab.Screen name="Task3" component={Task3} />
        <Tab.Screen name="Task4" component={Task4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
