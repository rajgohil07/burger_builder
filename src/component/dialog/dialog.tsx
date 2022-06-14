import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AlertComponent } from "../alert/alert";
import { IButtonType } from "../../types/button_type";

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
}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={() => {
              clearAll();
              handleClose();
              IsForConfirmation && confirmationFunction
                ? confirmationFunction(true)
                : setAlert(true);
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
