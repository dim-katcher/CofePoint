import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Authorization, Initial } from '@/screens';
import { AuthNavigatorParamsList } from '@/navigation/types';
import { Keys } from '@/navigation/keys';

const AuthStack = createNativeStackNavigator<AuthNavigatorParamsList>();

export const AuthStackNavigator: FC = () => {
  const { Navigator, Screen } = AuthStack;

  return (
    <Navigator initialRouteName={Keys.Initial} screenOptions={{ headerShown: false }}>
      <Screen name={Keys.Initial} component={Initial} />
      <Screen name={Keys.Authorization} component={Authorization} />
    </Navigator>
  );
};
