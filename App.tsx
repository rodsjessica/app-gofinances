import React from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#5636D3'} />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
