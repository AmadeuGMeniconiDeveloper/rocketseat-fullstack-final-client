import { ComponentProps, MouseEvent, ReactNode } from "react";
import Button from "../Button";
import { Container } from "./styled";

interface TagProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// #DO: Implement Tag
function Tag({
  title,
  leftIcon,
  rightIcon,
  ...props
}: TagProps & ComponentProps<"button">) {
  return (
    <Container>
      {leftIcon && (
        <Button variant="ghost" {...props}>
          {leftIcon}
        </Button>
      )}
      <p>{title}</p>
      {rightIcon && (
        <Button variant="ghost" {...props}>
          {rightIcon}
        </Button>
      )}
    </Container>
  );
}

export default Tag;
