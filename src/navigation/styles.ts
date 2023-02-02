import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { Colors } from '@/constants/colors';
import { scale } from '@/constants/scale';
import { Fonts } from '@/constants/fonts';

type NavigatorStyles = {
  header: ViewStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<NavigatorStyles>({
  header: {
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.tundora,
    fontSize: scale(22),
    fontFamily: Fonts.LOBSTER_REGULAR,
  },
});
