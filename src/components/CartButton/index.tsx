import { ButtonVariants } from "@/types/style/variants";

import { GhostButton, PrimaryButton, SecondaryButton } from "./styled";

interface CartButtonProps {
  variant?: ButtonVariants;
  numberOfItems: number;
}

function CartButton({
  variant,
  numberOfItems,
  ...props
}: CartButtonProps & React.ComponentProps<"button">) {
  switch (variant) {
    case "primary":
      return (
        <PrimaryButton {...props}>
          {props.children}
          <p>({numberOfItems})</p>
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton {...props}>
          {props.children}
          <p>({numberOfItems})</p>
        </SecondaryButton>
      );
    case "ghost":
      return (
        <GhostButton {...props}>
          {props.children}
          <div>
            <p>{numberOfItems}</p>
          </div>
        </GhostButton>
      );
    default:
      return (
        <PrimaryButton {...props}>
          {props.children}
          <p>({numberOfItems})</p>
        </PrimaryButton>
      );
  }
}

export default CartButton;
