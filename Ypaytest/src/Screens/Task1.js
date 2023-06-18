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

const Task1 = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const addNumber = () => {
    dispatch(AddItem({data: input, number: answer}));
    Keyboard.dismiss();
    setInput('');
    setAnswer('');
    Alert.alert('Submitted Successfully');
  };

  const handleInput = val => {
    if (!val) {
      setAnswer('');
      setInput();
    } else {
      if (/^\d*$/.test(val)) {
        setInput(val);
        setAnswer(val % 2 === 0 ? 'Number is Even' : 'Number is Odd');
      } else {
        Alert.alert('Enter numbers only');
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        style={styles.input}
        placeholder="Enter a Number"
        keyboardType="numeric"
        value={input}
        onChangeText={val => handleInput(val)}
      />
      <Text style={styles.answer}>{answer}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addNumber()}>
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
  },
  answer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: '5%',
    borderWidth: 1,
    backgroundColor: 'green',
    padding: 7,
    borderRadius: 15,
  },
  btnText: {color: 'white', fontSize: 20},
});

export default Task1;
