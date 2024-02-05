
import React, {ReactPropTypes, useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '@navigations/MainStack';
import LoadingScreen from '@screens/LoadingScreen';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '@styles/themes';
import AuthStack from '@navigations/AuthStack';
import { AuthContext } from '@contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logedUser } from '@services/user';
import User from '@interfaces/User';
import { IAuthContext } from '@interfaces/Auth';


const MainNavigation = ():React.JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const colorScheme = useColorScheme();
  const {authState, authDispatch}:IAuthContext = useContext(AuthContext);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      AsyncStorage.getItem('token').then((token) => {
        if (token) {
          logedUser(token).then((user: User) => {
            if (user) {
              authDispatch({type: 'login', payload: user});
            }
          });
        }
      });
      setIsLoading(false);
    }
    else{
      setIsLoading(false);
    }
  }, []);
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      {isLoading ? (
        <LoadingScreen />
      ) : authState.isAuthenticated ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

export default MainNavigation;