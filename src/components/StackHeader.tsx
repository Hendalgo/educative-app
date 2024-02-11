import React from 'react';
import styles from '@styles/index';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
import BackIcon from '@assets/icons/BackIcon';

interface StackHeaderProps {
  navigation: any;
  back: any;
  title?: string;
  onPress?: () => void;
  style?: ViewStyle,
  iconColor?: string
}

const StackHeader = ({
  navigation,
  back,
  title,
  onPress,
  style,
  iconColor
}: StackHeaderProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <View
      style={[
        styles.headerContainer,
        style? style: {}
      ]}
      >
      {back ? 
        (
          <Pressable testID="back-button" onPress={() => onPress? onPress():navigation.goBack()}>
            <BackIcon color={iconColor ||colors.neutral000} size={32} />
          </Pressable>
        ) : null
      }
      <Text
        style={[
          {
            color: colors.black,
          },
          stackHeader.text
        ]}>
        {title}
      </Text>
      <View />
    </View>
  );
};

export default StackHeader;


const stackHeader = StyleSheet.create({
  text:{
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  }
})
