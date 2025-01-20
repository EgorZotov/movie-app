import {useQuery} from '@tanstack/react-query';
import moviesApi from './client';
import {Movie, MoviePreview} from '../types/movies';
import {QueryClient} from '@tanstack/react-query';
import {AxiosResponse} from 'axios';

export const queryClient = new QueryClient();

type MoviesByGenreResponse = {
  page: number;
  results: MoviePreview[];
  total_pages: number;
  total_results: number;
};

const selectAxiosResponse = async <T extends any>(
  request: Promise<AxiosResponse<T>>,
) => {
  const response = await request;
  return response.data;
};

export const useMoviesByGenre = ({genreId}: {genreId: number}) => {
  return useQuery({
    queryKey: ['moviesByGenre', genreId],
    queryFn: ({signal}) =>
      selectAxiosResponse(
        moviesApi.get<MoviesByGenreResponse>(
          `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
          {
            signal,
          },
        ),
      ),
  });
};

type MoviesResponse = Movie;

export const useMovie = ({id}: {id: number}) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: ({signal}) =>
      selectAxiosResponse<MoviesResponse>(
        moviesApi.get(`/movie/${id}`, {signal}),
      ),
    initialData: () => {
      console.log(queryClient.getQueryData(['movie', id]));
      return null;
    },
  });
};
