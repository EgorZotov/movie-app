import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  padding: ${({theme}) => theme.spacing.sm};
`;

export const Poster = styled(FastImage)`
  aspect-ratio: 2 / 3;
`;
