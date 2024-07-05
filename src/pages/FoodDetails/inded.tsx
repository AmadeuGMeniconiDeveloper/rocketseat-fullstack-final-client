import Button from "@/components/Button";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, FooterContainer, TagContainer } from "./styled";
import AmountStepper from "@/components/AmountStepper";
import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { AuthContext } from "@/context/AuthContext";

function FoodDetails() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();

  const userRole = auth?.user.role;

  // #CHECK/LOGIC: UseEffect to fetch food data
  useEffect(() => {
    // #DO: Fetch food data
    // #DO: Set food data in state
  }, []);

  return (
    <Container>
      <Button variant="ghost" onClick={() => navigate(-1)}>
        <CaretLeft size={24} />
        Voltar
      </Button>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Example"
      />
      <h2>Salada Ceasar</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
        culpa.
      </p>
      <TagContainer>
        <p>Sasdfsdflada</p>
        <p>Ceasar</p>
        <p>Salasdfsdfda</p>
        <p>Ceasar</p>
        <p>Salada</p>
        <p>Ceassdfsdfsdar</p>
      </TagContainer>
      <FooterContainer>
        {userRole === "ADMIN" ? (
          <Button variant="primary">editar prato</Button>
        ) : (
          <>
            <AmountStepper />
            <Button variant="primary">
              <Receipt size={24} />
              pedir - $20.00
            </Button>
          </>
        )}
      </FooterContainer>
    </Container>
  );
}

export default FoodDetails;
