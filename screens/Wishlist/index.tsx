import React from 'react';
import {
  Caption,
  FavoriteMoviesItem,
  FavoriteMoviesList,
  FavoriteMoviesWrapper,
  Placeholder,
} from './styled';
import {useWishlist} from '../../store/user';
import {Movie} from '../../types/movies';
import {useTheme} from 'styled-components/native';
import Icon from '@react-native-vector-icons/feather';

export const Wishlist = () => {
  const {wishlist} = useWishlist();
  const renderItem = ({item}: {item: Movie}) => (
    <FavoriteMoviesItem movie={item} />
  );
  const theme = useTheme();
  if (!wishlist?.length) {
    return (
      <Placeholder>
        <Icon name="star" size={64} color={theme.colors.accent} />
        <Caption size="md">Movies added to wishlist will appear here</Caption>
      </Placeholder>
    );
  }
  return (
    <FavoriteMoviesWrapper>
      <FavoriteMoviesList
        data={wishlist}
        renderItem={renderItem}
        numColumns={2}
      />
    </FavoriteMoviesWrapper>
  );
};
