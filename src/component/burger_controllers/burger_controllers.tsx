import { BurgerController } from "./burger_controller/burger_controller";
import { ingredientArray } from "../../constants/constants";
import "./burger_controllers.css";

export const BurgerControllers = ({
  buttonClickEvent,
}: {
  buttonClickEvent: Function;
}) => {
  return (
    <div className="BuildControls">
      {ingredientArray.map((singleIngredient) => (
        <BurgerController
          buttonClickEvent={buttonClickEvent}
          key={singleIngredient.type}
          name={singleIngredient.Name}
          type={singleIngredient.type}
        />
      ))}
    </div>
  );
};
