import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";

import { CaretLeft } from "@phosphor-icons/react";

function FoodNew() {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="ghost" onClick={() => navigate(-1)}>
        <CaretLeft size={24} />
        Voltar
      </Button>
    </div>
  );
}

export default FoodNew;
