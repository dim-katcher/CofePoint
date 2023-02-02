import React, { FC, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSelector } from '@/store/reducers/authReducer';
import { postProduct, productSelector } from '@/store/reducers/productReducer';
import {
  americano,
  cappuccino,
  cappuccino2,
  cappuccino3,
  espresso,
  fredo,
  glasse,
  inViennese,
  latte,
  latte2,
  latte6,
  mocha,
  noCoffe,
} from '@/constants/images';
import { IProduct } from '@/store/types';

import { styles } from './styles';
import { LikeFullSVG, LikeSVG } from '@/assets/svg';

const defaultImages = [
  americano,
  cappuccino,
  cappuccino2,
  cappuccino3,
  espresso,
  fredo,
  glasse,
  inViennese,
  latte,
  latte2,
  latte6,
  mocha,
];

export const Home: FC<ScreenNavigatorProps<Keys.Home>> = ({ navigation }) => {
  const token = useAppSelector(authSelector.getToken);
  const dispatch = useAppDispatch();
  const products = useAppSelector(productSelector.getProducts);
  const isLoading = useAppSelector(productSelector.getProductsLoading);

  useEffect(() => {
    dispatch(postProduct(token));
  }, []);

  const emptyContent = () => {
    return (
      <View style={styles.emptyContentContainer}>
        <Image source={noCoffe} style={styles.emptyContentImage} />
        <Text style={styles.emptyContentTitle}>
          {'Здесь нет ни одной чашки кофе\nПопробуйте вернуться к нам позже'}
        </Text>
      </View>
    );
  };

  const renderProduct = (item: IProduct, index: number) => {
    const imageSource = defaultImages[index] || defaultImages[0];
    return (
      <View style={styles.productWrap}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {'кофейный напиток'}
        </Text>
        <Image source={imageSource} style={styles.productImage} />
        <View style={styles.productBottomRow}>
          <Text style={styles.productPrice}>{`${item.price} ₽`}</Text>
          {item.favorite ? <LikeSVG /> : <LikeFullSVG />}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {isLoading ? (
          emptyContent()
        ) : (
          <FlatList
            data={products}
            renderItem={({ item, index }) => renderProduct(item, index)}
            keyExtractor={(item: IProduct, index: number) => `${item.id + item.cofeId + index}`}
            contentContainerStyle={styles.flatListProductsContainer}
            numColumns={2}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
