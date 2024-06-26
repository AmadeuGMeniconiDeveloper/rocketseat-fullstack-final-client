import { DefaultTheme } from "styled-components/dist/types";

const lightTheme: DefaultTheme = {
  MODE: "light",
  COLORS: {
    PRIMARY: "#FF6347",
    SECONDARY: "#000000",
    TINTS: {
      TOMATO: "#FF6347",
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
    BACKGROUND: {
      BG_100: "#FFFFFF",
      BG_200: "#e3e0e2",
      BG_300: "#c6c3c6",
      BG_400: "#a8a6ac",
      BG_500: "#8a8b92",
      BG_600: "#6c7279",
      BG_700: "#4d585e",
    },
  },
  TYPOOGRAPHY: {
    FONT: {
      POPPINS: {
        SIZE: {
          XS: "12px",
          S: "14px",
          M: "16px",
          L: "18px",
          XL: "20px",
        },
      },
      ROBOTO: {
        SIZE: {
          XXS: "10px",
          XS: "12px",
          S: "14px",
          M: "16px",
          L: "18px",
          XL: "20px",
          XXL: "22px",
        },
      },
    },
    WEIGHT: {
      THIN: "100",
      LIGHT: "300",
      REGULAR: "400",
      MEDIUM: "500",
      BOLD: "700",
      BLACK: "900",
    },
    LINE_HEIGHT: {
      AUTO: "auto",
      S: "100%",
      M: "140%",
      L: "160%",
    },
  },
  FILTERS: {
    BRIGHTEN: "brightness(1.2)",
    DARKEN: "brightness(0.8)",
    DESATURATE: "saturate(0.5)",
  },
};

export default lightTheme;
