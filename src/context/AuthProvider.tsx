import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import useLocalStorage from "@/hooks/useLocalStorage";

import { AuthContext } from "./AuthContext";

import { Auth } from "@/types/api";

interface AuthProviderProps {
  children: ReactNode;
}

// #DO: Correctly implement authantication logic (auth, sign in, sign out)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useLocalStorage<Auth | null>("auth", null);

  const navigate = useNavigate();

  const signIn = () => {
    // #DO: Post request to API to validate credentials
    const data: Auth = {
      user: {
        id: "1",
        name: "Maria da Silva",
        email: "exemplo@exemplo.com.br",
        role: "USER",
      },
      token: "123",
    };

    setAuth(data);
    navigate("/");
  };

  const signOut = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
