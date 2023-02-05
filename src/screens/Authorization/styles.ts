import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Fonts } from '@/constants/fonts';
import { scale, screenWidth } from '@/constants/scale';
import { Colors } from '@/constants/colors';

type AuthorizationStyles = {
  container: ViewStyle;
  gradientBgnd: ViewStyle;
  title: TextStyle;
  authWrap: ViewStyle;
  labelWrap: ViewStyle;
  labelTitle: TextStyle;
  labelSubTitle: TextStyle;
  btnFbWrap: ViewStyle;
  btnFbTitle: TextStyle;
  textInput: ViewStyle;
  signInWrap: ViewStyle;
  signInTitle: TextStyle;
  registerWrap: ViewStyle;
  registerTitle: TextStyle;
};

export const styles = StyleSheet.create<AuthorizationStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBgnd: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  authWrap: {
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: scale(112),
  },
  labelWrap: {
    flex: 2,
    justifyContent: 'flex-end',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  labelTitle: {
    fontFamily: Fonts.LOBSTER_REGULAR,
    fontSize: scale(64),
    lineHeight: scale(80),
    color: Colors.white,
  },
  labelSubTitle: {
    fontFamily: Fonts.TEXT_LIGHT,
    fontSize: scale(16),
    lineHeight: scale(19),
    color: Colors.white,
    textAlign: 'right',
    marginRight: scale(12),
    marginTop: scale(-10),
  },
  btnFbWrap: {
    height: scale(52),
    width: screenWidth - scale(76),
    backgroundColor: Colors.chambray,
    flexDirection: 'row',
    borderRadius: scale(52 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFbTitle: {
    fontFamily: Fonts.TEXT_REGULAR,
    color: Colors.white,
    fontSize: scale(18),
    lineHeight: scale(21),
    marginLeft: scale(26),
  },
  textInput: {
    width: screenWidth - scale(128),
    marginBottom: scale(16),
    fontFamily: Fonts.TEXT_REGULAR,
    color: Colors.white,
    fontSize: scale(18),
    lineHeight: scale(21),
    paddingHorizontal: scale(20),
    paddingVertical: scale(8),
    borderBottomColor: Colors.white28,
    borderBottomWidth: 1,
  },
  signInWrap: {
    height: scale(52),
    width: screenWidth - scale(76),
    backgroundColor: Colors.sprout,
    borderRadius: scale(52 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInTitle: {
    fontFamily: Fonts.TEXT_REGULAR,
    color: Colors.white,
    fontSize: scale(18),
    lineHeight: scale(21),
  },
  registerWrap: {
    marginTop: scale(16),
    height: scale(52),
    width: screenWidth - scale(76),
    backgroundColor: Colors.sprout,
    borderRadius: scale(52 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerTitle: {
    fontFamily: Fonts.TEXT_REGULAR,
    color: Colors.white,
    fontSize: scale(18),
    lineHeight: scale(21),
  },
});
