import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Task1 from './src/Screens/Task1';
import {mystore} from './src/Redux/Store/Store';
import {Provider} from 'react-redux';
import Task2 from './src/Screens/Task2';
import Task3 from './src/Screens/Task3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Task4 from './src/Screens/Task4';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SplashScreen from 'react-native-splash-screen';
const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
          <Tab.Screen
            name="Task1"
            component={Task1}
            options={{
              tabBarActiveTintColor: '#D6252E',
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="tasks" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Task2"
            component={Task2}
            options={{
              tabBarActiveTintColor: '#D6252E',
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="tasks" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Task3"
            component={Task3}
            options={{
              tabBarActiveTintColor: '#D6252E',
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="add-task" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Task4"
            component={Task4}
            options={{
              tabBarActiveTintColor: '#D6252E',
              tabBarIcon: ({color, size}) => (
                <Octicons name="tasklist" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
