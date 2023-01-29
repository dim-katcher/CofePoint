import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

type SplashStyle = {
  container: ViewStyle;
  image: ImageStyle;
};

export const styles = StyleSheet.create<SplashStyle>({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#3D3C3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
});
