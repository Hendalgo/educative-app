import React, { useEffect, useState } from 'react';
import {View, Image, useWindowDimensions} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from 'src/styles/themes';
import { useKeyboardStatus } from '@hooks/useKeyboardStatus';

const AuthScreen = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
  //@ts-ignore
  //Custom colors from the theme
  const {colors}: {colors: CustomColors} = useTheme();
  const {height} = useWindowDimensions();
  const keyboard = useKeyboardStatus();
  const [maxHeight, setMaxHeight] = useState<number>(0.65);
  
  useEffect(() => {
    if (keyboard) {
      setMaxHeight(0.4);
    } else {
      setMaxHeight(0.65);
    }
  }, [keyboard]);
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
          maxHeight: height * maxHeight,
        }}>
        {children}
      </View>
    </View>
  );
};

export default AuthScreen;
