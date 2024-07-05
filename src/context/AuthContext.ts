import { Auth, User } from "@/types/api";
import { createContext } from "react";

type AuthContextType = {
  auth: Auth | null;
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
