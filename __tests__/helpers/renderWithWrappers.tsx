import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from '../../styles/themes';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      retry: false,
    },
    mutations: {
      gcTime: 0,
      retry: false,
    },
  },
});

export const renderWithWrappers = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
    </QueryClientProvider>,
  );
};
