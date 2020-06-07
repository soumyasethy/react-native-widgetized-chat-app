import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './_goToPage';
import {AppNavigator} from './AppNavigator';

export const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};
