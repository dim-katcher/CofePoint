import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';

export interface IProduct {
  id: string;
  cofeId: string;
  name: string;
  price: number;
  favorite: true;
  imagesPath: string;
}

export interface AuthRequest {
  email: string;
  password: string;
  navigation: StackNavigationProp<RootStackParamList>;
}

export enum LanguageType {
  En = 'en',
  Ru = 'ru',
  De = 'de',
}
