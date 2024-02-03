import React, { useEffect, useRef } from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import { useTheme } from '@react-navigation/native';
import { useWindowDimensions } from "react-native";
import { Animated } from 'react-native';
import useTranslateYAnimation from '@hooks/useTranslateYAnimation';

const LoginScreen = (): React.JSX.Element => {
  const { colors } = useTheme();
  const {height}:{height : number} = useWindowDimensions();
  const animatedValue = useTranslateYAnimation(height);
  useEffect(() => {
    animatedValue.animate()
  }, []);

  return (
    <Animated.View style={
      [ styles.authContainer,
        {
          top: animatedValue.translateY,
          height: height * 0.55,
          // @ts-ignore: Property exists
          backgroundColor: colors.neutral000
        },
    ]}>
      <Text>Iniciar Sesión</Text>
    </Animated.View>
  );
}

export default LoginScreen;