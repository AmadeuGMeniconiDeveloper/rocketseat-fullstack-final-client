import { useContext, useEffect, useState } from "react";

import Banner from "@/components/Banner";
import Slider from "@/components/Slider";

import { Container } from "./styled";

import { Food } from "@/types/api";
import { AppContext } from "@/contexts/AppContext";

function Home() {
  const { foods } = useContext(AppContext);

  const [meals, setMeals] = useState<Food[]>(
    foods.filter((food: Food) => food.category === "Refeicao")
  );
  const [desserts, setDesserts] = useState<Food[]>(
    foods.filter((food: Food) => food.category === "Sobremesa")
  );
  const [drinks, setDrinks] = useState<Food[]>(
    foods.filter((food: Food) => food.category === "Bebida")
  );

  useEffect(() => {
    setMeals(foods.filter((food: Food) => food.category === "Refeicao"));
    setDesserts(foods.filter((food: Food) => food.category === "Sobremesa"));
    setDrinks(foods.filter((food: Food) => food.category === "Bebida"));
  }, [foods]);

  return (
    <Container>
      <Banner />
      <h2>Refeicoes</h2>
      {meals.length ? <Slider sliderItems={meals} /> : <p>No items found...</p>}
      <h2>Sobremesas</h2>
      {desserts.length ? (
        <Slider sliderItems={desserts} />
      ) : (
        <p>No items found...</p>
      )}
      <h2>Bebidas</h2>
      {drinks.length ? (
        <Slider sliderItems={drinks} />
      ) : (
        <p>No items found...</p>
      )}
    </Container>
  );
}

export default Home;
