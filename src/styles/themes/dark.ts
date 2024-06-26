import { DefaultTheme } from "styled-components/dist/types";

const darkTheme: DefaultTheme = {
  MODE: "dark",
  COLORS: {
    PRIMARY: "#FF6347",
    SECONDARY: "#000000",
    TINTS: {
      TOMATO: "#FF6347",
      CARROT: "#fba94c",
      MINT: "#04d361",
      CAKE: "#82f3ff",
      BLUE: "#065e7c",
      GRAY: "#676767",
    },
    TEXT: {
      TEXT_DEFAULT: "#ffffff",
      TEXT_SOFT: "#BBBBBB",
      TEXT_CONTRAST: "#020202",
    },
    BACKGROUND: {
      BG_100: "#000a0f",
      BG_200: "#061014",
      BG_300: "#0c1418",
      BG_400: "#10181c",
      BG_500: "#141c20",
      BG_600: "#171f24",
      BG_700: "#1a2328",
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

export default darkTheme;
