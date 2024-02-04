import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';
import {Animated} from 'react-native';
import useTranslateYAnimation from '@hooks/useTranslateYAnimation';
import Input from '@components/Input';
import EmailIcon from '@assets/icons/EmailIcon';
import { CustomColors} from 'src/styles/themes';
import PasswordIcon from '@assets/icons/PasswordIcon';

const LoginScreen = (): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors:CustomColors}= useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [stylesInputs, setStylesInputs] = useState({
    emailInputColor: colors.neutral000,
    emailInputBorderColor: colors.neutral300,
    passwordInputColor: colors.neutral000,
    passwordInputBorderColor: colors.neutral300,
    iconColor: colors.neutral1500,
    iconPasswordColor: colors.neutral1500,
  } as any);
  const {height}: {height: number} = useWindowDimensions();
  const animatedValue = useTranslateYAnimation(height);
  useEffect(() => {
    //Animate Login container
    animatedValue.animate();
  }, []);

  const handleEmailInput = (e:string) => {
    const text = e;
    setEmail(text);
    if (text.length > 0) {
      setStylesInputs({
        ...stylesInputs,
        emailInputColor: colors.neutral300,
        iconColor: colors.primary000,
      });
    } else {
      setStylesInputs({
        ...stylesInputs,
        emailInputColor: colors.neutral000,
        iconColor: colors.neutral1500,
      });
    }
  }

  const handlePasswordInput = (e:string) => {
    const text = e;
    setPassword(text);
    if (text.length > 0) {
      setStylesInputs({
        ...stylesInputs,
        passwordInputColor: colors.neutral300,
        iconPasswordColor: colors.primary000,
      });
    } else {
      setStylesInputs({
        ...stylesInputs,
        passwordInputColor: colors.neutral000,
        iconPasswordColor: colors.neutral1500,
      });
    }
  }
  return (
    <Animated.View
      style={[
        styles.authContainer,
        {
          top: animatedValue.translateY,
          height: height * 0.65,
          backgroundColor: colors.neutral000,
        },
      ]}>
      <Text
        style={[
          styles.header,
          {
            color: colors.black,
          },
        ]}>
        Iniciar Sesión
      </Text>
      <Input
        placeholder="Ingresa tu correo electrónico"
        Icon={EmailIcon}
        iconColor={
          stylesInputs.iconColor
        }
        inputStyle={
          {
            borderWidth: 1,
            backgroundColor: stylesInputs.emailInputColor,
            borderColor: stylesInputs.emailInputBorderColor,
          }
        }
        value={email}
        keyboard="email-address"
        props={{}}
        onChangeText={handleEmailInput}
      />
      <Input
        placeholder="Enter your password"
        inputStyle={
          {
            borderWidth: 1,
            backgroundColor: stylesInputs.passwordInputColor,
            borderColor: stylesInputs.passwordInputBorderColor,
          }
        }
        Icon={PasswordIcon}
        iconColor={stylesInputs.iconPasswordColor}
        secureTextEntry={true}
        value={password}
        props={{autoCorrect: false}}
        onChangeText={handlePasswordInput}
      />
    </Animated.View>
  );
};

export default LoginScreen;
