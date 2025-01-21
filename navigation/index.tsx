import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Discover} from '../screens/Discover';
import {MovieScreen} from '../screens/Movie';
import {HomeTabsStackParamList, RootStackParamList} from './types';
import {useTheme} from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Wishlist} from '../screens/Wishlist';
import Icon from '@react-native-vector-icons/feather';
import {useWishlist} from '../store/user';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createBottomTabNavigator<HomeTabsStackParamList>();

const generateTabbarIcon =
  (name: React.ComponentProps<typeof Icon>['name']) =>
  (props: {focused: boolean; color: string; size: number}) => {
    return <Icon name={name} {...props} />;
  };

export const TabsStackNavigator = () => {
  const theme = useTheme();
  const {wishlist} = useWishlist();

  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.screen},
        headerTitleStyle: {color: theme.colors.body},
        headerTintColor: theme.colors.accent,
        tabBarActiveBackgroundColor: theme.colors.screen,
        tabBarInactiveBackgroundColor: theme.colors.screen,
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.body,
      }}>
      <TabStack.Screen
        name="Discover"
        options={{
          tabBarIcon: generateTabbarIcon('film'),
        }}
        component={Discover}
      />
      <TabStack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: generateTabbarIcon('star'),
          ...(Object.keys(wishlist).length
            ? {
                tabBarBadge: Object.keys(wishlist).length,
              }
            : {}),
        }}
      />
    </TabStack.Navigator>
  );
};

export const RootStackNavigator = () => {
  const theme = useTheme();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.screen},
        headerTitleStyle: {color: theme.colors.body},
        headerTintColor: theme.colors.accent,
      }}>
      <RootStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={TabsStackNavigator}
      />
      <RootStack.Screen name="Movie" component={MovieScreen} />
    </RootStack.Navigator>
  );
};
