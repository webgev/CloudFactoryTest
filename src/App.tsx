import React from 'react';
import {StatusBar} from 'react-native';
import Router from 'navigation/Router';
import {COLORS} from 'styles/Colors';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.backgroundColor}
      />
      <Router />
    </>
  );
};

export default App;
