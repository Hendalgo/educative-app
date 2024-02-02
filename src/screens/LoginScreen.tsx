import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
//import { useAuth } from "../contexts/AuthContext";
import styles from '../styles';
import { useTheme } from '@react-navigation/native';

export default function Login(): React.JSX.Element {
  const { colors } = useTheme();
  return (
    <SafeAreaView >
      <View style={
        [styles.container,
        {
          backgroundColor: colors.neutral000,
        },
      ]}>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}
