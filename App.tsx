import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './src/styles';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import LoadingScreen from './src/screens/LoadingScreen';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './src/styles/themes';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

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
    <SafeAreaView style={styles.container}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        {isLoading ? (
          <LoadingScreen />
        ) : isAuthenticated ? (
          <MainStack />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
