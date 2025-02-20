import {FlashList} from '@shopify/flash-list';
import styled from 'styled-components/native';
import {MovieCard} from '../../components/MovieCard';
import {Movie} from '../../types/movies';
import {parsePxToNumber} from '../../styles/helpers';
import {Heading} from '../../styles';

export const FavoriteMoviesWrapper = styled.View`
  margin-left: -${({theme}) => theme.spacing.sm};
  flex: 1;
`;

export const Placeholder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Caption = styled(Heading)`
  text-align: center;
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
