import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;