import { ReactNode, useContext, useEffect } from "react";

import { AppContext } from "./AppContext";

import { api } from "@/config/api";
import { CartItem, Food } from "@/types/api";
import { AuthContext } from "./AuthContext";
import useLocatStorage from "@/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const { auth } = useContext(AuthContext);

  const [foods, setFoods] = useLocatStorage<Food[]>("foods", []);
  const [favorites, setFavorites] = useLocatStorage<string[]>("favorites", []);
  const [cart, setCart] = useLocatStorage<CartItem[]>("cart", []);

  const navigate = useNavigate();

  const getCart = async () => {
    const cartResponse = await api.get("/cartItems/all");

    const populatedCart = cartResponse.data.map(
      (cartItem: { productId: string; quantity: number }) => {
        const product = foods.find(food => food.id === cartItem.productId);

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

    setFoods(foodsResponse.data);
  };

  const toggleFavorite = async (productId: string) => {
    const updatedFavorites = await api.put(`/favorites/${productId}`);

    setFavorites(updatedFavorites.data);
  };

  useEffect(() => {
    if (!auth) {
      setFoods([]);
      setCart([]);
    }

    const setStatesFromApiFetch = async () => {
      if (!auth) {
        return;
      }
      await getFoods();
      await getFavorites();
      await getCart();

      console.log("Foods: ", foods);
      console.log("Favorites: ", favorites);
      console.log("Cart: ", cart);
    };

    setStatesFromApiFetch();
  }, [auth, navigate]);

  return (
    <AppContext.Provider
      value={{
        foods,
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
