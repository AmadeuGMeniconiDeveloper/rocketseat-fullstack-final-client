import { Auth } from "@/types/api";
import { createContext } from "react";

type AuthContextType = {
  auth: Auth | null;
  isAdmin: boolean | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
