import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

// import useLocalStoragePersistedState from "./hooks/useLocalStoragePersistedState";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import GlobalStyle from "./styles/global";
import * as ThemeModes from "./styles/themes";

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
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
