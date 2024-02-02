import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack: any = createStackNavigator();

const MainStack = (): React.JSX.Element => {
  return <Stack.Navigator />;
};

export default MainStack;
