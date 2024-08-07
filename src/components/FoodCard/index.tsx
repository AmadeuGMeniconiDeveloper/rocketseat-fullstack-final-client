import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

import AmountStepper from "../AmountStepper";

import { Container, ImageContainer } from "./styled";

import { CaretRight, Heart, PencilSimple } from "@phosphor-icons/react";
import { Food } from "@/types/api";
import { api } from "@/config/api";

import { AppContext } from "@/contexts/AppContext";

import ImagePlaceholder from "../ImagePlaceholder";
import Button from "../Button";

function FoodCard(food: Food) {
  const { isAdmin } = useContext(AuthContext);
  const { addToCart, toggleFavorite, favorites } = useContext(AppContext);

  const [isFavorited, setIsFavorited] = useState(favorites.includes(food.id));
  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();

  const handleEditFood = () => {
    navigate(`/edit/${food.id}`);
  };

  const handleAddToCart = async () => {
    addToCart(food.id, amount);
  };

  const handleToggleFavorite = async () => {
    await toggleFavorite(food.id);
    setIsFavorited(!isFavorited);
  };
  console.log(api.defaults.baseURL);
  return (
    <Container>
      {isAdmin ? (
        <Button
          variant="ghost"
          onClick={handleEditFood}
          style={{ position: "absolute", top: "1.6rem", right: "1.6rem" }}
        >
          <PencilSimple size={24} />
        </Button>
      ) : (
        <Button
          variant="ghost"
          onClick={handleToggleFavorite}
          style={{ position: "absolute", top: "1.6rem", right: "1.6rem" }}
        >
          <Heart size={24} weight={isFavorited ? "fill" : "regular"} />
        </Button>
      )}
      <ImageContainer>
        {food.image ? (
          <img
            src={`${api.defaults.baseURL}/files/${food.image}`}
            alt={food.name}
            draggable="false"
          />
        ) : (
          <ImagePlaceholder alt={food.name} />
        )}
      </ImageContainer>
      <Button onClick={() => navigate(`/details/${food.id}`)} variant="ghost">
        {food.name} <CaretRight size={14} />
      </Button>

      {food.description && <p>{food.description}</p>}
      <h3>${food.price}</h3>

      {!isAdmin && (
        <>
          <AmountStepper amount={amount} setAmount={setAmount} />
          <Button variant="primary" onClick={handleAddToCart}>
            Inclur
          </Button>
        </>
      )}
    </Container>
  );
}

export default FoodCard;
