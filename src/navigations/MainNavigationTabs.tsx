import React from "react";
import { BottomTabBarButtonProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import TabBarButton from "@components/TabBarButton";
import ROUTES from "@constants/routes";
import HomeIcon from "@assets/icons/HomeIcon";
import CoursesIcon from "@assets/icons/CourseIcon";
import QuizIcon from "@assets/icons/QuizIcon";
import UserIcon from "@assets/icons/UserIcon";
import styles, { HORIZONTAL_PADDING } from "@styles/index";

const Tab = createBottomTabNavigator();

const MainNavigationTabs = ():React.JSX.Element => { 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginHorizontal: HORIZONTAL_PADDING,
          marginBottom: 20,
          elevation: 0, // Android delete shadow
          shadowOpacity: 0, // iOS delete shadow
          justifyContent: 'center',
          alignItems: 'center',
        },
        headerShown: false
      }}
    >
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps)=> <TabBarButton {...props} label="Inicio" ><HomeIcon/></TabBarButton>
        }}
      />
      <Tab.Screen 
        name={ROUTES.COURSES} 
        component={HomeScreen} 
        options={{
          tabBarButton: (props: BottomTabBarButtonProps)=> 
            <TabBarButton {...props} label="Cursos" ><CoursesIcon/></TabBarButton>
        }}
      />
      <Tab.Screen 
        name={ROUTES.QUIZZES} 
        component={HomeScreen} 
        options={{
          tabBarButton: (props: BottomTabBarButtonProps)=> 
            <TabBarButton {...props} label="Quizzes" ><QuizIcon/></TabBarButton>
        }}
      />
      <Tab.Screen 
        name={ROUTES.PROFILE} 
        component={HomeScreen} 
        options={{
          tabBarButton: (props: BottomTabBarButtonProps)=> 
            <TabBarButton {...props} label="Perfil" ><UserIcon/></TabBarButton>
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigationTabs;