import {DefaultTheme, Theme} from '@react-navigation/native';

export interface CustomColors{
  primary1600: string;
  primary1200: string;
  primary800: string;
  primary400: string;
  primary000: string;
  primaryDark400: string;
  primaryDark800: string;

  neutral000: string;
  neutral300: string;
  neutral600: string;
  neutral900: string;
  neutral1200: string;
  neutral1500: string;
  neutral1800: string;
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  black: string;
}

export interface CustomTheme extends Theme {
  colors: CustomColors;
}

export const lightTheme:CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006DEC',
    primary1600: '#ECF4FD',
    primary1200: '#A1C9F7',
    primary800: '#569EF0',
    primary400: '#1474E1',
    primary000: '#0D4D98',
    primaryDark400: '#07274B',
    primaryDark800: '#020A13',

    neutral000: '#FFFFFF',
    neutral300: '#EBEBEB',
    neutral600: '#CCCCCC',
    neutral900: '#ADADAD',
    neutral1200: '#8F8F8F',
    neutral1500: '#707070',
    neutral1800: '#020A13',
    black: '#191919',
  },
};

export const darkTheme:CustomTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006DEC',
    primary1600: '#ECF4FD',
    primary1200: '#A1C9F7',
    primary800: '#569EF0',
    primary400: '#1474E1',
    primary000: '#0D4D98',
    primaryDark400: '#07274B',
    primaryDark800: '#020A13',

    neutral000: '#FFFFFF',
    neutral300: '#EBEBEB',
    neutral600: '#CCCCCC',
    neutral900: '#ADADAD',
    neutral1200: '#8F8F8F',
    neutral1500: '#707070',
    neutral1800: '#020A13',
    black: '#191919',
  },
};