import React, {StrictMode} from 'react';
import 'react-native-gesture-handler';
import {AuthProvider} from '@contexts/AuthContext';
import MainNavigation from '@navigations/MainNavigation';
import '@locales/index';

function App(): React.JSX.Element {
  return (
    <StrictMode>
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
    </StrictMode>
  );
}

export default App;
