import { BurgerController } from "./burger_controller/burger_controller";
import { ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import "./burger_controllers.css";

export const BurgerControllers = ({
  buttonClickEvent,
  disabledButtonArrayList,
}: {
  buttonClickEvent: Function;
  disabledButtonArrayList: IBurgerIngredientType[];
}) => {
  return (
    <div className="BuildControls">
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
