import { ComponentProps } from "react";

import { Container, ImageContainer, PriceContainer } from "./styled";

import { CartItem } from "@/types/api";
import { api } from "@/config/api";
import ImagePlaceholder from "../ImagePlaceholder";
import { Link } from "react-router-dom";
import Button from "../Button";

interface FavoriteCardProps {
  cartItem: CartItem;
  removeFromCart: (id: string) => Promise<void>;
}

function CartItemCard({
  cartItem,
  removeFromCart,
  ...props
}: FavoriteCardProps & ComponentProps<"div">) {
  return (
    <Container {...props}>
      <ImageContainer>
        {cartItem.product.image ? (
          <img
            src={`${api.defaults.baseURL}/files/${cartItem.product.image}`}
            alt={cartItem.product.name}
            draggable="false"
          />
        ) : (
          <ImagePlaceholder alt={cartItem.product.name} />
        )}
      </ImageContainer>
      <span>
        <Link to={`/details/${cartItem.product.id}`}>
          {cartItem.product.name}
        </Link>
        {/* <QuantityContainer>Quantidade: {cartItem.quantity}</QuantityContainer> */}
        <PriceContainer>
          {cartItem.quantity +
            " x R$ " +
            Number(cartItem.product.price).toFixed(2)}
        </PriceContainer>
        <Button
          variant="ghost"
          onClick={() => removeFromCart(cartItem.product.id)}
        >
          Remover
        </Button>
      </span>
    </Container>
  );
}

export default CartItemCard;
