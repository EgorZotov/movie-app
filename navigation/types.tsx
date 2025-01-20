import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {DefaultTheme} from 'styled-components/native';

export type HomeTabsStackParamList = {
  Discover: undefined;
  Wishlist: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabsStackParamList>;
  Movie: {id: number; font?: keyof DefaultTheme['fonts']};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
