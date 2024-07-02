import { ButtonVariants } from "@/types/components/variants";

import { GhostButton, PrimaryButton, SecondaryButton } from "./styled";

interface ButtonProps {
  variant?: ButtonVariants;
}

function Button({
  variant,
  ...props
}: ButtonProps & React.ComponentProps<"button">) {
  switch (variant) {
    case "primary":
      return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton {...props}>{props.children}</SecondaryButton>;
    case "ghost":
      return <GhostButton {...props}>{props.children}</GhostButton>;
    default:
      return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
  }
}

export default Button;
