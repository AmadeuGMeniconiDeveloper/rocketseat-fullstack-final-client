import FoodCard from "@/components/FoodCard";
import { motion } from "framer-motion";
import { Food } from "@/types/api";
import { Container } from "./styled";
import { useEffect, useRef, useState } from "react";

import foodImg from "@/assets/imgs/food-placeholders/Mask group-10.png";

interface SliderProps {
  sliderItems: Food[];
}

// #CHECK/CLARITY: Slider draging (framer-motion). Conflicts with styled-components?
// #CHECK/LOGIC: Slider scroll behaviour when resizing screen. Resizing screen should trigger useEffect
function Slider({ sliderItems }: SliderProps) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const renderSliderist = sliderItems.map(food => (
    <FoodCard
      key={food.id}
      id={food.id}
      title={food.name}
      description={food.description}
      price={food.price}
      imageUrl={foodImg}
    />
  ));

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(
        sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <Container>
      <motion.div ref={sliderRef} whileTap={{ cursor: "grabbing" }}>
        <motion.ul
          drag={"x"}
          dragConstraints={{ right: 0, left: -sliderWidth }}
        >
          {renderSliderist}
        </motion.ul>
      </motion.div>
    </Container>
  );
}

export default Slider;
