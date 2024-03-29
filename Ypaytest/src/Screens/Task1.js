import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddItem} from '../Redux/Actions/Action';

export function checkNumber(val) {
  return val % 2 === 0 ? 'Number is Even' : 'Number is Odd';
}

const Task1 = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const addNumber = () => {
    if (input) {
      dispatch(AddItem({data: input, number: answer}));
      Keyboard.dismiss();
      setInput('');
      setAnswer('');
      Alert.alert('Submitted Successfully');
    } else {
      Alert.alert('please enter a number');
    }
  };

  const handleInput = val => {
    if (!val) {
      setAnswer('');
      setInput();
    } else {
      if (/^\d*$/.test(val)) {
        setInput(val);
        setAnswer(checkNumber(val));
      } else {
        Alert.alert('Enter numbers only');
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        testID="TextInput"
        style={styles.input}
        placeholder="Enter a Number"
        keyboardType="numeric"
        value={input}
        onChangeText={val => handleInput(val)}
        placeholderTextColor={'grey'}
      />
      <Text style={styles.answer}>{answer}</Text>
      <TouchableOpacity
        testID="TouchableOpacity"
        style={styles.button}
        onPress={() => addNumber()}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

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
    marginBottom: '10%',
    color: 'black',
    backgroundColor: 'lightgrey',
  },
  answer: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default Task1;
