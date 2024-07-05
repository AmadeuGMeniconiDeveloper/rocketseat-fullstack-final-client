import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "@/context/AuthContext";

import AmountStepper from "../AmountStepper";
import Button from "../Button";

import { Container } from "./styled";

import { CaretRight, Heart, PencilSimple } from "@phosphor-icons/react";

interface FoodCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  price: string;
  like?: boolean;
  // or data: foodData;
}

// #DO: Implement CartContext (Confirm amount of this product to cart [onClick "incluir"])
// #DO: Implement LikeContext (Store if this product is liked or not [onClick "Heart Icon"])
function FoodCard({
  id,
  description,
  imageUrl,
  price,
  title,
  like,
}: FoodCardProps) {
  const [isLiked, setIsLiked] = useState(like);
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);

  const userRole = auth?.user.role;

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Container>
      {userRole === "ADMIN" ? (
        <Button
          variant="ghost"
          onClick={handleToggleLike}
          style={{ position: "absolute", top: "1.6rem", right: "1.6rem" }}
        >
          <PencilSimple size={24} />
        </Button>
      ) : (
        <Button
          variant="ghost"
          onClick={handleToggleLike}
          style={{ position: "absolute", top: "1.6rem", right: "1.6rem" }}
        >
          <Heart size={24} weight={isLiked ? "fill" : "regular"} />
        </Button>
      )}

      <img src={imageUrl} alt="Food" draggable="false" />
      <Button onClick={() => navigate(`/details/${id}`)} variant="ghost">
        {title} <CaretRight size={14} />
      </Button>
      {description && <p>{description}</p>}
      <h3>${price}</h3>

      {userRole === "USER" && (
        <>
          <AmountStepper />
          <Button variant="primary">inclur</Button>
        </>
      )}
    </Container>
  );
}

export default FoodCard;
