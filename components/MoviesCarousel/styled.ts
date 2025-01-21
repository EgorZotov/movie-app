import styled from 'styled-components/native';

export const CarouselWrapper = styled.View`
  margin-left: -${({theme}) => theme.spacing.sm};
`;

export const Placeholder = styled.View`
  height: 240px;
  justify-content: center;
  align-items: center;
`;
