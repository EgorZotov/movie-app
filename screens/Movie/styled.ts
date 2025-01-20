import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {Button} from '../../components/Button';

export const OverviewSection = styled.View`
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.spacing.sm};
`;

export const Poster = styled(FastImage)`
  aspect-ratio: 2 / 3;
  flex-basis: 40%;
`;

export const StatsSection = styled.View`
  flex-basis: 60%;
  padding-left: ${({theme}) => theme.spacing.xl};
`;

export const WishlistButton = styled(Button)`
  margin-bottom: ${({theme}) => theme.spacing.sm};
  margin-top: ${({theme}) => theme.spacing.sm};
`;
