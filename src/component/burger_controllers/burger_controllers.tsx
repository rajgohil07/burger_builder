import { BurgerController } from "./burger_controller/burger_controller";
import { ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import "./burger_controllers.css";
import { DialogBox } from "../dialog/dialog";

export const BurgerControllers = ({
  buttonClickEvent,
  disabledButtonArrayList,
  price,
  clearAll,
}: {
  buttonClickEvent: Function;
  disabledButtonArrayList: IBurgerIngredientType[];
  price: number;
  clearAll: Function;
}) => {
  return (
    <div className="BuildControls">
      <div className="merger">
        <p>
          Total price: <strong>{`${price.toFixed(2)} $`}</strong>
        </p>
        <DialogBox
          name="CLEAR ALL"
          successFn={clearAll}
          title="Are you sure you want to do this?"
          body="After doing this all of your ingredients will be removed"
        />
      </div>
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
