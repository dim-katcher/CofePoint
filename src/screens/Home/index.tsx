import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text, useColorScheme, View, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSelector } from '@/store/reducers/authReducer';
import { postProduct, productSelector } from '@/store/reducers/productReducer';

import { styles } from './styles';

export const Home: FC<ScreenNavigatorProps<Keys.Home>> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const viewStyle = { backgroundColor: isDarkMode ? Colors.black : Colors.white };
  const token = useAppSelector(authSelector.getToken);
  const dispatch = useAppDispatch();
  const propucts = useAppSelector(productSelector.getProducts);
  const isLoading = useAppSelector(productSelector.getProductsLoading);
  useEffect(() => {
    dispatch(postProduct(token));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={[viewStyle, styles.container]}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Product')}>
          <Text style={styles.title}>{'Home Screen'}</Text>
        </TouchableOpacity>
        {isLoading ? (
          <Text>{'LOADING'}</Text>
        ) : (
          <>
            {propucts.map((item, i) => (
              <View key={`${item.id} + ${i}`}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            ))}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
