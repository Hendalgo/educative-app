import React, {useState} from "react";
import { Pressable, StyleProp } from "react-native";
import { useTheme } from "@react-navigation/native";
import { CustomColors } from "src/styles/themes";
import styles from "../styles";
import { Text } from "react-native";


interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  type?: 'primary' | 'secondary' | 'disable' | 'warning' | 'success' | 'info' | 'danger' | 'link' | 'text' | 'outline' | 'ghost' | 'dashed' | 'default' | 'text';
}

const Button = ({ title, onPress, type = 'default' }: ButtonProps): React.JSX.Element => {
  //@ts-ignore
  const { colors }: { colors: CustomColors } = useTheme();
  //const [stylesInputs, setStylesInputs] = useState<StyleProp<any>>({});
  const styleButton:StyleProp<any> = {}
  const styleText:StyleProp<any> = {}

  const styles = {
    disable: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
      styleText.color = colors.neutral000;
    },
    primary: (): void=>{
      styleButton.backgroundColor = colors.primary000;
      styleButton.borderColor = colors.primary000;
      styleText.color = colors.neutral000;
    },
    secondary: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    warning: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    success: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    info: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    danger: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    link: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    text: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    outline: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    ghost: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    dashed: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    default: (): void=>{
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    }
  }
  styles[type] && styles[type]();
  return (
    <Pressable
      style={[
        {
          ...styleButton,
          padding: 14,
          borderRadius: 8,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          ...styleText,
          fontSize: 16,
          fontFamily: 'Poppins-Regular',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;