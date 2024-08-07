import { BrowserRouter } from "react-router-dom";

import useLocalStorage from "./hooks/useLocalStorage";

import { AuthProvider } from "./contexts/AuthProvider";

import AppRoutes from "./routes/AppRoutes";

import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "./styles/global";
import * as ThemeModes from "./styles/themes";
import { AppProvider } from "./contexts/AppProvider";

function App() {
  const [theme, setTheme] = useLocalStorage<DefaultTheme>(
    "theme",
    ThemeModes.dark
  );

  const toggleTheme = () => {
    setTheme(theme.MODE === "light" ? ThemeModes.dark : ThemeModes.light);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppRoutes toggleTheme={toggleTheme} />
          </ThemeProvider>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
