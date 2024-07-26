import Button from "@/components/Button";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function FoodEdit() {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
    </div>
  );
}

export default FoodEdit;
