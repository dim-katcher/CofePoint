import { StyleSheet, ViewStyle } from 'react-native';

import { scale } from '@/constants/scale';

type ScreenHeaderLeftStyles = {
  goBackButton: ViewStyle;
  fakeView: ViewStyle;
};

export const styles = StyleSheet.create<ScreenHeaderLeftStyles>({
  goBackButton: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    marginLeft: scale(-15),
  },
  fakeView: {
    width: scale(19),
    paddingRight: 15,
  },
});
