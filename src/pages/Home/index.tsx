import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

import Button from "@/components/Button";
import Banner from "@/components/Banner";

import { Container } from "./styled";
import FoodCard from "@/components/FoodCard";

function Home() {
  // #DO: Implement Carousel
  return (
    <Container>
      <Banner />
      <h2>Refeicoes</h2>
      {/* <Carousel items={items}/> */}
      <FoodCard
        imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="X-Burguer"
        price="20,00"
      />
      <h2>Sobremesas</h2>
      {/* <Carousel items={items}/> */}
      <h2>Bebidas</h2>
      {/* <Carousel items={items}/> */}
    </Container>
  );
}

export default Home;
