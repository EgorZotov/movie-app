import styled from 'styled-components/native';
import {Body} from '../../styles';
import Icon from '@react-native-vector-icons/feather';

export const Touchable = styled.TouchableOpacity<{
  variant?: 'solid' | 'outline';
}>`
  padding-left: ${({theme}) => theme.spacing.lg};
  padding-right: ${({theme}) => theme.spacing.lg};
  height: 48px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({theme, variant}) => {
    switch (variant) {
      case 'solid':
        return theme.colors.accent;
      case 'outline':
        return 'transparent';
    }
  }};
  border: ${({theme, variant}) => {
    switch (variant) {
      case 'solid':
        return 'none';
      case 'outline':
        return `2px solid ${theme.colors.accent}`;
    }
  }};
  border-radius: 12px;
`;

Touchable.defaultProps = {
  variant: 'solid',
};

export const ButtonText = styled(Body)`
  margin-bottom: 0;
`;

export const ButtonIcon = styled(Icon)`
  margin-right: ${({theme}) => theme.spacing.sm};
`;
