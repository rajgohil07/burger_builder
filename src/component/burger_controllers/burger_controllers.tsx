import { BurgerController } from "./burger_controller/burger_controller";
import { ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import { DialogBox } from "../dialog/dialog";
import "./burger_controllers.css";

export const BurgerControllers = ({
  buttonClickEvent,
  disabledButtonArrayList,
  price,
  clearAll,
  isClearAllDisabled,
}: {
  buttonClickEvent: Function;
  disabledButtonArrayList: IBurgerIngredientType[];
  price: number;
  clearAll: Function;
  isClearAllDisabled: boolean;
}) => {
  return (
    <div className="BuildControls">
      <div className="merger">
        <p>
          Total price: <strong>{`${price.toFixed(2)} $`}</strong>
        </p>
        <DialogBox
          isClearAllDisabled={isClearAllDisabled}
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
