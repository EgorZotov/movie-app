import {useQuery} from '@tanstack/react-query';
import {jest} from '@jest/globals';

type MockResponseAttrs = {
  data: any;
  isError: any;
  isLoading: false;
};

export const mockResponse = (response: MockResponseAttrs) => {
  (useQuery as jest.Mock).mockReturnValue(response);
};
