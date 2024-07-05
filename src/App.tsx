import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// import useLocalStoragePersistedState from "./hooks/useLocalStoragePersistedState";

import { ThemeProvider, DefaultTheme } from "styled-components";
import { AuthProvider } from "./context/AuthProvider";
import { ModalProvider } from "./context/ModalProvider";

import GlobalStyle from "./styles/global";

import * as ThemeModes from "./styles/themes";

import AppRoutes from "./routes/AppRoutes";

function App() {
  // const [theme, setTheme] = useLocalStoragePersistedState<DefaultTheme>(
  //   "theme",
  //   ThemeModes.dark
  // );

  const [theme, setTheme] = useState<DefaultTheme>(ThemeModes.dark);

  const toogleTheme = () => {
    setTheme(theme.MODE === "light" ? ThemeModes.dark : ThemeModes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ModalProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ModalProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
