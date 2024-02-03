import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from "react-native";

const SignUpScreen = (): React.JSX.Element => {
  const { colors } = useTheme();
  const {height}:{height : number} = useWindowDimensions();
  return (
    <View style={
      [
        {
          // @ts-ignore: Property exists
          height: height * 0.5,
          backgroundColor: "black",
          zIndex: 10,
        },
    ]}>
      <Text style={{color: "yellow", fontSize: 50}}>Login</Text>
    </View>
  );
}

export default SignUpScreen;