import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "@/config/api";

import { AuthContext } from "@/contexts/AuthContext";

import AmountStepper from "@/components/AmountStepper";
import Tag from "@/components/Tag";

import {
  Container,
  FooterContainer,
  ImageContainer,
  LoadingContainer,
  TagContainer,
} from "./styled";

import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { Food } from "@/types/api";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Button from "@/components/Button";
import { AppContext } from "@/contexts/AppContext";

function FoodDetails() {
  const { isAdmin } = useContext(AuthContext);
  const { addToCart } = useContext(AppContext);

  const [food, setFood] = useState<Food | null>();
  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleAddToCart = async () => {
    if (id) {
      addToCart(id, amount);
    }
  };

  useEffect(() => {
    const fetchFood = async () => {
      const response = await api.get(`/products/${id}`);

      setFood(response.data);
    };

    fetchFood();
  }, []);

  if (!food) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate("/home")}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <ImageContainer>
        {food.image ? (
          <img
            src={`${api.defaults.baseURL}/files/${food.image}`}
            alt={food.name}
            draggable="false"
          />
        ) : (
          <ImagePlaceholder alt={food.name} />
        )}
      </ImageContainer>
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <TagContainer>
        {food.ingredients.map(ingredient => (
          <Tag title={ingredient} key={ingredient} />
        ))}
      </TagContainer>
      <FooterContainer>
        {isAdmin ? (
          <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
            Editar prato
          </Button>
        ) : (
          <>
            <AmountStepper amount={amount} setAmount={setAmount} />
            <Button variant="primary" onClick={handleAddToCart}>
              <Receipt size={24} />
              Pedir - R${food.price}
            </Button>
          </>
        )}
      </FooterContainer>
    </Container>
  );
}

export default FoodDetails;
