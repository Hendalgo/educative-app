import React, {useEffect, useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import {useWindowDimensions} from 'react-native';
import {Animated} from 'react-native';
import useTranslateYAnimation from '@hooks/useTranslateYAnimation';
import Input from '@components/Input';
import EmailIcon from '@assets/icons/EmailIcon';
import {CustomColors} from 'src/styles/themes';
import PasswordIcon from '@assets/icons/PasswordIcon';
import {useKeyboardStatus} from '@hooks/useKeyboardStatus';
import Button from '@components/Button';
import AuthScreen from './AuthScreen';

const LoginScreen = ({navigation}: {navigation?: any}): React.JSX.Element => {
  //@ts-ignore
  //Custom colors from the theme
  const {colors}: {colors: CustomColors} = useTheme();

  // States for inputs
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //const [error, setError] = useState<string>('' as any); // [error, setError]
  //const [loading, setLoading] = useState<boolean>(false); // [loading, setLoading
  const [buttonDisabled, setButtonDisabled] = useState<any>('disable'); // [buttonDisabled, setButtonDisabled

  // Styles for inputs and icons
  // To change the color of the input and the icon when the user types
  const [stylesInputs, setStylesInputs] = useState({
    emailInputColor: colors.neutral000,
    emailInputBorderColor: colors.neutral300,
    passwordInputColor: colors.neutral000,
    passwordInputBorderColor: colors.neutral300,
    iconColor: colors.neutral1500,
    iconPasswordColor: colors.neutral1500,
  } as any);

  // Get the height of the screen
  // This is used to animate the login container
  const {height}: {height: number} = useWindowDimensions();

  // Stable the height of the login container
  // This is used to change the height of the login container when the keyboard is open
  // because is ocupying the half of the screen and the image is not visible
  const [maxHeight, setMaxHeight] = useState<number>(0.6);
  const animatedValue = useTranslateYAnimation(height);

  const keyboard = useKeyboardStatus();

  useEffect(() => {
    if (keyboard) {
      setMaxHeight(0.4);
    } else {
      setMaxHeight(0.6);
    }
  }, [keyboard]);
  useEffect(() => {
    //Animate Login container
    animatedValue.animate();
  }, [height]);
  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setButtonDisabled('primary');
    } else {
      setButtonDisabled('disable');
    }
  }, [email, password]);
  //Handle the input for the email
  //Change the color of the input and the icon
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
  //Handle the input for the password
  const handlePasswordInput = (e: string) => {
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
  };
  return (
    <AuthScreen>
      <Animated.ScrollView
        style={[
          {
            top: animatedValue.translateY,
            ...styles.authContainer,
            backgroundColor: colors.neutral000,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              color: colors.black,
            },
          ]}>
          Iniciar Sesión
        </Text>
        {/*Email Input*/}
        <Input
          placeholder="Ingresa tu correo electrónico"
          Icon={EmailIcon}
          iconColor={stylesInputs.iconColor}
          inputStyle={{
            borderWidth: 1,
            backgroundColor: stylesInputs.emailInputColor,
            borderColor: stylesInputs.emailInputBorderColor,
          }}
          value={email}
          keyboard="email-address"
          props={{}}
          onChangeText={handleEmailInput}
        />
        {/*Password Input*/}
        <Input
          placeholder="Enter your password"
          inputStyle={{
            borderWidth: 1,
            backgroundColor: stylesInputs.passwordInputColor,
            borderColor: stylesInputs.passwordInputBorderColor,
          }}
          Icon={PasswordIcon}
          iconColor={stylesInputs.iconPasswordColor}
          secureTextEntry={true}
          value={password}
          props={{autoCorrect: false}}
          onChangeText={handlePasswordInput}
        />
        {/*Forgot Password*/}
        <View
          style={{
            alignItems: 'flex-start',
            marginTop: 8,
            marginBottom: 20,
          }}>
          <Pressable
            onPress={() => navigation.navigate('ForgotPasswordGetEmail')}>
            <Text
              style={{
                color: colors.neutral1200,
              }}>
              ¿Olvidaste tu contraseña?
            </Text>
          </Pressable>
        </View>
        {/*Login Button*/}
        <View
          style={{
            marginTop: 10,
          }}>
          <Button
            title="Continuar"
            type={buttonDisabled}
            onPress={() => console.log('Iniciar Sesión')}
          />
        </View>
        {/*Divider*/}
        <View
          style={{
            ...styles.container,
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 10,
            alignContent: 'center',
          }}
        >
          <View
            style={{
              ...styles.divider,
              backgroundColor: colors.neutral300,
            }}
          ></View>
          <Text
            style={{
              color: colors.neutral900,
              fontFamily: 'Poppins-Regular',
            }}
          >o
          </Text>
          <View
            style={{
              ...styles.divider,
              backgroundColor: colors.neutral300,
              marginBottom: 20,
            }}
          >
          </View>
        </View>
        {/*Login with Google*/}
        <Button
          type="outline"
          image={require('@assets/images/google-logo.png')}
          onPress={() => console.log('Iniciar Sesión con Google')}
        />
      </Animated.ScrollView>
    </AuthScreen>
  );
};

export default LoginScreen;
