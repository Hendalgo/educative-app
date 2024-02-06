import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '@screens/LoadingScreen';
import TutorialScreen from '@screens/TutorialScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';

const Stack: any = createStackNavigator();

const MainStack = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tutorial, setTutorial] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem('tutorial').then(tutorial => {
      if (tutorial) {
        setTutorial(true);
        setIsLoading(false);
      }
      else {
        setIsLoading(false);
      }
    });
  }, []);
  return (
    isLoading ? (
      <LoadingScreen />
    ) :
    !tutorial ?(
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Tutorial" component={TutorialScreen} prop ={[tutorial, setTutorial]} />
      </Stack.Navigator>
    ) : (
      <View>
        <Text>Home Screen</Text>
      </View>
    )
  );
};

export default MainStack;
