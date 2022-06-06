import { useState } from "react";
import { Burger } from "../../component/burger/burger";
import { IBurgerOptionType } from "../../types/burger_option_types";

export const BurgerBuilder = () => {
  const initialBurgerOption: IBurgerOptionType = {
    cheese: 9,
    salad: 9,
    bacon: 9,
    meat: 9,
  };

  // set burger option state
  const [getUserBurgerOption, setUserBurgerOption] =
    useState(initialBurgerOption);
  return (
    <>
      <Burger burgerOption={getUserBurgerOption} />
    </>
  );
};
