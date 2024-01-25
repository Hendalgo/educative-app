import React from "react";
import { Text, View, SafeAreaView } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
//import { useAuth } from "../contexts/AuthContext";
import { styles } from "../styles";

export default function Login(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
}