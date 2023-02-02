import React, { FC, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { useAppSelector } from '@/hooks/redux';
import { authSelector } from '@/store/reducers/authReducer';

import { styles } from './styles';

export const Initial: FC<ScreenNavigatorProps<Keys.Initial>> = ({ navigation }) => {
  const token = useAppSelector(authSelector.getToken);
  useEffect(() => {
    if (token) {
      navigation.replace(Keys.SignedNavigator);
    } else {
      navigation.replace(Keys.Authorization);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container} />
    </SafeAreaView>
  );
};
