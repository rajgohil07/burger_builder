import { BurgerIngredientTypeEnum } from "../types/burger_ingredient_types";

export const ingredientArray = [
  { Name: "Cheese", type: BurgerIngredientTypeEnum.Cheese },
  { Name: "Salad", type: BurgerIngredientTypeEnum.Salad },
  { Name: "Bacon", type: BurgerIngredientTypeEnum.Bacon },
  { Name: "Meat", type: BurgerIngredientTypeEnum.Meat },
];

export const defaultIngredientsPrice = {
  Cheese: 1,
  Salad: 0.5,
  Bacon: 0.75,
  Meat: 2,
};
