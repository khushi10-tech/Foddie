import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Register = ({ onNavigate }) => {
  return (
    <ImageBackground 
      source={{uri: "https://imgs.search.brave.com/qDtHTGZgHVsa4VRJXjHGf0Zaw93p03kgV9ZqIVILER4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZGJj/ZG4uYi1jZG4ubmV0/L2ltZy9QaG90b3Mv/bmV3LXRlbXBsYXRl/cy9ib290c3RyYXAt/cmVnaXN0cmF0aW9u/L2RyYXcxLndlYnA"}} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('welcome')}>
          <Text style={styles.link}>Back to Welcome</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
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
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    color: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    color: '#007BFF',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Register;