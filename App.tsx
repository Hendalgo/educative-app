import React, {StrictMode, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainStack from './src/navigations/MainStack';
import LoadingScreen from './src/screens/LoadingScreen';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './src/styles/themes';
import AuthScreen from '@screens/AuthScreen';

function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <StrictMode>
      <NavigationContainer
        theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        {isLoading ? (
          <LoadingScreen />
        ) : isAuthenticated ? (
          <MainStack />
        ) : (
          <AuthScreen/>
        )}
      </NavigationContainer>
    </StrictMode>
  );
}

export default App;
