import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from '@screens/LoadingScreen';
import TutorialScreen from '@screens/TutorialScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigationTabs from './MainNavigationTabs';
import {TutorialContext} from '@contexts/TutorialContext';
import ROUTE from '@constants/routes';

const Stack: any = createStackNavigator();

const TutorialNavigationStack = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tutorial, setTutorial]: any = useContext(TutorialContext);

  useEffect(() => {
    AsyncStorage.getItem('tutorial').then(tutorial => {
      if (tutorial) {
        setTutorial(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  return isLoading ? (
    <LoadingScreen />
  ) : !tutorial ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTE.TUTORIAL} component={TutorialScreen} />
    </Stack.Navigator>
  ) : (
    <MainNavigationTabs />
  );
};

export default TutorialNavigationStack;
