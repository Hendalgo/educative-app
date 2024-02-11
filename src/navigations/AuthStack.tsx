import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/LoginScreen';
import ForgotPasswordGetEmailScreen from '@screens/ForgotPasswordGetEmailScreen';
import StackHeader from '@components/StackHeader';
import VerifyCodeScreen from '@screens/VerifyCodeScreen';
import ChangePasswordScreen from '@screens/ChangePasswordScreen';
import ROUTE from '@constants/routes';

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
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          //headerShown: false,
          gestureDirection: 'vertical',
          headerMode: 'screen',
          header: (props: any) => (
            <StackHeader back={true} title="" {...props} />
          ),
        }}>
        <Stack.Screen
          name={ROUTE.FORGOT_PASSWORD_GET_EMAIL}
          component={ForgotPasswordGetEmailScreen}
        />
        <Stack.Screen name={ROUTE.VERIFY_CODE} component={VerifyCodeScreen} />
        <Stack.Screen
          name={ROUTE.RESET_PASSWORD}
          component={ChangePasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
