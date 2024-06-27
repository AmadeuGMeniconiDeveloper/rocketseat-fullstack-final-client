import { ThemeProvider, DefaultTheme } from "styled-components";

// import usePersistState from "./hooks/usePersistState";

import GlobalStyle from "./styles/global";
import * as MyThemes from "./styles/themes";
import { useState } from "react";

function App() {
  // const [theme, setTheme] = usePersistState<DefaultTheme>(
  //   "theme",
  //   ThemeStyle.dark
  // );

  const [theme, setTheme] = useState<DefaultTheme>(MyThemes.dark);

  const toogleTheme = () => {
    setTheme(theme.MODE === "light" ? MyThemes.dark : MyThemes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
