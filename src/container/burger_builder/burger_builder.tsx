import { useEffect, useState } from "react";
import { Burger } from "../../component/burger/burger";
import { IBurgerOptionType } from "../../types/burger_option_types";

export const BurgerBuilder = () => {
  // set burger option state
  const [getCheese, setCheese] = useState<number>(0);
  const [getSalad, setSalad] = useState<number>(0);
  const [getMeat, setMeat] = useState<number>(0);
  const [getBacon, setBacon] = useState<number>(0);
  const [getPrice, setPrice] = useState<number>(0);

  const burgerOption: IBurgerOptionType = {
    cheese: getCheese,
    bacon: getBacon,
    salad: getSalad,
    meat: getMeat,
  };

  useEffect(() => {
    burgerOption.cheese = getCheese;
    burgerOption.bacon = getBacon;
    burgerOption.salad = getSalad;
    burgerOption.meat = getMeat;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCheese, getSalad, getBacon, getMeat, getPrice]);

  return (
    <>
      <Burger burgerOption={burgerOption} />
    </>
  );
};
