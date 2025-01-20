import React, {useContext} from 'react';
import {Movie, MoviePreview} from '../../types/movies';
import {Card, Poster} from './styled';
import {getImageFullPath} from '../../api/helpers';
import {useNavigation} from '@react-navigation/native';
import {queryClient} from '../../api/queries';
import {FontContext} from '../../screens/MoviesList/FontContext';

type Props = React.ComponentProps<typeof Card> & {
  movie: MoviePreview | Movie;
};

export const MovieCard = ({movie, ...rest}: Props) => {
  const navigation = useNavigation();
  const font = useContext(FontContext);
  const navigateToMovie = () => {
    // Saving partial movie data from preview to cache for later enrichment
    queryClient.setQueryData(['movie', movie.id], oldData => {
      if (!oldData) return movie;
    });
    navigation.navigate('Movie', {id: movie.id, font});
  };
  return (
    <Card onPress={navigateToMovie} testID="movie-card" {...rest}>
      <Poster source={{uri: getImageFullPath(movie.poster_path)}} />
    </Card>
  );
};
