import { ComponentProps } from "react";
import Button from "../Button";

import { Container, ImageContainer } from "./styled";

import { Food } from "@/types/api";
import { api } from "@/config/api";
import ImagePlaceholder from "../ImagePlaceholder";
import { Link } from "react-router-dom";

interface FavoriteCardProps {
  food: Food;
  removeFromFavorites: (id: string) => Promise<void>;
}

function FavoriteCard({
  food,
  removeFromFavorites,
  ...props
}: FavoriteCardProps & ComponentProps<"div">) {
  return (
    <Container {...props}>
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
      <span>
        <Link to={`/details/${food.id}`}>{food.name}</Link>
        <Button variant="ghost" onClick={() => removeFromFavorites(food.id)}>
          Remover dos Favoritos
        </Button>
      </span>
    </Container>
  );
}

export default FavoriteCard;
