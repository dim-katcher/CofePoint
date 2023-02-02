import React, { FC } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { useAppDispatch } from '@/hooks/redux';

import { styles } from './styles';
import { logout } from '@/store/reducers/authReducer';

export const Product: FC<ScreenNavigatorProps<Keys.Product>> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(logout());
    navigation.replace(Keys.AuthNavigator);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.title}>{'Product Screen'}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={logOut}>
          <Text style={styles.title}>{'LOG OUT'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
