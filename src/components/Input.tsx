import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";

interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  ref: React.RefObject<TextInput>;
}

const Input = ({ label, placeholder, iconSrc, ref}: InputProps): React.JSX.Element => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container]}>
      {label && (
        <Text style={[styles.label, { 
          // @ts-ignore
          color: colors.black 
          }]}>
          {label}
        </Text>
      )}
      {
        iconSrc && 
        <Image 
          testID="icon"
          src={iconSrc} 
        />
      }
      <TextInput
        style={[styles.input, { 
          // @ts-ignore
          color: colors.black }]}
        placeholderTextColor={
          // @ts-ignore
          colors.neutral1200
        }
        placeholder={placeholder}
        ref={ref}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
});

export default Input;