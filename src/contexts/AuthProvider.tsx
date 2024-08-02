import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useLocalStorage from "@/hooks/useLocalStorage";

import { AuthContext } from "./AuthContext";

import { Auth } from "@/types/api";
import { api } from "@/config/api";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useLocalStorage<Auth | null>("auth", null);

  const isAdmin = auth && auth.user.role === "admin";

  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    const { data } = await api.post("/sessions/signin", {
      email,
      password,
    });

    setAuth({ user: data.user, token: data.token });
    navigate("/home");
  };

  const signOut = async () => {
    const { data } = await api.post("/sessions/signout");

    api.defaults.headers.authorization = data;

    setAuth(data);
  };

  useEffect(() => {
    if (auth) {
      api.defaults.headers.authorization = `Bearer ${auth.token}`;
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
