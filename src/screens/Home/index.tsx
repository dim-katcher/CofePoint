import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ScreenNavigatorProps } from '@/navigation/types';
import { Keys } from '@/navigation/keys';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { authSelector } from '@/store/reducers/authReducer';
import { postProduct, productSelector } from '@/store/reducers/productReducer';
import { defaultCoffee, noCoffe } from '@/constants/images';
import { IProduct } from '@/store/types';

import { styles } from './styles';
import { LikeFullSVG, LikeSVG } from '@/assets/svg';

export const Home: FC<ScreenNavigatorProps<Keys.Home>> = ({ navigation }) => {
  const { t } = useTranslation();
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
        <Text style={styles.emptyContentTitle}>{t('Home.Is-No-Coffee')}</Text>
      </View>
    );
  };

  const renderProduct = (item: IProduct, index: number) => (
    <View style={styles.productWrap}>
      <Text style={styles.productName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.productDescription} numberOfLines={1}>
        {t('Home.Coffee-Drink')}
      </Text>
      <Image source={{ uri: item.imagesPath }} style={styles.productImage} defaultSource={defaultCoffee} />
      <View style={styles.productBottomRow}>
        <Text style={styles.productPrice}>{`${item.price} ₽`}</Text>
        {item.favorite ? <LikeSVG /> : <LikeFullSVG />}
      </View>
    </View>
  );

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
