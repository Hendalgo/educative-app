import React, {useContext, useEffect, useState} from 'react';
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
import Button from '@components/Button';
import AuthScreen from './AuthScreen';
import {AuthContext} from '@contexts/AuthContext';
import {IAuthContext} from '@interfaces/Auth';
import {login} from '@services/auth';
import {useTranslation} from 'react-i18next';
import {AUTH_REDUCER_ACTIONS} from '@constants/reducersActions';
import ROUTES from '@constants/routes';

const LoginScreen = ({navigation}: {navigation?: any}): React.JSX.Element => {
  const {t} = useTranslation();
  //@ts-ignore
  //Custom colors from the theme
  const {colors}: {colors: CustomColors} = useTheme();
  const {authDispatch}: IAuthContext = useContext(AuthContext);
  // States for inputs
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('' as any); // [error, setError]
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
  const animatedValue = useTranslateYAnimation(height);

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
  const handleLogin = () => {
    setButtonDisabled('disable');
    setError('');
    if (
      email.length > 0 &&
      password.length > 0 &&
      buttonDisabled === 'primary'
    ) {
      login(email, password)
        .then(user => {
          if (user) {
            authDispatch({type: AUTH_REDUCER_ACTIONS.LOGIN, payload: user});
          }
        })
        .catch((error: any) => {
          setError(error.message);
          setButtonDisabled('primary');
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
          {t('login.title')}
        </Text>
        {/*Email Input*/}
        <Input
          placeholder={t('login.emailPlaceholder')}
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
          placeholder={t('login.passwordPlaceholder')}
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
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD_GET_EMAIL)
            }>
            <Text
              style={{
                color: colors.neutral1200,
              }}>
              {t('login.forgotPassword')}
            </Text>
          </Pressable>
        </View>
        {/*Error Message*/}
        {error && (
          <View
            style={{
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: 'red',
                fontFamily: 'Poppins-Regular',
              }}>
              {error}
            </Text>
          </View>
        )}
        {/*Login Button*/}
        <View
          style={{
            marginTop: 10,
          }}>
          <Button
            title={t('login.loginButton')}
            type={buttonDisabled}
            onPress={() => handleLogin()}
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
          }}>
          <View
            style={{
              ...styles.divider,
              backgroundColor: colors.neutral300,
            }}
          />
          <Text
            style={{
              color: colors.neutral900,
              fontFamily: 'Poppins-Regular',
            }}>
            o
          </Text>
          <View
            style={{
              ...styles.divider,
              backgroundColor: colors.neutral300,
              marginBottom: 20,
            }}
          />
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
