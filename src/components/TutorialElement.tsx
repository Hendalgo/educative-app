import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import styles from '@styles/index';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from '@styles/themes';
interface TutorialElementProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}

const TutorialElement = ({
  image,
  title,
  description,
}: TutorialElementProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <View
      style={{
        ...styles.tutorialContainer,
        backgroundColor: colors.primary000,
      }}>
      <Image source={image} style={styles.tutorialImage} />
      <Text
        style={{
          ...styles.title,
          color: colors.neutral000,
          ...styles.textCenter,
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...styles.bodyTutorial,
          color: colors.neutral000,
          ...styles.textCenter,
        }}>
        {description}
      </Text>
    </View>
  );
};

export default TutorialElement;
