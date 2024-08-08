import { CartItem, Food } from "@/types/api";
import { createContext } from "react";

type AppContextType = {
  foods: Food[];
  meals: Food[];
  desserts: Food[];
  drinks: Food[];
  favorites: string[];
  getFoods: () => Promise<void>;
  getFavorites: () => Promise<void>;
  toggleFavorite: (productId: string) => Promise<void>;

  cart: CartItem[];
  getCart: () => Promise<void>;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);
