import { createContext } from "react";

type AuthContextType = {
  auth: boolean;
  user: {};
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
