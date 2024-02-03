import React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import LoginScreen from './LoginScreen';
const AuthScreen = (): React.JSX.Element => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          // @ts-ignore: Property exists
          backgroundColor: colors.primary000,
        },
      ]}>
      <Image
        source={require('@assets/images/logo.png')}
        style={{flex: 1, resizeMode: 'contain', alignSelf: 'center'}}
      />
      <LoginScreen />
    </View>
  );
};

export default AuthScreen;
