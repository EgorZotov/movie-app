import {jest} from '@jest/globals';
import 'react-native-gesture-handler/jestSetup';

// Mock carousel since it is native module
jest.mock('react-native-reanimated-carousel', () =>
  require('./__mocks__/ReanimatedCarousel'),
);

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(() => ({})),
  };
});

// Mock React Query hook for response mocking
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

jest.mock('@react-native-vector-icons/feather', () => 'Icon');
