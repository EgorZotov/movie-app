import {useNavigation} from '@react-navigation/native';
import {jest} from '@jest/globals';

export const mockNavigate = () => {
  const navigateMock = jest.fn();
  (useNavigation as jest.Mock).mockReturnValue({navigate: navigateMock});
  return navigateMock;
};
