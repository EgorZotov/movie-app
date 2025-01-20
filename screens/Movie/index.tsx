import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {RootStackScreenProps} from '../../navigation/types';
import {useMovie} from '../../api/queries';
import {Body, Heading, ScrollableScreen} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {OverviewSection, Poster, StatsSection, WishlistButton} from './styled';
import {getImageFullPath} from '../../api/helpers';
import {format} from 'date-fns/format';
import {toDate} from 'date-fns';
import {useWishlist} from '../../store/user';
import {useTheme} from 'styled-components/native';

const getTextComponentByStyle = (
  style?: RootStackScreenProps<'Movie'>['route']['params']['font'],
) => {
  return (props: React.ComponentProps<typeof Body>) => (
    <Body {...props} fontFamily={style} />
  );
};

export const MovieScreen = ({route}: RootStackScreenProps<'Movie'>) => {
  const {params} = route;
  const navigation = useNavigation();
  const {data: movie, isLoading, isError} = useMovie({id: params.id});
  const {isMovieInList, toggleItemItemInWishlist} = useWishlist();
  const isWishlisted = movie ? isMovieInList(movie) : false;
  const theme = useTheme();

  useEffect(() => {
    if (movie?.title) {
      navigation.setOptions({
        title: movie.title,
        ...(params.font
          ? {
              headerTitleStyle: {fontFamily: theme.fonts[params.font]},
              headerBackTitleStyle: {fontFamily: theme.fonts[params.font]},
            }
          : {}),
      });
    }
  }, [navigation, movie, theme, params.font]);

  if (isLoading) {
    return (
      <ScrollableScreen>
        <ActivityIndicator />
      </ScrollableScreen>
    );
  }
  if (isError || !movie) {
    return null;
  }
  const TextComponent = getTextComponentByStyle(params.font);

  return (
    <ScrollableScreen>
      <OverviewSection>
        <Poster source={{uri: getImageFullPath(movie.poster_path)}} />
        <StatsSection>
          <TextComponent size="lg">
            <TextComponent size="lg" color="accent">
              Year:{' '}
            </TextComponent>
            {format(toDate(movie.release_date), 'dd MMMM yyyy')}
          </TextComponent>
          {movie.production_countries && (
            <TextComponent size="lg">
              <TextComponent size="lg" color="accent">
                {movie.production_countries.length === 1
                  ? 'Country: '
                  : 'Countries: '}
              </TextComponent>

              {movie.production_countries.map(c => c.name).join(', ')}
            </TextComponent>
          )}
          {movie.production_companies && (
            <TextComponent size="lg">
              <TextComponent size="lg" color="accent">
                {movie.production_countries.length === 1
                  ? 'Studio: '
                  : 'Studios: '}
              </TextComponent>
              {movie.production_companies.map(c => c.name).join(', ')}
            </TextComponent>
          )}
          <TextComponent size="lg">
            <TextComponent size="lg" color="accent">
              Rating:{' '}
            </TextComponent>
            {movie.vote_average.toFixed(1)}/10
          </TextComponent>
          {movie.genres && (
            <TextComponent size="lg">
              <TextComponent size="lg" color="accent">
                {movie.production_countries.length === 1
                  ? 'Genre: '
                  : 'Genres: '}
              </TextComponent>
              {movie.genres.map(g => g.name).join(', ')}
            </TextComponent>
          )}
        </StatsSection>
      </OverviewSection>
      <Heading size="md">Overview</Heading>
      <TextComponent size="lg">{movie.overview}</TextComponent>
      <WishlistButton
        fontFamily={params.font}
        icon="star"
        title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        variant={isWishlisted ? 'outline' : 'solid'}
        onPress={() => toggleItemItemInWishlist(movie)}
      />
    </ScrollableScreen>
  );
};
