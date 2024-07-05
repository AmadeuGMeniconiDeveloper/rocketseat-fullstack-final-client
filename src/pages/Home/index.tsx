import { useEffect, useState } from "react";

import Banner from "@/components/Banner";

import { Container } from "./styled";
import Slider from "@/components/Slider";
import { Food } from "@/types/api";

function Home() {
  const [meals, setMeals] = useState<Food[]>([
    {
      id: "1",
      title: "Salada Ceasar",
      description: "teste",
      price: "20.00",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2",
      title: "Salada Ceasar",
      description: "teste",
      price: "20.00",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "3",
      title: "Salada Ceasar",
      description: "teste",
      price: "20.00",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ]);

  const [deserts, setDeserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const { data } = await api.get("/meals");
  //     setMeals(data);
  //   }

  //   fetchMeals();
  // }, []);

  return (
    <Container>
      <Banner />
      <h2>Refeicoes</h2>
      <Slider sliderItems={meals} />
      <h2>Sobremesas</h2>
      <Slider sliderItems={meals} />
      <h2>Bebidas</h2>
      <Slider sliderItems={meals} />
    </Container>
  );
}

export default Home;
