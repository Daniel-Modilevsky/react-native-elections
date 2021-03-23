import React from 'react';
import { StyleSheet,View } from 'react-native';
import ReactRouter from './components/pages/router';

export default function App() {
  return (
    <View style={styles.container}>
        <ReactRouter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
