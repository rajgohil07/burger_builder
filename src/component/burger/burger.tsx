import { BurgerIngredientType } from "../../types/burger_ingredient_types";
import { BurgerIngredient } from "./burger_ingredient/burger_ingredient";

export const Burger = () => {
  return (
    <div className="Burger">
      <BurgerIngredient types={BurgerIngredientType.BreadTop} />
      <BurgerIngredient types={BurgerIngredientType.Cheese} />
      <BurgerIngredient types={BurgerIngredientType.Bacon} />
      <BurgerIngredient types={BurgerIngredientType.BreadBottom} />
    </div>
  );
};
