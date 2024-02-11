import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/HomeScreen";
import ROUTES from "@constants/routes";
import RankingScreen from "@screens/RankingScreen";
import StackHeader from "@components/StackHeader";
import { useTheme } from "@react-navigation/native";
import { CustomColors } from "@styles/themes";

const Stack = createStackNavigator();

const HomeStackNavigation = ():React.JSX.Element => {
  //@ts-ignore
  const {colors}: {colors: CustomColors} = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={ROUTES.HOME} 
        component={HomeScreen} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name={ROUTES.RANKING} 
        component={RankingScreen} 
        options={{
          header: (props)=> 
            <StackHeader 
              title="Ranking" 
              {...props} 
              style={{}} 
              back={true} 
              iconColor={colors.black}
            />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;