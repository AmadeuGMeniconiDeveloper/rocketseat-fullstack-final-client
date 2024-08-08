import { ReactNode, useContext, useEffect, useState } from "react";

import { AppContext } from "./AppContext";

import { api } from "@/config/api";
import { CartItem, Food } from "@/types/api";
import { AuthContext } from "./AuthContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const { auth } = useContext(AuthContext);

  const [allFoods, setAllFoods] = useState<Food[]>([]);
  const [meals, setMeals] = useState<Food[]>([]);
  const [desserts, setDesserts] = useState<Food[]>([]);
  const [drinks, setDrinks] = useState<Food[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const getCart = async () => {
    const cartResponse = await api.get("/cartItems/all");

    const populatedCart = cartResponse.data.map(
      (cartItem: { productId: string; quantity: number }) => {
        const product = allFoods.find(food => food.id === cartItem.productId);

        if (!product) {
          return;
        }

        const item: CartItem = {
          product: product,
          quantity: cartItem.quantity,
        };

        return item;
      }
    );

    setCart(populatedCart);
  };

  const addToCart = async (productId: string, quantity: number) => {
    await api.post("/cartItems", {
      productId,
      quantity,
    });

    getCart();
  };

  const removeFromCart = async (productId: string) => {
    await api.delete(`/cartItems/${productId}`);

    getCart();
  };

  const getFavorites = async () => {
    const favoritesResponse = await api.get("/favorites/all");

    setFavorites(favoritesResponse.data);
  };

  const getFoods = async () => {
    const foodsResponse = await api.get("/products/all");

    setAllFoods(foodsResponse.data.all);
    setMeals(foodsResponse.data.meals);
    setDesserts(foodsResponse.data.desserts);
    setDrinks(foodsResponse.data.drinks);
  };

  const toggleFavorite = async (productId: string) => {
    const updatedFavorites = await api.put(`/favorites/${productId}`);

    setFavorites(updatedFavorites.data);
  };

  useEffect(() => {
    if (!auth) {
      setAllFoods([]);
      setCart([]);
      setFavorites([]);
    }
  }, [auth]);

  return (
    <AppContext.Provider
      value={{
        foods: allFoods,
        meals,
        desserts,
        drinks,
        favorites,
        cart,
        getFoods,
        toggleFavorite,
        getFavorites,
        getCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
