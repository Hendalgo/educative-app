import React, { useEffect, useRef } from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from "react-native";
import { Animated } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = (): React.JSX.Element => {
  const { colors } = useTheme();
  const {height}:{height : number} = useWindowDimensions();
  const animatedValue = useRef(new Animated.Value(height));
  const translateY = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
  });
  useEffect(() => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, []);
  return (
    <Animated.View style={
      [
        {
          top: animatedValue.current,
          height: height * 0.55,
          width: "100%",
          // @ts-ignore: Property exists
          backgroundColor: colors.neutral000,
          justifyContent: "flex-end",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
    ]}>
      <Text>Iniciar Sesión</Text>
      <TextInput placeholder="Correo Electrónico" />
    </Animated.View>
  );
}

export default LoginScreen;