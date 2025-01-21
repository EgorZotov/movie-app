import {useMoviesByGenre} from '../../api/queries';
import React from 'react';
import {ActivityIndicator, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {MovieCard} from '../MovieCard';
import {CarouselWrapper, Placeholder} from './styled';
import {useOrientation} from '../../hooks/useOrientation';
import {Heading} from '../../styles';
import Icon from '@react-native-vector-icons/feather';
import {useTheme} from 'styled-components/native';

type Props = {
  genreId: number;
};

export const MoviesCarousel = ({genreId}: Props) => {
  const {
    data: moviesResponse,
    isLoading,
    isError,
  } = useMoviesByGenre({genreId});
  const {width} = useWindowDimensions();
  const isLandscape = useOrientation();
  const carouselWidth = width - 42;
  const theme = useTheme();
  if (isLoading)
    return (
      <Placeholder>
        <ActivityIndicator />
      </Placeholder>
    );
  if (isError || !moviesResponse?.results?.length) {
    return (
      <Placeholder>
        <Icon name="alert-circle" size={48} color={theme.colors.accent} />
        <Heading size="lg">Unkown error</Heading>
      </Placeholder>
    );
  }
  return (
    <CarouselWrapper testID="movie-carousel">
      <Carousel
        loop={false}
        overscrollEnabled={false}
        style={{width: carouselWidth}}
        width={carouselWidth / (isLandscape ? 5 : 2.3)}
        height={240}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        data={moviesResponse?.results}
        renderItem={({item}) => <MovieCard key={item.id} movie={item} />}
      />
    </CarouselWrapper>
  );
};
