import {View, Text} from 'react-native';
import React from 'react';
import Task1 from './src/Screens/Task1';
import {mystore} from './src/Redux/Store/Store';
import {Provider} from 'react-redux';
import Task2 from './src/Screens/Task2';
import Task3 from './src/Screens/Task3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Task4 from './src/Screens/Task4';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
          <Tab.Screen name="Task1" component={Task1} />
          <Tab.Screen name="Task2" component={Task2} />
          <Tab.Screen name="Task3" component={Task3} />
          <Tab.Screen name="Task4" component={Task4} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
