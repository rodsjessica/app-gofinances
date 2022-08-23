import React from 'react';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';

import theme from './src/global/styles/theme';
// import {Dashboard} from './src/screens/Dashboard';
// import {Register} from './src/screens/Register';
import {Category} from './src/screens/Category';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#5636D3'} />
      {/* <Dashboard /> */}
      {/* <Register /> */}
      <Category />
    </ThemeProvider>
  );
}
