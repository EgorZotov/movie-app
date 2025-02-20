import React from 'react';
import {test, describe, expect, beforeAll, jest} from '@jest/globals';
import {fireEvent, screen, within} from '@testing-library/react-native';
import {Discover} from '../screens/Discover';
import MoviesResponse from './fixtures/moviesResponse';

import {renderWithWrappers} from './helpers/renderWithWrappers';
import {mockResponse} from './helpers/mockResponse';
import {mockNavigate} from './helpers/mockNavigation';

describe('Discover Page', () => {
  beforeAll(() => {
    mockResponse({
      data: MoviesResponse,
      isError: null,
      isLoading: false,
    });
    jest.useFakeTimers();
  });

  test('renders 3 carousels', () => {
    renderWithWrappers(<Discover />);
    expect(screen.getAllByTestId('movie-carousel')).toHaveLength(3);
  });

  test('renders all items in carousel', () => {
    renderWithWrappers(<Discover />);
    const firstCarousel = screen.getAllByTestId('movie-carousel')[0];
    expect(within(firstCarousel).getAllByTestId('movie-card')).toHaveLength(
      MoviesResponse.results.length,
    );
  });

  test('navigates to movie screen on click', () => {
    const navigate = mockNavigate();
    renderWithWrappers(<Discover />);
    const movieCard = screen.getAllByTestId('movie-card')[0];
    fireEvent.press(movieCard);
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  test('handles empty carousels gracefully', () => {
    mockResponse({
      data: null,
      isError: {
        code: 'SOME_ERROR',
      },
      isLoading: false,
    });
    renderWithWrappers(<Discover />);
    const errorMessage = screen.getAllByText('Unkown error')[0];
    expect(errorMessage).toBeOnTheScreen();
  });
});
