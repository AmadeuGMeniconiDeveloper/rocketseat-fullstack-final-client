import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    MODE: string;
    COLORS: {
      PRIMARY: string;
      SECONDARY: string;
      TINTS: {
        TOMATO: string;
        CARROT: string;
        MINT: string;
        CAKE: string;
        BLUE: string;
        GRAY: string;
      };
      BACKGROUND: {
        BG_100: string;
        BG_200: string;
        BG_300: string;
        BG_400: string;
        BG_500: string;
        BG_600: string;
        BG_700: string;
      };
      TEXT: {
        TEXT_DEFAULT: string;
        TEXT_SOFT: string;
        TEXT_CONTRAST: string;
      };
    };
    TYPOOGRAPHY: {
      FONT: {
        POPPINS: {
          SIZE: {
            XS: string;
            S: string;
            M: string;
            L: string;
            XL: string;
          };
        };
        ROBOTO: {
          SIZE: {
            XXS: string;
            XS: string;
            S: string;
            M: string;
            L: string;
            XL: string;
            XXL: string;
          };
        };
      };
      WEIGHT: {
        THIN: string;
        LIGHT: string;
        REGULAR: string;
        MEDIUM: string;
        BOLD: string;
        BLACK: string;
      };
      LINE_HEIGHT: {
        AUTO: string;
        S: string;
        M: string;
        L: string;
      };
    };
    FILTERS: {
      BRIGHTEN: string;
      DARKEN: string;
      DESATURATE: string;
    };
  }
}
