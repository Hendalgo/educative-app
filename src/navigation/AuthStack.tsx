import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { NavigationContext } from '@react-navigation/native';

const Stack: any = createStackNavigator();

const AuthStack = (): React.JSX.Element => {
  const navigation = React.useContext(NavigationContext);
  
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group>
        <Stack.Screen 
          name="LoadingLogin" 
          component={LoadingScreen} 
          options={{headerShown: false}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'trasparentModal'}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={LoginScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name="ForgotPassword" component={LoginScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
