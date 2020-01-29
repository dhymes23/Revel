import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Create Username:</Text>
      <TextInput/>
      <Text>Enter Passwaord:</Text>
      <TextInput/>
      <Text>Re-Enter Password</Text>
      <TextInput/>
      <Button>Submit:</Button>
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
});
