import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {QueryClientProvider} from '@tanstack/react-query';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './styles/themes';
import {ThemeProvider} from 'styled-components/native';
import {queryClient} from './api/queries';
import {RootStackNavigator} from './navigation';

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.screen,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={navTheme}>
          <RootStackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
