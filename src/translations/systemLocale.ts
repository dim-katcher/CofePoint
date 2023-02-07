import { getLocales } from 'react-native-localize';
import { LanguageType } from '@/store/types';

export const systemLocale = () => {
  const locale = getLocales()[0].languageCode;
  switch (locale) {
    case 'az': // Azerbaijani
      return LanguageType.Ru;
    case 'hy': // Armenian
      return LanguageType.Ru;
    case 'be': // Belarusian
      return LanguageType.Ru;
    case 'kk': // Kazakh
      return LanguageType.Ru;
    case 'ky': // Kirghiz
      return LanguageType.Ru;
    case 'mo': // Moldavian
      return LanguageType.Ru;
    case 'ro': // Moldavian (Romanian)
      return LanguageType.Ru;
    case 'tg': // Tajik
      return LanguageType.Ru;
    case 'uk': // Ukrainian
      return LanguageType.Ru;
    case 'ka': // Georgian
      return LanguageType.Ru;
    case 'ru': // Russian
      return LanguageType.Ru;
    case 'en':
      return LanguageType.En;
    case 'de':
      return LanguageType.De;
    default:
      return LanguageType.En;
  }
};
