import React from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '@/navigation/types';
import { ArrowBackSVG } from '@/assets/svg';

import { styles } from './styles';

export const ScreenHeaderLeft = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList> }) => {
  const goBack = (
    <TouchableOpacity style={styles.goBackButton} onPress={navigation.goBack}>
      <ArrowBackSVG />
    </TouchableOpacity>
  );
  const androidFakeView = () => <View style={styles.fakeView} />;

  return {
    headerLeft: () => goBack,
    headerRight: Platform.OS === 'ios' ? null : androidFakeView,
  };
};
