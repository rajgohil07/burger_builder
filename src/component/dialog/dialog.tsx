/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
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
import { Backdrop, CircularProgress } from "@mui/material";

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
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [displayBackdrop, setDisplayBackdrop] = useState(false);

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
      // console.log("response", response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => console.log("changed", displayBackdrop), [displayBackdrop]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: 9999 }}
        open={displayBackdrop}
        onClick={() => {}}
      >
        <CircularProgress size={90} thickness={5} color="success" />
      </Backdrop>
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
              setDisplayBackdrop(true);
              console.log("setDisplayBackdrop 123", displayBackdrop);
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
              setDisplayBackdrop(false);
              console.log("setDisplayBackdrop 123", displayBackdrop);
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
