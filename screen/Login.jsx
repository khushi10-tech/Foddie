import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Login = ({ onNavigate }) => {
  return (
    <ImageBackground 
      source={{uri:"https://imgs.search.brave.com/EVzI0sPhGKIWtXJfc0U_fii9R0HPdPF9DPascMbBTX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MDY3NDEwNi9waG90/by8zZC1yZW5kZXJp/bmctb2YtZmluZ2Vy/cHJpbnQtcGFkbG9j/ay1vbi1ibHVlLWJh/Y2tncm91bmQud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9MFJvUHAtNkVt/TVhkejloc29KU2ZV/S0c0MkpIdF95V1hL/Q012S2pWMHhwOD0"}} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('welcome')}>
          <Text style={styles.link}>Back to Welcome</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('register')}>
          <Text style={styles.link}>Don't have an account? Register</Text>
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

export default Login;