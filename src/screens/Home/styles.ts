import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { scale } from '@/constants/scale';
import { Fonts } from '@/constants/fonts';
import { Colors } from '@/constants/colors';

type HomeStyles = {
  container: ViewStyle;
  title: TextStyle;
  emptyContentContainer: ViewStyle;
  emptyContentImage: ImageStyle;
  emptyContentTitle: TextStyle;
  flatListProductsContainer: ViewStyle;
  productWrap: ViewStyle;
  productName: TextStyle;
  productDescription: TextStyle;
  productImage: ImageStyle;
  productBottomRow: ViewStyle;
  productPrice: TextStyle;
};

export const styles = StyleSheet.create<HomeStyles>({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  emptyContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(50),
  },
  emptyContentImage: {
    width: scale(148),
    height: scale(142),
    marginBottom: scale(110),
  },
  emptyContentTitle: {
    fontFamily: Fonts.TEXT_LIGHT,
    fontSize: scale(16),
    color: Colors.tundora,
    textAlign: 'center',
  },
  flatListProductsContainer: {
    margin: scale(4),
  },
  productWrap: {
    flex: 1,
    margin: scale(4),
    backgroundColor: Colors.white,
    shadowColor: Colors.alto05,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 10,
  },
  productName: {
    fontFamily: Fonts.TEXT_BOLD,
    fontSize: scale(16),
    lineHeight: scale(19),
    color: Colors.doveGray,
    maxWidth: scale(170),
    marginTop: scale(8),
  },
  productDescription: {
    fontFamily: Fonts.TEXT_REGULAR,
    fontSize: scale(12),
    lineHeight: scale(14),
    color: Colors.doveGray,
    maxWidth: scale(170),
    marginTop: scale(2),
  },
  productImage: {
    height: scale(119),
    width: scale(160),
    resizeMode: 'contain',
    marginTop: scale(16),
  },
  productBottomRow: {
    flexDirection: 'row',
    margin: scale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontFamily: Fonts.LOBSTER_REGULAR,
    fontSize: scale(24),
    lineHeight: scale(30),
    color: Colors.sprout,
  },
});
