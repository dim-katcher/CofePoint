import React, { FC, useEffect } from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { useAppSelector } from '@/hooks/redux';
import { authSelector } from '@/store/reducers/authReducer';

import { styles } from './styles';

export const Initial: FC<ScreenNavigatorProps<Keys.Initial>> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const token = useAppSelector(authSelector.getToken);
  useEffect(() => {
    if (token) {
      navigation.replace(Keys.SignedNavigator);
    } else {
      navigation.replace(Keys.Authorization);
    }
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const viewStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={[viewStyle, styles.container]} />
    </SafeAreaView>
  );
};
