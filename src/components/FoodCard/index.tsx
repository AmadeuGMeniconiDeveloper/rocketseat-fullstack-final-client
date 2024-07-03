import { Heart } from "@phosphor-icons/react";
import AmountStepper from "../AmountStepper";
import Button from "../Button";
import { Container } from "./styled";
import { useState } from "react";

interface FoodCardProps {
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
  description,
  imageUrl,
  price,
  title,
  like,
}: FoodCardProps) {
  const [isLiked, setIsLiked] = useState(like);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Container>
      <Button
        variant="ghost"
        onClick={handleToggleLike}
        style={{ position: "absolute", top: "1.6rem", right: "1.6rem" }}
      >
        <Heart size={24} weight={isLiked ? "fill" : "regular"} />
      </Button>
      <img src={imageUrl} alt="Food" draggable="false" />
      <Button variant="ghost" style={{ fontSize: "1.4rem" }}>
        {title} {">"}
      </Button>
      {description && <p>{description}</p>}
      <h3>${price}</h3>
      <AmountStepper />
      <Button variant="primary">inclur</Button>
    </Container>
  );
}

export default FoodCard;
