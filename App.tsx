/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Router from './app/src/routes/Router';
import 'react-native-gesture-handler';
import {styles} from './app/src/styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
}

export default App;
