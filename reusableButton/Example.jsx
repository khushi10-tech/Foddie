// ExampleScreen.js
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomButton from './CustomButton'; // Adjust the path if needed

const Example = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <CustomButton 
        onPress={handlePress} 
        title="Press Me" 
        style={styles.customButton} 
        textStyle={styles.customText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#28a745',
  },
  customText: {
    fontSize: 18,
  },
});

export default Example;