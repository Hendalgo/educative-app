import React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles';
import {useTheme} from '@react-navigation/native';

const LoadingScreen = (): React.JSX.Element => {
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
      <Image source={require('../assets/images/logo.png')} />
    </View>
  );
};

export default LoadingScreen;
