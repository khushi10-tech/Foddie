import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Welcome = ({ onNavigate }) => {
  return (
    <ImageBackground 
      source={{uri: "https://imgs.search.brave.com/5Vq2ASTmmRXMrkZAVmQIO3AFBASrkPyD07iOwKGd7nM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8xNi8xNS8yNS9j/aHJpc3RtYXMtMTkx/MTYzN182NDAuanBn"}} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Our App</Text>
        <TouchableOpacity style={styles.button} onPress={() => onNavigate('login')}>
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better text visibility
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Welcome;