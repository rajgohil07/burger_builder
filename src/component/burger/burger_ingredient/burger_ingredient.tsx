import { BurgerIngredientType } from "../../../types/burger_ingredient_types";
import PropTypes from "prop-types";

export const BurgerIngredient = ({
  types,
}: {
  types: BurgerIngredientType;
}) => {
  let ingredient;
  switch (types) {
    case BurgerIngredientType.BreadBottom:
      ingredient = <div className="BreadBottom"></div>;
      break;
    case BurgerIngredientType.BreadTop:
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case BurgerIngredientType.Meat:
      ingredient = <div className="Meat"></div>;
      break;
    case BurgerIngredientType.Cheese:
      ingredient = <div className="Cheese"></div>;
      break;
    case BurgerIngredientType.Salad:
      ingredient = <div className="Salad"></div>;
      break;
    case BurgerIngredientType.Bacon:
      ingredient = <div className="Bacon"></div>;
      break;
    default:
      break;
  }
  return <>{ingredient}</>;
};

BurgerIngredient.propType = {
  types: PropTypes.oneOf(
    Object.values(BurgerIngredientType) as BurgerIngredientType[]
  ),
};
