import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default function Welcome({navigation, route}) {
  // const {name, age} = route.params;
  const name = 'Mustafain';
  const age = 22;

  // const handleFormSubmit = (name, age) => {
  //   setUserData({name, age});
  // };

  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Button
        title="Go to Form Screen"
        onPress={() => navigation.navigate('Form')}
      />
      {name && age && (
        <Text>
          Welcome, {name}! You are {age} years old.
        </Text>
      )}
    </View>
  );
}
