import { DefaultTheme } from "styled-components/dist/types";
import commons from "./commons";

const light: DefaultTheme = {
  MODE: "light",
  COLORS: {
    PRIMARY: "#85000f",
    SECONDARY: "#212121",
    TINTS: {
      TOMATO: "#85000f",
      CARROT: "#fba94c",
      MINT: "#04d361",
      CAKE: "#82f3ff",
      BLUE: "#065e7c",
      GRAY: "#7A7A7A",
    },
    TEXT: {
      TEXT_DEFAULT: "#020202",
      TEXT_SOFT: "#212121",
      TEXT_CONTRAST: "#ffffff",
    },
    FOREGROUNG: {
      FG_100: "#000405",
      FG_200: "#00070a",
      FG_300: "#000204",
      FG_400: "#000a0f",
      FG_500: "#000c12",
      FG_600: "#001119",
      FG_700: "#4a585e",
      FG_800: "#4a585e",
      FG_900: "#4a585e",
    },
    BACKGROUND: {
      BG_100: "#FFFFFF",
      BG_200: "#fffbf1",
      BG_300: "#e1e0e6",
      BG_400: "#c5c3cc",
      BG_500: "#c5c3cc",
      BG_600: "#c5c3cc",
      BG_700: "#75797b",
      BG_800: "#75797b",
      BG_900: "#75797b",
    },
  },
  COMMONS: commons,
};

export default light;
