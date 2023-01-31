import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type HomeStyles = {
  container: ViewStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<HomeStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
