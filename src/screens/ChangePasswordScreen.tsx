// Importing necessary dependencies
import React, {useEffect} from 'react';
import {Text, StyleProp, Animated, useWindowDimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
import styles from '@styles/index';
import AuthScreen from './AuthScreen';
import Button from '@components/Button';
import Input from '@components/Input';
import useTranslateYAnimation from '@hooks/useTranslateYAnimation';

// Defining the ChangePasswordScreen component
const ChangePasswordScreen = ({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();

  // State variables
  const [inputValues, setInputValues] = React.useState<string[]>(['', '']);
  const [error, setError] = React.useState<string>('');
  const {height}: {height: number} = useWindowDimensions();
  const animatedValue = useTranslateYAnimation(height);
  const [buttonDisabled, setButtonDisabled] = React.useState<any>('disable');
  const [passwordStyles, setPasswordStyles] = React.useState<StyleProp<any>>({
    backgroundColor: colors.neutral000,
    borderColor: colors.neutral300,
    color: colors.neutral600,
  });
  const [confirmPasswordStyles, setConfirmPasswordStyles] = React.useState<
    StyleProp<any>
  >({
    backgroundColor: colors.neutral000,
    borderColor: colors.neutral300,
    color: colors.neutral600,
  });

  // Function to handle text input changes
  const handleText = (text: string, index: number) => {
    const newValues = [...inputValues];
    newValues[index] = text;
    setInputValues(newValues);
    if (text.length > 0) {
      if (index === 0) {
        setPasswordStyles({
          ...passwordStyles,
          backgroundColor: colors.neutral300,
          color: colors.black,
        });
      } else {
        setConfirmPasswordStyles({
          ...confirmPasswordStyles,
          backgroundColor: colors.neutral300,
          color: colors.black,
        });
      }
    } else {
      if (index === 0) {
        setPasswordStyles({
          ...passwordStyles,
          backgroundColor: colors.neutral000,
          color: colors.black,
        });
      } else {
        setConfirmPasswordStyles({
          ...confirmPasswordStyles,
          backgroundColor: colors.neutral000,
          color: colors.black,
        });
      }
    }
  };

  // Effect hook to animate the view based on window height
  useEffect(() => {
    animatedValue.animate();
  }, [height]);

  // Effect hook to enable/disable the button based on input values
  useEffect(() => {
    if (inputValues[0].length > 0 && inputValues[1].length > 0) {
      setButtonDisabled('primary');
    } else {
      setButtonDisabled('disable');
    }
  }, [inputValues]);

  // Rendering the component
  return (
    <AuthScreen>
      <Animated.View
        style={{
          ...styles.authContainer,
          top: animatedValue.translateY,
          backgroundColor: colors.neutral000,
        }}>
        <Text
          style={{
            ...styles.title,
            fontSize: 20,
            color: colors.black,
            ...styles.textCenter,
          }}>
          Cambiar contraseña
        </Text>
        <Text
          style={{
            ...styles.subtitle,
            ...styles.textCenter,
            color: colors.neutral900,
          }}>
          Su nueva contraseña debe ser diferente de la contraseña utilizada
          anteriormente
        </Text>
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          value={inputValues[0]}
          inputStyle={{
            ...passwordStyles,
            borderWidth: 1,
            marginTop: 10,
            paddingLeft: 20,
          }}
          props={{}}
          onChangeText={(e: string) => handleText(e, 0)}
        />
        <Input
          value={inputValues[1]}
          placeholder="Confirmar contraseña"
          secureTextEntry={true}
          inputStyle={{
            ...confirmPasswordStyles,
            borderWidth: 1,
            marginBottom: 14,
            paddingLeft: 20,
          }}
          props={{}}
          onChangeText={(e: string) => handleText(e, 1)}
        />
        {error.length > 0 && (
          <Text
            style={{
              ...styles.subtitle,
              color: 'red',
              ...styles.textCenter,
              marginBottom: 18,
              marginTop: 0,
            }}>
            {error}
          </Text>
        )}
        <Button
          title="Cambiar contraseña"
          onPress={() => {
            if (buttonDisabled === 'primary') {
              setButtonDisabled('disable');
              setError('');
              setTimeout(() => {
                // Check if passwords are equal
                if (inputValues[0] === inputValues[1]) {
                  navigation.navigate('Login');
                } else {
                  setError('Las contraseñas no coinciden');
                }
                setButtonDisabled('primary');
              }, 1000);
            }
          }}
          type={buttonDisabled}
        />
      </Animated.View>
    </AuthScreen>
  );
};

export default ChangePasswordScreen;
