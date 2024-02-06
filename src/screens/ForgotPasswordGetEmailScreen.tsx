import React, {useEffect, useState} from 'react';
import AuthScreen from './AuthScreen';
import {Animated, useWindowDimensions, Text} from 'react-native';
import styles from '../styles';
import useTranslateYAnimation from '@hooks/useTranslateYAnimation';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '../styles/themes';
import Input from '@components/Input';
import EmailIcon from '@assets/icons/EmailIcon';
import Button from '@components/Button';

const ForgotPasswordGetEmailScreen = ({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element => {
  const {height}: {height: number} = useWindowDimensions();
  const animatedValue = useTranslateYAnimation(height);
  const maxHeight = 0.6;
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  const [email, setEmail] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<any>('disable');
  const [stylesInputs, setStylesInputs] = useState({
    emailInputColor: colors.neutral000,
    emailInputBorderColor: colors.neutral300,
    iconColor: colors.neutral1500,
  });

  const handleEmailInput = (e: string) => {
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
  };
  useEffect(() => {
    animatedValue.animate();
  }, [height]);
  useEffect(() => {
    if (email.length > 0) {
      setButtonDisabled('primary');
    } else {
      setButtonDisabled('disable');
    }
  }, [email]);

  const handleButton = () => {
    if (buttonDisabled === 'primary') {
      navigation.navigate('ForgotPasswordGetCode');
    }
  };
  return (
    <AuthScreen>
      <Animated.View
        style={{
          top: animatedValue.translateY,
          ...styles.authContainer,
          backgroundColor: colors.neutral000,
          maxHeight: height * maxHeight,
        }}>
        <Text
          style={{
            color: colors.black,
            ...styles.title,
            ...styles.textCenter,
            fontSize: 18,
          }}>
          Recuperar contraseña
        </Text>
        <Text
          style={{
            ...styles.subtitle,
            ...styles.textCenter,
            color: colors.neutral1500,
          }}>
          Ingrese su dirección de correo electrónico para recibir un código de
          verificación
        </Text>
        <Input
          placeholder="Ingresa tu correo electrónico"
          Icon={EmailIcon}
          iconColor={stylesInputs.iconColor}
          inputStyle={{
            borderWidth: 1,
            backgroundColor: stylesInputs.emailInputColor,
            borderColor: stylesInputs.emailInputBorderColor,
            marginTop: 10,
            marginBottom: 14,
          }}
          value={email}
          keyboard="email-address"
          props={{}}
          onChangeText={handleEmailInput}
        />
        <Button title="Enviar" type={buttonDisabled} onPress={handleButton} />
      </Animated.View>
    </AuthScreen>
  );
};
export default ForgotPasswordGetEmailScreen;
