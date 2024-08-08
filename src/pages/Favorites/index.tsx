import { useContext, useEffect } from "react";

import { Container } from "./styled";

import { Food } from "@/types/api";
import FavoriteCard from "@/components/FavoriteCard";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/contexts/AppContext";
import Button from "@/components/Button";

function Favorites() {
  const { foods, favorites, toggleFavorite, getFavorites } =
    useContext(AppContext);

  const navigate = useNavigate();

  const handleRemoveFavorite = async (id: string) => {
    toggleFavorite(id);
  };

  const renderFavoritesList = foods.map((food: Food) => {
    if (favorites.includes(food.id)) {
      return (
        <FavoriteCard
          key={food.id}
          food={food}
          removeFromFavorites={handleRemoveFavorite}
        />
      );
    }
  });

  useEffect(() => {
    const handleGetFavorites = async () => {
      await getFavorites();
    };

    handleGetFavorites();
  }, []);

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <h1>Favoritos</h1>
      {favorites.length ? (
        <ul>{renderFavoritesList}</ul>
      ) : (
        <p>Voce nao tem favoritos</p>
      )}
    </Container>
  );
}

export default Favorites;
