import { BurgerController } from "./burger_controller/burger_controller";
import { ingredientArray } from "../../constants/constants";
import "./burger_controllers.css";

export const BurgerControllers = () => {
  return (
    <div className="BuildControls">
      {ingredientArray.map((singleIngredient) => (
        <BurgerController
          key={singleIngredient.type}
          name={singleIngredient.Name}
        />
      ))}
    </div>
  );
};
