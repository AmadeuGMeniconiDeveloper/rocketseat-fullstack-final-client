import { Auth, User } from "@/types/api";
import { createContext } from "react";

type AuthContextType = {
  auth: Auth | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
