import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from '@/navigation/AuthStackNavigator';
import { SignedStackNavigator } from '@/navigation/SignedStackNavigator';

const AppStack = createNativeStackNavigator();

export const AppStackNavigator: FC = () => {
  const { Navigator, Screen } = AppStack;

  return (
    <NavigationContainer>
      <Navigator initialRouteName="AuthNavigator" screenOptions={{ headerShown: false }}>
        <Screen name="AuthNavigator" component={AuthStackNavigator} />
        <Screen name="SignedNavigator" component={SignedStackNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};
