import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonIcon, ButtonText, Touchable} from './styled';
import {parsePxToNumber} from '../../styles/helpers';
import {useTheme} from 'styled-components/native';
import Icon from '@react-native-vector-icons/feather';

type Props = Omit<TouchableOpacityProps, 'children'> & {
  variant?: 'solid' | 'outline';
  title?: string;
  icon?: React.ComponentProps<typeof Icon>['name'];
  fontFamily?: React.ComponentProps<typeof ButtonText>['fontFamily'];
};

export const Button = (props: Props) => {
  const {title, icon, variant, fontFamily, ...rest} = props;
  const theme = useTheme();

  return (
    <Touchable variant={variant} {...rest}>
      {icon && (
        <ButtonIcon
          name={icon}
          size={parsePxToNumber(theme.text.lg)}
          color={
            variant === 'solid'
              ? theme.colors.textOnAccent
              : theme.colors.accent
          }
        />
      )}
      {title && (
        <ButtonText
          fontFamily={fontFamily}
          color={variant === 'solid' ? 'textOnAccent' : 'accent'}
          fontWeight="bold">
          {title}
        </ButtonText>
      )}
    </Touchable>
  );
};
