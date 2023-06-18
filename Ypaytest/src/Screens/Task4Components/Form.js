import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function Form({navigation}) {
  const [userName, setUsername] = useState(null);
  const [userAge, setUserage] = useState(null);

  const handleFormSubmit = () => {
    if (userName && userAge) {
      navigation.navigate('Welcome', {name: userName, age: userAge});
      setUsername('');
      setUserage('');
    }
  };

  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput value={userName} onChangeText={setUsername} />
      <Text>Enter your age:</Text>
      <TextInput
        value={userAge}
        onChangeText={setUserage}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
}
