import React from 'react';
import {
  FavoriteMoviesItem,
  FavoriteMoviesList,
  FavoriteMoviesWrapper,
} from './styled';
import {useWishlist} from '../../store/user';
import {Movie} from '../../types/movies';

export const Wishlist = () => {
  const {wishlist} = useWishlist();
  const renderItem = ({item}: {item: Movie}) => (
    <FavoriteMoviesItem movie={item} />
  );
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
