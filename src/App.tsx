import { ThemeProvider, DefaultTheme } from "styled-components";

import usePersistState from "./hooks/usePersistState";

import GlobalStyle from "./styles/global";
import ligthTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistState<DefaultTheme>("theme", ligthTheme);

  const toogleTheme = () => {
    setTheme(theme.MODE === "light" ? darkTheme : ligthTheme);
  };

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
