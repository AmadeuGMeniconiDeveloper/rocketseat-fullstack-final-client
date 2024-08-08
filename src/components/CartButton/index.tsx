import { ButtonVariants } from "@/types/style/variants";

import { GhostButton, PrimaryButton, SecondaryButton } from "./styled";
import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/AppContext";

interface CartButtonProps {
  variant?: ButtonVariants;
}

function CartButton({
  variant,
  ...props
}: CartButtonProps & React.ComponentProps<"button">) {
  const { cart, getCart } = useContext(AppContext);

  useEffect(() => {
    const handleGetCart = async () => {
      await getCart();
    };

    handleGetCart();
  }, []);

  switch (variant) {
    case "primary":
      return (
        <PrimaryButton {...props}>
          {props.children}
          <p>({cart.length})</p>
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton {...props}>
          {props.children}
          <p>({cart.length})</p>
        </SecondaryButton>
      );
    case "ghost":
      return (
        <GhostButton {...props}>
          {props.children}
          <div>
            <p>{cart.length}</p>
          </div>
        </GhostButton>
      );
    default:
      return (
        <PrimaryButton {...props}>
          {props.children}
          <p>({cart.length})</p>
        </PrimaryButton>
      );
  }
}

export default CartButton;
