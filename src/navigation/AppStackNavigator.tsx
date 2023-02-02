import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from '@/navigation/AuthStackNavigator';
import { SignedStackNavigator } from '@/navigation/SignedStackNavigator';
import { Colors } from '@/constants/colors';

const AppStack = createNativeStackNavigator();

export const AppStackNavigator: FC = () => {
  const { Navigator, Screen } = AppStack;

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.white,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator initialRouteName="AuthNavigator" screenOptions={{ headerShown: false }}>
        <Screen name="AuthNavigator" component={AuthStackNavigator} />
        <Screen name="SignedNavigator" component={SignedStackNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};
