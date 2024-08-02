import Button from "../Button";
import { Container } from "./styled";
import { Minus, Plus } from "@phosphor-icons/react";

interface AmountStepperProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

function AmountStepper({ amount, setAmount }: AmountStepperProps) {
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
