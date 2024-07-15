import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Welcome from './screen/Welcome';
import Login from './screen/Login';
import Register from './screen/Register';

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
      <View style={styles.container}>
        {currentPage === 'welcome' && <Welcome onNavigate={handleNavigate} />}
        {currentPage === 'login' && <Login onNavigate={handleNavigate} />}
        {currentPage === 'register' && <Register onNavigate={handleNavigate} />}
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
});

export default App;