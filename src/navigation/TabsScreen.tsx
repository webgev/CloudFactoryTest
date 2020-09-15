import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from 'styles/Colors';
import {HomeStack, TickerStack} from './stacks';
import {Icons} from 'components';

const Tab = createBottomTabNavigator();

export const TabsScreen = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        const color = focused ? COLORS.mainColor : COLORS.grey;
        switch (route.name) {
          case 'Главна':
            return <Icons.Home color={color} />;
          case 'Котировки':
            return <Icons.User color={color} />;
        }
      },
    })}
    initialRouteName="Главна">
    <Tab.Screen name="Главна" component={HomeStack} />
    <Tab.Screen name="Котировки" component={TickerStack} />
  </Tab.Navigator>
);
