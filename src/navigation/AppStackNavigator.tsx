import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from '@/navigation/AuthStackNavigator';
import { SignedStackNavigator } from '@/navigation/SignedStackNavigator';

const AppStack = createNativeStackNavigator();

export const AppStackNavigator: FC = () => {
  const { Navigator, Screen } = AppStack;
  const isSigned = true;

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {!isSigned ? (
          <Screen name="AuthStackNavigator" component={AuthStackNavigator} />
        ) : (
          <Screen name="SignedStackNavigator" component={SignedStackNavigator} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
