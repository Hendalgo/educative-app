import React from "react";
import {View, Text, TextInput, Pressable, StyleProp, TextInputProps} from "react-native";
import { useTheme } from "@react-navigation/native";
import { CustomColors } from "@styles/themes";
import styles from "@styles/index";
import AuthScreen from "./AuthScreen";
import Button from "@components/Button";
import IndividualInputs from "@components/IndividualInputs";

const VerifyCodeScreen = ({navigation}:{navigation:any}): React.JSX.Element => {
  //@ts-ignore
  const { colors }: { colors: CustomColors } = useTheme();
  const [inputValues, setInputValues] = React.useState<number[]>([]);
  const [buttonDisabled, setButtonDisabled] = React.useState<any>('disable');
  const handleButton = (completed: boolean) => {
    if (completed){
      setButtonDisabled('primary');
    }
  }
  return (
    <AuthScreen>
      <View style={[
        styles.authContainer,
        {
          backgroundColor: colors.neutral000,
        }
      ]}>
        <Text style={[styles.title, {
          fontSize: 18,
          color: colors.black,
        },
          styles.textCenter
        ]}>
          Verifica tu email
        </Text>
        <Text style={[styles.subtitle, {
          fontSize: 14,
          marginBottom: 15,
          color: colors.neutral1500,
        },
          styles.textCenter
        ]}>
          Ingresa el código que te enviamos a tu correo
        </Text>
        <View>
          <IndividualInputs
            values={inputValues}
            setValues={setInputValues}
            elementsNum={4}
            onCompleted={handleButton}
          />
        </View>
        <Button
          title="Verificar"
          onPress={()=>{}}
          type={buttonDisabled}
        />
      </View>
    </AuthScreen>
  );
}

export default VerifyCodeScreen;