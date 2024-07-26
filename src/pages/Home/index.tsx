import { useEffect, useState } from "react";

import Banner from "@/components/Banner";

import { Container } from "./styled";
import Slider from "@/components/Slider";
import { Food } from "@/types/api";
import { api } from "@/config/api";

function Home() {
  const [meals, setMeals] = useState<Food[]>([]);
  const [desserts, setDesserts] = useState<Food[]>([]);
  const [drinks, setDrinks] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      const { data } = await api.get("/products/all");

      setMeals(data.products.meals);
      setDrinks(data.products.drinks);
      setDesserts(data.products.desserts);
    };

    fetchFoodData();
  }, []);

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
