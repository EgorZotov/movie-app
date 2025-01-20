import {createContext} from 'react';
import {DefaultTheme} from 'styled-components/native';

type FontFamily = keyof DefaultTheme['fonts'];

export const FontContext = createContext<FontFamily | undefined>(undefined);
