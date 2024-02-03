import React, {useEffect, useRef} from 'react';
import {Text} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';
import {Animated} from 'react-native';
import useTranslateYAnimation from '@hooks/useTranslateYAnimation';
import Input from '@components/Input';
import EmailIcon from '@assets/icons/EmailIcon';

const LoginScreen = (): React.JSX.Element => {
  const {colors} = useTheme();
  const emailRef = useRef();
  const passwordRef = useRef();
  const {height}: {height: number} = useWindowDimensions();
  const animatedValue = useTranslateYAnimation(height);
  useEffect(() => {
    //Animate Login container
    animatedValue.animate();
  }, []);

  return (
    <Animated.View
      style={[
        styles.authContainer,
        {
          top: animatedValue.translateY,
          height: height * 0.55,
          // @ts-ignore: Property exists
          backgroundColor: colors.neutral000,
        },
      ]}>
      <Text
        style={[
          styles.header,
          {
            // @ts-ignore: Property exists
            color: colors.black,
          },
        ]}>
        Iniciar Sesión
      </Text>
      <Input
        placeholder="Enter your email"
        Icon={EmailIcon}
        iconColor={
          // @ts-ignore: Property exists
          colors.neutral1500
        }
        innerRef={emailRef}
        keyboard="email-address"
        props={{}}
      />
      <Input
        placeholder="Enter your password"
        innerRef={passwordRef}
        props={{autoCorrect: false}}
      />
    </Animated.View>
  );
};

export default LoginScreen;
