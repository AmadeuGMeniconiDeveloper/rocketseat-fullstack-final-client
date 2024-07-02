import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

// import useLocalStoragePersistedState from "./hooks/useLocalStoragePersistedState";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import GlobalStyle from "./styles/global";
import * as ThemeModes from "./styles/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireRouteAuth from "./routes/RequireRouteAuth";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/Home";
import { ModalProvider } from "./context/ModalProvider";

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
            <Routes>
              <Route element={<RequireRouteAuth />}>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                </Route>
              </Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </AuthProvider>
        </ModalProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
