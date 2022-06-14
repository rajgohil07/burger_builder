import { BurgerController } from "./burger_controller/burger_controller";
import { dialogBox, ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import { DialogBox } from "../dialog/dialog";
import { useState } from "react";
import { defaultAlertTiming, message } from "../../constants/constants";
import { Box, Button } from "@mui/material";
import { ModelComponent } from "../model/model";
import { IBurgerOptionType } from "../../types/burger_option_types";
import "./burger_controllers.css";

export const BurgerControllers = ({
  buttonClickEvent,
  disabledButtonArrayList,
  price,
  clearAll,
  isClearAllDisabled,
  burgerOption,
}: {
  buttonClickEvent: Function;
  disabledButtonArrayList: IBurgerIngredientType[];
  price: number;
  clearAll: Function;
  isClearAllDisabled: boolean;
  burgerOption: IBurgerOptionType;
}) => {
  // state to clear all button
  const [getDisplayAlert, setDisplaySummary] = useState(false);
  const setAlert = (value: boolean) => setDisplaySummary(value);

  // order summary dialog box
  const [getOrderSummary, setOrderSummary] = useState(false);
  const setOrderSummaryModel = (value: boolean) => setOrderSummary(value);

  // order summary dialog box
  const [getOrder, setOrder] = useState(false);
  const changeOrderConfirmStatus = (value: boolean) => setOrder(value);
  const totalPrice = `${price.toFixed(2)} $`;

  return (
    <div className="BuildControls">
      <div className="merger">
        <p>
          Total price: <strong>{totalPrice}</strong>
        </p>
        <DialogBox
          isAlert={true}
          isSuccess={true}
          setAlert={setAlert}
          getDisplayAlert={getDisplayAlert}
          timing={defaultAlertTiming}
          alertText={message.burgerIngredientsResetMessage}
          isClearAllDisabled={isClearAllDisabled}
          name="clear all"
          successFn={clearAll}
          title={dialogBox.clearAllButton.title}
          body={dialogBox.clearAllButton.body}
          buttonColorType="error"
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
      <Box mt={2}>
        <Button
          disabled={isClearAllDisabled}
          variant="contained"
          color="success"
          onClick={() => setOrderSummaryModel(true)}
        >
          view order summary
        </Button>
      </Box>
      <ModelComponent
        modelStatus={getOrderSummary}
        burgerOption={burgerOption}
        changeModelStatus={setOrderSummaryModel}
        totalPrice={totalPrice}
        setAlertForConfirmation={changeOrderConfirmStatus}
      />
      <DialogBox
        isAlert={true}
        isSuccess={true}
        setAlert={changeOrderConfirmStatus}
        getDisplayAlert={getOrder}
        timing={defaultAlertTiming}
        alertText={message.orderConfirm}
        isClearAllDisabled={isClearAllDisabled}
        name="confirm order"
        successFn={clearAll}
        title={dialogBox.orderButton.title}
        body={`${dialogBox.orderButton.body} ${totalPrice}`}
        buttonColorType="success"
      />
    </div>
  );
};
