import React, { FC } from 'react';
import { SafeAreaView, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';

import { styles } from './styles';

export const Initial: FC<ScreenNavigatorProps<Keys.Initial>> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const viewStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={[viewStyle, styles.container]}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Authorization')}>
          <Text style={styles.title}>{'Initial Screen'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
