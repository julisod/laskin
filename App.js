import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  
  const [result, setResult] = useState("");
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const [data, setData] = useState([]);

  const add = () => {
    let sum = parseInt(firstInput) + parseInt(secondInput)
    setResult(sum);
    handleChange(firstInput + " + " + secondInput + " = " + sum);
  }

  const subtract = () => {
    let subtraction = parseInt(firstInput) - parseInt(secondInput)
    setResult(subtraction);
    handleChange(firstInput + " - " + secondInput + " = " + subtraction);
  }

  const handleChange = (text) => {
    setData([...data, text]);
    setFirstInput("");
    setSecondInput("");
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 22 }}>
          Result: {result}
        </Text>
        <TextInput
          style={{width:100, borderColor: 'gray', borderWidth:1}}
          keyboardType='numeric'
          onChangeText={input => setFirstInput(input)}
          value={firstInput}
        />
        <TextInput
          style={{width:100, borderColor: 'gray', borderWidth:1}}
          keyboardType='numeric'
          onChangeText={input => setSecondInput(input)}
          value={secondInput}
        />
        <View style={styles.buttons}>
          <Button onPress={add} title="+" />
          <View style={{width: 20}} />
          <Button onPress={subtract} title="-" />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 22 }}>History</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
});
