import {pageType} from './pageType';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen from '../screens/MessageScreen';
import ChatScreen from '../screens/ChatScreen';
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={pageType.MessageScreen}>
      <Stack.Screen
        name={pageType.MessageScreen}
        component={MessageScreen}
        options={{
          headerShown: false,
          animationTypeForReplace: 'push',
        }}
      />
      <Stack.Screen
        name={pageType.ChatScreen}
        component={ChatScreen}
        options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  );
};
