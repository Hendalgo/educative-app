import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconColor?: string;
  value?: string;
  props: TextInputProps;
  Icon?: any;
  keyboard?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  inputStyle?: StyleProp<any>;
}

const Input = ({
  label,
  placeholder,
  iconColor,
  Icon,
  inputStyle,
  keyboard = 'default',
  value,
  ...props
}: InputProps): React.JSX.Element => {
  const {colors}: {colors: any} = useTheme();

  return (
    <View style={[styles.container]}>
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: colors.black,
            },
          ]}>
          {label}
        </Text>
      )}
      <View
        style={{
          ...styles.inputContainer,
          backgroundColor: colors.card,
        }}>
        {Icon && (
          <View
            style={{
              position: 'absolute',
              left: 12,
              zIndex: 1,
            }}
            testID="icon">
            <Icon color={iconColor} />
          </View>
        )}
        <TextInput
          style={{
            ...styles.input,
            ...inputStyle,
            ...styles.inputFont,
          }}
          placeholderTextColor={colors.neutral1200}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboard}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    padding: 12,
    borderRadius: 8,
    width: '100%',
    paddingLeft: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFont: {
    fontFamily: 'Poppins-Regular',
  },
});

export default Input;
