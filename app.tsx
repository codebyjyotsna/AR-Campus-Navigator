import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ARView } from './components/ARView';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AR Campus Navigator</Text>
      <ARView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export default App;
