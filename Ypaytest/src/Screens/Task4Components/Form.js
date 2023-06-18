import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function Form({navigation}) {
  const [userName, setUsername] = useState(null);
  const [userAge, setUserage] = useState(null);

  const handleFormSubmit = () => {
    if (userName && userAge) {
      navigation.navigate({
        name: 'Welcome',
        params: {name: userName, age: userAge},
        merge: true,
      });
      setUsername('');
      setUserage('');
    } else {
      Alert.alert('Please enter Your name and age, then press submit');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID="nameInput"
        style={styles.input}
        placeholder="Enter Your Name"
        value={userName}
        onChangeText={setUsername}
      />
      <TextInput
        testID="ageInput"
        style={styles.input}
        placeholder="Enter Your Age"
        keyboardType="numeric"
        value={userAge}
        onChangeText={setUserage}
      />
      <TouchableOpacity
        testID="submitButton"
        style={styles.button}
        onPress={handleFormSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
