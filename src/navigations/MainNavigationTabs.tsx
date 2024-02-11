import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import ROUTES from '@constants/routes';
import TabBar from '@components/TabBar';
import HomeStackNavigation from './HomeStackNavigation';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const MainNavigationTabs = (): React.JSX.Element => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={ROUTES.HOME_STACK}
        component={HomeStackNavigation}
        options={{
          tabBarLabel: t('tabs.home'),
        }}
      />
      <Tab.Screen
        name={ROUTES.COURSES}
        component={HomeScreen}
        options={{
          tabBarLabel: t('tabs.courses'),
        }}
      />
      <Tab.Screen
        name={ROUTES.QUIZZES}
        component={HomeScreen}
        options={{
          tabBarLabel: t('tabs.quizzes'),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={HomeScreen}
        options={{
          tabBarLabel: t('tabs.profile'),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigationTabs;
