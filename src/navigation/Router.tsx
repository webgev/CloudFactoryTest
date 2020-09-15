import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {TabsScreen} from './TabsScreen';

export default function Router() {
  const navRef = React.useRef<any>();

  return (
    <NavigationContainer ref={navRef}>
      <TabsScreen />
    </NavigationContainer>
  );
}
