import { BurgerController } from "./burger_controller/burger_controller";
import { dialogBox, ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import { DialogBox } from "../dialog/dialog";
import { useState } from "react";
import { defaultAlertTiming, message } from "../../constants/constants";
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
  const [getDisplayAlert, setDisplayAlert] = useState(false);
  const setAlert = (value: boolean) => setDisplayAlert(value);

  return (
    <div className="BuildControls">
      <div className="merger">
        <p>
          Total price: <strong>{`${price.toFixed(2)} $`}</strong>
        </p>
        <DialogBox
          isAlert={true}
          isSuccess={true}
          setAlert={setAlert}
          getDisplayAlert={getDisplayAlert}
          timing={defaultAlertTiming}
          alertText={message.burgerIngredientsResetMessage}
          isClearAllDisabled={isClearAllDisabled}
          name="CLEAR ALL"
          successFn={clearAll}
          title={dialogBox.clearAllButton.title}
          body={dialogBox.clearAllButton.body}
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
