import "styled-components";
import commons from "./themes/commons";

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
        BG_800: string;
        BG_900: string;
      };
      FOREGROUNG: {
        FG_100: string;
        FG_200: string;
        FG_300: string;
        FG_400: string;
        FG_500: string;
        FG_600: string;
        FG_700: string;
        FG_800: string;
        FG_900: string;
      };
      TEXT: {
        TEXT_DEFAULT: string;
        TEXT_SOFT: string;
        TEXT_CONTRAST: string;
      };
    };
    COMMONS: typeof commons;
  }
}
