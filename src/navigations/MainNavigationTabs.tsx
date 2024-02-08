import React from "react";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import ROUTES from "@constants/routes";
import { HORIZONTAL_PADDING } from "@styles/index";
import TabBar from "@components/TabBar";

const Tab = createBottomTabNavigator();

const MainNavigationTabs = ():React.JSX.Element => { 
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <TabBar {...props}/>}
    >
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen 
        name={ROUTES.COURSES} 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Cursos',
        }}
      />
      <Tab.Screen 
        name={ROUTES.QUIZZES} 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Quizzes',
        }}
      />
      <Tab.Screen 
        name={ROUTES.PROFILE} 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigationTabs;