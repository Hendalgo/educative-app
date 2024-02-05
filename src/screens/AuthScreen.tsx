import React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from 'src/styles/themes';

const AuthScreen = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
  //@ts-ignore
  //Custom colors from the theme
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <View
      style={[
        {
          flex: 1,
          // @ts-ignore: Property exists
          backgroundColor: colors.primary000,
        },
      ]}>
      {/*Image for the logo*/}
      <Image
        source={require('@assets/images/logo.png')}
        style={{
          ...styles.authLogo,
        }}
      />
      {/*View for Login, Register and Forgot Password*/}
      <View
        style={{
          flex: 0,
        }}>
        {children}
      </View>
    </View>
  );
};

export default AuthScreen;
