import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g. Jonh Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter age:</Text>
      <TextInput 
        style={styles.input}
        placeholder="e.g. 99"
        keyboardType='numeric'
        onChangeText={(val) => setAge(val)}
      />
      <Text>His name is {name}. His age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
