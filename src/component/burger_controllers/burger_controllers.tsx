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
import { AlertComponent } from "../alert/alert";

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

  // success message for
  const [getDisplayOrderAlert, setDisplayOrderAlert] = useState(false);

  // change the order success alert
  const changeOrderConfirmSuccess = (status: boolean) =>
    setDisplayOrderAlert(status);

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
          IsForConfirmation={false}
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
        changeOrderConfirmStatus={changeOrderConfirmStatus}
        getDisplayAlert={getOrder}
        isClearAllDisabled={isClearAllDisabled}
        successFn={clearAll}
        changeOrderConfirmSuccess={changeOrderConfirmSuccess}
      />
      <AlertComponent
        isOpen={getDisplayOrderAlert}
        alertText={message.orderConfirm}
        timing={defaultAlertTiming}
        isSuccess={true}
        setAlert={changeOrderConfirmSuccess}
      />
    </div>
  );
};
