import { BurgerIngredient } from "./burger_ingredient/burger_ingredient";
import { BurgerIngredientTypeEnum } from "../../types/burger_ingredient_types";
import "./burger.css";

export const Burger = ({ burgerOption }: { burgerOption: any }) => {
  const burgerData: any = Object.keys(burgerOption).map((keyName: any) =>
    [...Array(burgerOption[keyName])].map((_, index) => {
      let burgerOptionData;
      switch (keyName) {
        case "salad":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Salad}
            />
          );
          break;
        case "cheese":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Cheese}
            />
          );
          break;
        case "meat":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Meat}
            />
          );
          break;
        case "bacon":
          burgerOptionData = (
            <BurgerIngredient
              key={index + keyName}
              types={BurgerIngredientTypeEnum.Bacon}
            />
          );
          break;
        default:
          break;
      }
      return burgerOptionData;
    })
  );
  return (
    <div className="Burger">
      <BurgerIngredient types={BurgerIngredientTypeEnum.BreadTop} />
      {burgerData}
      <BurgerIngredient types={BurgerIngredientTypeEnum.BreadBottom} />
    </div>
  );
};
