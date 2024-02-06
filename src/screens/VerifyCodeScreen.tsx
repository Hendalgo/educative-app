// Importing necessary dependencies
import React, {useEffect} from 'react';
import {View, Text, Pressable, StyleProp} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
import styles from '@styles/index';
import AuthScreen from './AuthScreen';
import Button from '@components/Button';
import IndividualInputs from '@components/IndividualInputs';
import useFormatTime from '@hooks/useFormatTime';

// Setting the time to resend the code
const timeToResenCode = 10;

// Defining the VerifyCodeScreen component
const VerifyCodeScreen = ({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();

  // State variables
  const [inputValues, setInputValues] = React.useState<number[]>([]);
  const [buttonDisabled, setButtonDisabled] = React.useState<any>('disable');
  const [timeToResend, setTimeToResend] =
    React.useState<number>(timeToResenCode);
  const [resentButtonStyles, setResentButtonStyles] = React.useState<
    StyleProp<any>
  >({
    color: colors.neutral1200,
    textDecorationLine: 'underline',
  });
  const [error, setError] = React.useState<string>('');

  // Function to handle button state
  const handleButton = (completed: boolean) => {
    if (completed) {
      setButtonDisabled('primary');
    } else {
      setButtonDisabled('disable');
    }
  };

  // Function to handle button press
  const handlePress = () => {
    setError('');
    if (buttonDisabled === 'primary') {
      setButtonDisabled('disable');
      setTimeout(() => {
        //Check if code is equals to 2222
        if (inputValues.join('') === '2222') {
          navigation.navigate('ChangePasswordScreen');
        } else {
          setError('El código es incorrecto');
        }
        setButtonDisabled('primary');
      }, 1000);
    }
  };

  // Function to handle code resend
  const handleResendCode = () => {
    if (timeToResend === 0) {
      setTimeToResend(timeToResenCode);
      setResentButtonStyles({
        color: colors.neutral1200,
        textDecorationLine: 'underline',
      });
    }
  };

  // useEffect hook to update the time to resend
  useEffect(() => {
    if (timeToResend > 0) {
      const interval = setInterval(() => {
        setTimeToResend(timeToResend - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResentButtonStyles({
        color: colors.primary,
        textDecorationLine: 'underline',
      });
    }
  }, [timeToResend]);

  // Rendering the component
  return (
    <AuthScreen>
      <View
        style={[
          styles.authContainer,
          {
            backgroundColor: colors.neutral000,
          },
        ]}>
        <Text
          style={[
            styles.title,
            {
              fontSize: 18,
              color: colors.black,
            },
            styles.textCenter,
          ]}>
          Verifica tu email
        </Text>
        <Text
          style={[
            styles.subtitle,
            {
              fontSize: 14,
              marginBottom: 15,
              color: colors.neutral900,
            },
            styles.textCenter,
          ]}>
          Ingrese el código de 4 digitos enviado a hendalgo@unimar.edu.ve
        </Text>
        {/*Introduce verification code*/}
        <View>
          <IndividualInputs
            values={inputValues}
            setValues={setInputValues}
            elementsNum={4}
            onCompleted={handleButton}
          />
        </View>
        {/*Resend code button*/}
        <Pressable
          onPress={handleResendCode}
          style={({pressed}) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}>
          <Text
            style={[
              styles.subtitle,
              resentButtonStyles,
              styles.textCenter,
              {
                marginBottom: 15,
              },
            ]}>
            {timeToResend === 0
              ? 'Reenviar código'
              : `Reenviar código en ${useFormatTime(timeToResend)}`}
          </Text>
        </Pressable>
        {/*Error message*/}
        {error ? (
          <Text
            style={[
              styles.errorText,
              {
                fontSize: 14,
                marginBottom: 15,
              },
              styles.textCenter,
            ]}>
            {error}
          </Text>
        ) : null}
        <Button title="Verificar" onPress={handlePress} type={buttonDisabled} />
      </View>
    </AuthScreen>
  );
};

export default VerifyCodeScreen;
