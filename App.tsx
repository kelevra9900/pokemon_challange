import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';
import {Provider as PaperProvider} from 'react-native-paper';

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </AppState>
    </NavigationContainer>
  );
};

export default App;
