import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import TabNvigator from './navigation/TabNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <TabNvigator/>
    </NavigationContainer>
  );
};

export default App;
