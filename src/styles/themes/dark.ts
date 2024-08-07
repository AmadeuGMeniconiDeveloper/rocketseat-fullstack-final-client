import { DefaultTheme } from "styled-components/dist/types";
import commons from "./commons";

const dark: DefaultTheme = {
  MODE: "dark",
  COLORS: {
    PRIMARY: "#85000f",
    SECONDARY: "#0a161b",
    TINTS: {
      TOMATO: "#85000f",
      CARROT: "#fba94c",
      MINT: "#04d361",
      CAKE: "#82f3ff",
      BLUE: "#065e7c",
      GRAY: "#676767",
    },
    TEXT: {
      TEXT_DEFAULT: "#FFFFFF",
      TEXT_SOFT: "#BBBBBB",
      TEXT_CONTRAST: "#ffffff",
    },
    FOREGROUNG: {
      FG_100: "#FFFFFF",
      FG_200: "#b0b0bc",
      FG_300: "#75797b",
    },
    BACKGROUND: {
      BG_200: "#000a0f",
      BG_300: "#000c12",
      BG_400: "#001119",
      BG_500: "#0a161b",
      BG_600: "#061d25",
      BG_700: "#162227",
    },
  },
  COMMONS: commons,
};

export default dark;
