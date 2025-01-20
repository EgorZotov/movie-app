import {FlashList} from '@shopify/flash-list';
import styled from 'styled-components/native';
import {MovieCard} from '../../components/MovieCard';
import {Movie} from '../../types/movies';
import {parsePxToNumber} from '../../styles/helpers';

export const FavoriteMoviesWrapper = styled.View`
  margin-left: -${({theme}) => theme.spacing.sm};
  flex: 1;
`;

export const FavoriteMoviesList = styled(FlashList<Movie>).attrs(({theme}) => ({
  contentContainerStyle: {
    padding: parsePxToNumber(theme.spacing.xl),
    marginLeft: -parsePxToNumber(theme.spacing.sm),
    marginRight: -parsePxToNumber(theme.spacing.sm),
  },
}))``;

export const FavoriteMoviesItem = styled(MovieCard)`
  width: 100%;
`;
