import { Minus, Plus } from "@phosphor-icons/react";
import Button from "../Button";
import { Container } from "./styled";
import { useState } from "react";

// #DO: Implement CartContext (add amount of this product to cart)
function AmountStepper() {
  const [amount, setAmount] = useState(1);

  const handleChangeAmount = (operation: "+" | "-") => {
    if (operation === "-") {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    }
    if (operation === "+") {
      if (amount < 99) {
        setAmount(amount + 1);
      }
    }
  };

  return (
    <Container>
      <Button variant="ghost" onClick={() => handleChangeAmount("-")}>
        <Minus size={24} />
      </Button>
      <div>{amount}</div>
      <Button variant="ghost" onClick={() => handleChangeAmount("+")}>
        <Plus size={24} />
      </Button>
    </Container>
  );
}

export default AmountStepper;
