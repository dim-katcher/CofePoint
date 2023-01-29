import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type InitialStyles = {
  container: ViewStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<InitialStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
