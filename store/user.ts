import {MMKV, useMMKVString} from 'react-native-mmkv';
import {Movie} from '../types/movies';
import {useMemo} from 'react';
import {parseStorageList} from '../utils';

export const userStorage = new MMKV();

type WishlistParsedStorage = Movie[];

export const useWishlist = () => {
  const [wishlist, setWishlist] = useMMKVString('wishlist');

  const parsedWishlist = useMemo(() => {
    return parseStorageList<WishlistParsedStorage>(wishlist);
  }, [wishlist]);

  const isMovieInList = (movie: Movie) => {
    const movieInList = parsedWishlist.findIndex((m: Movie) => {
      return m.id === movie.id;
    });
    return movieInList >= 0;
  };

  const toggleItemItemInWishlist = (movie: Movie) => {
    setWishlist(prev => {
      const updatedWishlist = parseStorageList<WishlistParsedStorage>(prev);
      const indexInList = updatedWishlist.findIndex((m: Movie) => {
        return m.id === movie.id;
      });
      if (indexInList >= 0) {
        updatedWishlist.splice(indexInList, 1);
      } else {
        updatedWishlist.unshift(movie);
      }
      return JSON.stringify(updatedWishlist);
    });
  };

  return {
    wishlist: parsedWishlist,
    isMovieInList,
    toggleItemItemInWishlist,
  };
};
