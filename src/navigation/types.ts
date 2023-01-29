import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthNavigatorParamsList = {
  Authorization: undefined;
  Initial: undefined;
};

export type SignedNavigatorParamsList = {
  Home: undefined;
  Product: undefined;
};

export type RootStackParamList = AuthNavigatorParamsList & SignedNavigatorParamsList;

export type ScreenNavigatorProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
