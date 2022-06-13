import { BurgerController } from "./burger_controller/burger_controller";
import { dialogBox, ingredientArray } from "../../constants/constants";
import { IBurgerIngredientType } from "../../types/burger_ingredient_types";
import { DialogBox } from "../dialog/dialog";
import { useState } from "react";
import { defaultAlertTiming, message } from "../../constants/constants";
import { Box, Button } from "@mui/material";
import { ModelComponent } from "../model/model";
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
  const [getDisplayAlert, setDisplaySummary] = useState(false);
  const setAlert = (value: boolean) => setDisplaySummary(value);

  // order now dialog box
  const [getOrderSummary, setOrderSummary] = useState(false);
  const setOrderSummaryModel = (value: boolean) => setOrderSummary(value);
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
      {/* <DialogBox
        isAlert={true}
        isSuccess={true}
        setAlert={setOrderAlertValue}
        getDisplayAlert={getOrderSummary}
        timing={defaultAlertTiming}
        alertText={message.orderConfirm}
        isClearAllDisabled={isClearAllDisabled}
        name="order now"
        successFn={clearAll}
        title={dialogBox.orderButton.title}
        body={`${dialogBox.orderButton.body} ${totalPrice}`}
        buttonColorType="success"
      /> */}
      <Box mt={2}>
        <Button
          disabled={isClearAllDisabled}
          variant="contained"
          color="success"
          onClick={() => setOrderSummaryModel(true)}
        >
          order now
        </Button>
      </Box>
      <ModelComponent
        modelStatus={getOrderSummary}
        changeModelStatus={setOrderSummaryModel}
      />
    </div>
  );
};
