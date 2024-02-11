import { useTheme } from "@react-navigation/native";
import { CustomColors } from "@styles/themes";
import React from "react";
import {Pressable, Image, ImageSourcePropType } from "react-native";
import styles from "@styles/index";

interface CircleButtonProps {
  onPress: () => void;
  image: ImageSourcePropType;
}

const CircleButton = ({onPress, image}:CircleButtonProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}:{colors: CustomColors} = useTheme();
  return (
    <Pressable
      testID="circle-button"
      onPress={onPress}
      style={{
        backgroundColor: colors.primary1600,
        ...styles.circleButton,
      }}
    >
      <Image
        source={image}
        width={50}
        height={50}

      />
    </Pressable>
  );
};

export default CircleButton;