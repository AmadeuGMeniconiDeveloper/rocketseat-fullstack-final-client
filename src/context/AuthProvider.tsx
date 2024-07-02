import { ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "@/hooks/useLocalStorage";

interface AuthProviderProps {
  children: ReactNode;
}

// #DO: Correctly implement authantication logic (auth, sign in, sign out)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useLocalStorage<boolean>("isAuth", false);

  const navigate = useNavigate();

  const signIn = () => {
    setAuth(true);
    navigate("/");
  };

  const signOut = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, user: {}, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
