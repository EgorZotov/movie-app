import {DefaultTheme} from 'styled-components/native';

export const base = {
  spacing: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '48px',
    xxxl: '96px',
  },
  text: {
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '24px',
    xxl: '28px',
    xxxl: '32px',
  },
  fonts: {
    anton: 'Anton-Regular',
    jersey15: 'Jersey15-Regular',
    smoochSans: 'SmoochSans-Regular',
    smoochSansBold: 'SmoochSans-Bold',
    smoochSansSemiBold: 'SmoochSans-Medium',
  },
};

export const lightTheme: DefaultTheme = {
  ...base,
  colors: {
    accent: 'navy',
    textOnAccent: '#ffffff',
    screen: '#ffffff',
    body: 'black',
  },
};

export const darkTheme: DefaultTheme = {
  ...base,
  colors: {
    accent: 'orange',
    textOnAccent: '#ffffff',
    screen: '#000000',
    body: 'white',
  },
};
