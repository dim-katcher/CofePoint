import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Product } from '@/screens';
import { SignedNavigatorParamsList } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { styles } from '@/navigation/styles';
import { ScreenHeaderLeft } from '@/navigation/utils/ScreenHeaderLeft';

const SignedStack = createNativeStackNavigator<SignedNavigatorParamsList>();

export const SignedStackNavigator: FC = () => {
  const { Navigator, Screen, Group } = SignedStack;

  return (
    <Navigator
      initialRouteName={Keys.Home}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: styles.title,
        headerStyle: styles.header,
        gestureEnabled: true,
        title: 'CoffeTime',
      }}>
      <Screen
        name={Keys.Home}
        component={Home}
        options={{
          headerLeft: () => undefined,
        }}
      />
      <Group screenOptions={ScreenHeaderLeft}>
        <Screen name={Keys.Product} component={Product} />
      </Group>
    </Navigator>
  );
};
