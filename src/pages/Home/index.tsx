import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

import Button from "@/components/Button";
import Banner from "@/components/Banner";

import { Container } from "./styled";

function Home() {
  // #DO: Implement Carousel
  return (
    <Container>
      <Banner />
      <h2>Refeicoes</h2>
      {/* <Carousel items={items}/> */}
      <h2>Sobremesas</h2>
      {/* <Carousel items={items}/> */}
      <h2>Bebidas</h2>
      {/* <Carousel items={items}/> */}
    </Container>
  );
}

export default Home;
