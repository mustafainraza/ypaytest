import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Task3() {
  const [joke, setJoke] = useState('');
  const [input, setInput] = useState('');

  const getJoke = async () => {
    await axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then(function (response) {
        const {setup, punchline} = response.data;
        setJoke(`${setup}\n\n${punchline}`);
      })
      .catch(function (error) {
        setJoke('Error: Failed to fetch a joke');
        Alert.alert(`Error : ${error.message}`);
        console.log(error);
      });
  };

  const handleInput = val => {
    if (/^\d*$/.test(val)) {
      setInput(val);
    } else {
      Alert.alert('Enter numbers only');
    }
  };

  const handleSubmit = () => {
    if (input) {
      getJoke();
    } else {
      Alert.alert('Please enter a number');
      setJoke('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{bottom: 60, backgroundColor: '#003047', padding: 20}}>
        <Text style={{fontSize: 30, color: 'white'}}>
          Enter number and get joke
        </Text>
      </View>
      {joke == '' ? null : (
        <View
          style={{backgroundColor: '#003047', padding: 15, borderRadius: 20}}>
          <Text style={{fontSize: 20, color: 'white'}}>{joke}</Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter a Number"
        keyboardType="numeric"
        value={input}
        onChangeText={val => handleInput(val)}
        onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: '10%',
    color: 'black',
  },
  button: {
    marginTop: '5%',
    borderWidth: 1,
    backgroundColor: '#003047',
    padding: 7,
    borderRadius: 15,
  },
  btnText: {color: 'white', fontSize: 20},
});
