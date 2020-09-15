import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TickerScreen} from 'screens';

const Stack = createStackNavigator();

export const TickerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Котировки">
      <Stack.Screen name="Котировки" component={TickerScreen} />
    </Stack.Navigator>
  );
};
