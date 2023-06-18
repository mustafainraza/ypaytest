import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

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
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <View
          style={{
            marginTop: '2%',
            right: '7%',
          }}>
          <EvilIcons name="user" color={'black'} size={45} />
        </View>
        <TextInput
          testID="nameInput"
          style={styles.input}
          placeholder="Enter Your Name"
          value={userName}
          onChangeText={setUsername}
          placeholderTextColor={'grey'}
        />
      </View>

      <View
        style={{justifyContent: 'center', flexDirection: 'row', paddingTop: 5}}>
        <View
          style={{
            marginTop: '2%',
            marginRight: 6,
            paddingRight: 2,
          }}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../../../assets/ageicon.png')}
          />
        </View>
        <TextInput
          testID="ageInput"
          style={styles.input}
          placeholder="Enter Your Age"
          keyboardType="numeric"
          value={userAge}
          onChangeText={setUserage}
          placeholderTextColor={'grey'}
        />
      </View>
      <TextInput />
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
    backgroundColor: 'lightgrey',
    marginLeft: 10,
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
