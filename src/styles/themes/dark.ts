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
      TEXT_CONTRAST: "#020202",
    },
    FOREGROUNG: {
      FG_100: "#FFFFFF",
      FG_200: "#fffbf1",
      FG_300: "#e1e0e6",
      FG_400: "#c5c3cc",
      FG_500: "#7d7a8a",
      FG_600: "#75797b",
      FG_700: "#4a585e",
      FG_800: "#4a585e",
      FG_900: "#4a585e",
    },
    BACKGROUND: {
      BG_100: "#000405",
      BG_200: "#00070a",
      BG_300: "#000204",
      BG_400: "#000a0f",
      BG_500: "#000c12",
      BG_600: "#001119",
      BG_700: "#0a161b",
      BG_800: "#061d25",
      BG_900: "#162227",
    },
  },
  COMMONS: commons,
};

export default dark;
