import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'screens';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Главная">
      <Stack.Screen name="Главная" component={HomeScreen} />
    </Stack.Navigator>
  );
};
