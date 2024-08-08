import { useContext, useEffect } from "react";

import Banner from "@/components/Banner";
import Slider from "@/components/Slider";

import { Container } from "./styled";

import { AppContext } from "@/contexts/AppContext";

function Home() {
  const { meals, desserts, drinks, getFoods } = useContext(AppContext);

  useEffect(() => {
    const handleGetFoods = async () => {
      await getFoods();
    };

    handleGetFoods();
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
