import { BurgerController } from "./burger_controller/burger_controller";
import { ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import "./burger_controllers.css";

export const BurgerControllers = ({
  buttonClickEvent,
  disabledButtonArrayList,
  price,
}: {
  buttonClickEvent: Function;
  disabledButtonArrayList: IBurgerIngredientType[];
  price: number;
}) => {
  return (
    <div className="BuildControls">
      <p>
        Total price: <strong>{`${price.toFixed(2)} $`}</strong>
      </p>
      {ingredientArray.map((singleIngredient) => (
        <BurgerController
          buttonClickEvent={buttonClickEvent}
          key={singleIngredient.type}
          name={singleIngredient.Name}
          type={singleIngredient.type}
          disabledButtonArrayList={disabledButtonArrayList}
        />
      ))}
    </div>
  );
};
