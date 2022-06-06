import { BurgerIngredientTypeEnum } from "../../types/burger_ingredient_types";
import { BurgerIngredient } from "./burger_ingredient/burger_ingredient";
import "./burger.css";

export const Burger = () => {
  return (
    <div className="Burger">
      <BurgerIngredient types={BurgerIngredientTypeEnum.BreadTop} />
      <BurgerIngredient types={BurgerIngredientTypeEnum.Cheese} />
      <BurgerIngredient types={BurgerIngredientTypeEnum.Bacon} />
      <BurgerIngredient types={BurgerIngredientTypeEnum.Salad} />
      <BurgerIngredient types={BurgerIngredientTypeEnum.Meat} />
      <BurgerIngredient types={BurgerIngredientTypeEnum.BreadBottom} />
    </div>
  );
};
