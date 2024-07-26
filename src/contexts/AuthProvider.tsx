import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useLocalStorage from "@/hooks/useLocalStorage";

import { AuthContext } from "./AuthContext";

import { Auth, User } from "@/types/api";
import { api } from "@/config/api";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useLocalStorage<Auth | null>("auth", null);
  const [isAdmin, setIsAdmin] = useState<boolean>(
    auth?.user.role === "admin" ? true : false
  );

  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    const { data } = await api.post("/sessions", {
      email,
      password,
    });

    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    setAuth({ user: data.user, token: data.token });
    navigate("/home");
  };

  const signOut = () => {
    setAuth(null);
  };

  useEffect(() => {
    if (auth) {
      api.defaults.headers.Authorization = `Bearer ${auth.token}`;
      setIsAdmin(auth.user.role === "admin");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, isAdmin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
