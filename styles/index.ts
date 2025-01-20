import styled, {DefaultTheme} from 'styled-components/native';
import {parsePxToNumber} from './helpers';
import React from 'react';

export const ScrollableScreen = styled.ScrollView.attrs(({theme}) => ({
  contentContainerStyle: {padding: parsePxToNumber(theme.spacing.xl)},
}))``;

export const Screen = styled.View`
  padding: ${({theme}) => theme.spacing.xl};
  flex: 1;
`;

export const Heading = styled.Text<{
  size?: 'sm' | 'md' | 'lg';
  fontWeight?: React.CSSProperties['fontWeight'];
}>`
  color: ${({theme}) => theme.colors.body};
  font-size: ${({theme, size}) => {
    switch (size) {
      case 'sm':
        return theme.text.xl;
      case 'md':
        return theme.text.xxl;
      case 'lg':
        return theme.text.xxxl;
    }
  }};
  font-weight: ${({size, fontWeight}) => {
    if (fontWeight) return fontWeight;
    switch (size) {
      case 'sm':
        return 600;
      case 'md':
      case 'lg':
        return 700;
    }
  }};
  margin-bottom: ${({size, theme}) => {
    switch (size) {
      case 'sm':
        return theme.spacing.sm;
      case 'md':
      case 'lg':
        return theme.spacing.md;
    }
  }};
`;

Heading.defaultProps = {
  size: 'md',
};

export const Body = styled.Text<{
  color?: keyof DefaultTheme['colors'];
  size?: 'sm' | 'md' | 'lg';
  fontWeight?: React.CSSProperties['fontWeight'];
  fontFamily?: keyof DefaultTheme['fonts'];
}>`
  ${({theme, fontFamily}) =>
    fontFamily &&
    `
    font-family: ${theme.fonts[fontFamily]};
  `}
  color: ${({theme, color}) => {
    switch (color) {
      case 'body':
        return theme.colors.body;
      case 'accent':
        return theme.colors.accent;
      case 'textOnAccent':
        return theme.colors.textOnAccent;
    }
  }};
  font-size: ${({theme, size}) => {
    switch (size) {
      case 'sm':
        return theme.text.sm;
      case 'md':
        return theme.text.md;
      case 'lg':
        return theme.text.lg;
    }
  }};
  margin-bottom: ${({size, theme}) => {
    switch (size) {
      case 'sm':
      case 'md':
      case 'lg':
        return theme.spacing.sm;
    }
  }};
  font-weight: ${({fontWeight}) => fontWeight ?? 400};
`;

Body.defaultProps = {
  size: 'md',
  color: 'body',
};
