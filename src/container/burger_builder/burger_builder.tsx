import { useEffect, useState } from "react";
import { Burger } from "../../component/burger/burger";
import { IBurgerOptionType } from "../../types/burger_option_types";

export const BurgerBuilder = () => {
  // set burger option state
  const [getCheese, setCheese] = useState<number>(9);
  const [getSalad, setSalad] = useState<number>(9);
  const [getMeat, setMeat] = useState<number>(9);
  const [getBacon, setBacon] = useState<number>(9);
  const [getPrice, setPrice] = useState(0);

  const burgerOption: IBurgerOptionType = {
    cheese: getCheese,
    salad: getSalad,
    meat: getMeat,
    bacon: getBacon,
  };

  useEffect(() => {
    burgerOption.cheese = getCheese;
    burgerOption.salad = getSalad;
    burgerOption.meat = getMeat;
    burgerOption.bacon = getBacon;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCheese, getSalad, getBacon, getMeat]);

  return (
    <>
      <Burger burgerOption={burgerOption} />
    </>
  );
};
