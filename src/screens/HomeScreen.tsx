import React, { useContext } from "react";
import {Text, View, Animated, Pressable } from "react-native";
import { AuthContext } from "@contexts/AuthContext";
import { IAuthContext } from "@interfaces/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = (): React.JSX.Element => {
  const {authState, authDispatch}:IAuthContext = useContext(AuthContext);
  console.log(authState);
  return (
    <Animated.ScrollView>
      <View>
        <View>
          <Text>
            Hola,
          </Text>
          <Text>
            {`${authState.user?.firstname} ${authState.user?.lastname}`}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            authDispatch({type: 'LOGOUT', payload: null});
            AsyncStorage.removeItem('token');
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
    </Animated.ScrollView>
  );
}

export default HomeScreen;
