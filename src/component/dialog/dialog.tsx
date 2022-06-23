/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AlertComponent } from "../alert/alert";
import { IButtonType } from "../../types/button_type";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { orderAxios } from "../../axios-instants";

export const DialogBox = ({
  name,
  successFn: clearAll,
  title,
  body,
  isClearAllDisabled,
  isAlert,
  isSuccess,
  setAlert,
  getDisplayAlert,
  timing,
  alertText,
  buttonColorType,
  IsForConfirmation = false,
  confirmationFunction,
  successMessageButtonString,
  denyMessageButtonString,
  changeModelStatus,
  changeOrderConfirmSuccess,
  totalPrice,
  burgerOption,
  setDisplayLoading,
  setOrderErrorMessage,
  setSuccessConfirmOrder,
}: {
  name: string;
  successFn: Function;
  title: string;
  body: string;
  isClearAllDisabled: boolean;
  isAlert: boolean;
  isSuccess: boolean;
  setAlert: Function;
  getDisplayAlert: boolean;
  timing: number;
  alertText: string;
  buttonColorType: IButtonType;
  IsForConfirmation?: boolean;
  confirmationFunction?: Function;
  successMessageButtonString?: string;
  denyMessageButtonString?: string;
  changeModelStatus?: Function;
  changeOrderConfirmSuccess?: Function;
  burgerOption?: any;
  totalPrice?: number | string;
  setDisplayLoading: Function;
  setOrderErrorMessage?: Function;
  setSuccessConfirmOrder?: Function;
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createOrder = async (price: number | string, ingredients: any) => {
    try {
      const config: AxiosRequestConfig = {
        url: "/order.json",
        method: "POST",
        data: {
          Name: "Raj gohil",
          Price: price,
          Ingredients: ingredients,
        },
      };
      const response: AxiosResponse = await orderAxios(config);
      return response;
    } catch (e) {
      setOrderErrorMessage(e.message);
      setSuccessConfirmOrder(false);
    }
  };

  return (
    <div>
      {isAlert && (
        <AlertComponent
          isOpen={getDisplayAlert}
          alertText={alertText}
          timing={timing}
          isSuccess={isSuccess}
          setAlert={setAlert}
        />
      )}
      <Button
        disabled={isClearAllDisabled}
        variant="contained"
        color={buttonColorType}
        onClick={handleClickOpen}
      >
        {name}
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
            {denyMessageButtonString
              ? denyMessageButtonString
              : "No, not at the moment"}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={async () => {
              setDisplayLoading(true);
              clearAll();
              handleClose();
              IsForConfirmation && confirmationFunction && changeModelStatus
                ? changeModelStatus(false)
                : setAlert(true);
              totalPrice && burgerOption
                ? await createOrder(totalPrice, burgerOption)
                : console.log("not working");
              changeOrderConfirmSuccess
                ? changeOrderConfirmSuccess(true)
                : null;
              setDisplayLoading(false);
            }}
          >
            {successMessageButtonString
              ? successMessageButtonString
              : "Yes, I'm sure"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
