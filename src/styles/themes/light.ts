import { DefaultTheme } from "styled-components/dist/types";
import commons from "./commons";

const light: DefaultTheme = {
  MODE: "light",
  COLORS: {
    PRIMARY: "#c4041a",
    SECONDARY: "#020202",
    TINTS: {
      TOMATO: "#c4041a",
      CARROT: "#fba94c",
      MINT: "#04d361",
      CAKE: "#065e7c",
      BLUE: "#065e7c",
      GRAY: "#7A7A7A",
    },
    TEXT: {
      TEXT_DEFAULT: "#020202",
      TEXT_SOFT: "#212121",
      TEXT_CONTRAST: "#ffffff",
    },
    FOREGROUNG: {
      FG_100: "#020202",
      FG_200: "#000a0f",
      FG_300: "#001119",
    },
    BACKGROUND: {
      BG_200: "#FFFFFF",
      BG_300: "#e6e8e6",
      BG_400: "#e6e8e6",
      BG_500: "#e6e8e6",
      BG_600: "#e6e8e6",
      BG_700: "#e6e8e6",
    },
  },
  COMMONS: commons,
};

export default light;
