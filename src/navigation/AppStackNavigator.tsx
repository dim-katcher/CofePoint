import React, { FC, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from '@/navigation/AuthStackNavigator';
import { SignedStackNavigator } from '@/navigation/SignedStackNavigator';
import { Colors } from '@/constants/colors';
import i18n from '@/translations/i18n';
import { systemLocale } from '@/translations/systemLocale';

const AppStack = createNativeStackNavigator();

export const AppStackNavigator: FC = () => {
  const { Navigator, Screen } = AppStack;

  useEffect(() => {
    i18n.changeLanguage(systemLocale()).then();
  }, []);

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
