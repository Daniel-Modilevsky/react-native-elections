import React from 'react';
import { StyleSheet,View } from 'react-native';
import ReactRouter from './components/pages/router';
import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <ReactRouter/>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
