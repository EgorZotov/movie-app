import {RootStackParamList} from '../App';
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fonts: {
      anton: string;
      jersey15: string;
      smoochSans: string;
      smoochSansBold: string;
      smoochSansSemiBold: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    // TODO: Put values here?
    text: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    colors: {
      screen: string;
      accent: string;
      body: string;
      textOnAccent: string;
    };
  }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
