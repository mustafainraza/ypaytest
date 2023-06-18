import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Welcome({navigation, route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Form')}>
        <Text style={styles.btnText}>Go to Form Screen</Text>
      </TouchableOpacity>
      {route.params?.name && route.params?.age && (
        <Text style={styles.text}>
          Welcome, {route.params?.name}! You are {route.params?.age} years old.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: '20%',
  },
  title: {bottom: '30%', fontSize: 25, color: 'black'},
  button: {
    marginTop: '5%',
    borderWidth: 1,
    backgroundColor: '#003047',
    padding: 7,
    borderRadius: 15,
  },
  btnText: {color: 'white', fontSize: 20},
});
