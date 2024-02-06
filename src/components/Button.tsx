import React from 'react';
import {Image, ImageSourcePropType, Pressable, StyleProp} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomColors} from 'src/styles/themes';
import {Text} from 'react-native';
import globalStyles from '@styles/index';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  color?: string;
  type?:
    | 'primary'
    | 'secondary'
    | 'disable'
    | 'warning'
    | 'success'
    | 'info'
    | 'danger'
    | 'link'
    | 'text'
    | 'outline'
    | 'ghost'
    | 'dashed'
    | 'default'
    | 'text';
  image?: ImageSourcePropType;
}

const Button = ({
  title,
  onPress,
  type = 'default',
  image,
}: ButtonProps): React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  //const [stylesInputs, setStylesInputs] = useState<StyleProp<any>>({});
  const styleButton: StyleProp<any> = {};
  const styleText: StyleProp<any> = {};

  const styles = {
    disable: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
      styleText.color = colors.neutral000;
    },
    primary: (): void => {
      styleButton.backgroundColor = colors.primary000;
      styleButton.borderColor = colors.primary000;
      styleText.color = colors.neutral000;
    },
    secondary: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    warning: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    success: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    info: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    danger: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    link: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    text: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    outline: (): void => {
      styleButton.backgroundColor = 'transparent';
      styleButton.borderColor = colors.neutral1200;
      styleButton.borderWidth = 1;
    },
    ghost: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    dashed: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
    default: (): void => {
      styleButton.backgroundColor = colors.primary1200;
      styleButton.borderColor = colors.primary1200;
    },
  };
  styles[type] && styles[type]();
  return (
    <Pressable
      style={[
        {
          ...styleButton,
          ...globalStyles.button,
        },
      ]}
      onPress={onPress}>
      {image && (
        <Image
          source={image}
          style={{
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      )}
      {title && (
        <Text
          style={{
            ...styleText,
            fontSize: 16,
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
