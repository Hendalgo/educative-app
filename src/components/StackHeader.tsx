import React from 'react';
import styles from '@styles/index';
import {Pressable, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
import BackIcon from '@assets/icons/BackIcon';

interface StackHeaderProps {
  navigation: any;
  back: any;
  title?: string;
}

const StackHeader = ({
  navigation,
  back,
  title,
}: StackHeaderProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <View
      style={[
        styles.headerContainer,
        {
          backgroundColor: 'transparent',
        },
      ]}>
      {back ? (
        <Pressable testID="back-button" onPress={() => navigation.goBack()}>
          <BackIcon color={colors.neutral000} size={32} />
        </Pressable>
      ) : (
        <View />
      )}
      <Text
        style={[
          {
            color: colors.black,
          },
        ]}>
        {title}
      </Text>
      <View />
    </View>
  );
};

export default StackHeader;
