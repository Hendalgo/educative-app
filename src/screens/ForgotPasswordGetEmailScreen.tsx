import React, { useEffect } from "react";
import AuthScreen from "./AuthScreen";
import { Animated, useWindowDimensions, Text } from "react-native";
import styles from "../styles";
import useTranslateYAnimation from "@hooks/useTranslateYAnimation";
import { useTheme } from "@react-navigation/native";
import { CustomColors } from "../styles/themes";

const ForgotPasswordGetEmailScreen = (): React.JSX.Element => {
  const {height}: {height: number} = useWindowDimensions();
  const animatedValue = useTranslateYAnimation(height);
  const maxHeight = 0.6;
  //@ts-ignore
  const { colors }: { colors: CustomColors } = useTheme();

  useEffect(() => {
    animatedValue.animate();
  }, [height]);
  return (
    <AuthScreen>
      <Animated.View
        style={{
          
          top: animatedValue.translateY,
          ...styles.authContainer,
          backgroundColor: colors.neutral000,
          maxHeight: height * maxHeight,
        }}
      >
      <Text
        style= {
          {
            color: colors.black,
            ...styles.title,
            ...styles.textCenter,
            fontSize: 18
          }
        }
      >
        Recuperar contraseña
      </Text>
      <Text
        style= {
          {
            ...styles.subtitle,
            ...styles.textCenter,
            color: colors.neutral1500
          }
        }
      >
        Ingrese su dirección de correo electrónico para recibir un código de verificación
      </Text>
      </Animated.View>
    </AuthScreen>
  );
}

export default ForgotPasswordGetEmailScreen;