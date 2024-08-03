import { useContext } from "react";

import { CartItemList, Container } from "./styled";

import { CartItem } from "@/types/api";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/contexts/AppContext";
import CartItemCard from "@/components/CardItemCard";
import Button from "@/components/Button";

function Cart() {
  const { cart, removeFromCart } = useContext(AppContext);

  const navigate = useNavigate();

  const handleRemoveFromCart = async (id: string) => {
    removeFromCart(id);
  };

  const renderCartList = cart.map((cartItem: CartItem) => {
    return (
      <CartItemCard
        key={cartItem.product.id}
        cartItem={cartItem}
        removeFromCart={handleRemoveFromCart}
      />
    );
  });

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <h1>Carrinho</h1>
      {cart.length ? (
        <CartItemList>{renderCartList}</CartItemList>
      ) : (
        <span>Carrinho vazio</span>
      )}
      <p>
        Total: R${" "}
        {cart
          .reduce(
            (acc, item) => acc + Number(item.product.price) * item.quantity,
            0
          )
          .toFixed(2)}
      </p>
    </Container>
  );
}

export default Cart;
