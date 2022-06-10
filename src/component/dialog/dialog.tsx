import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AlertComponent } from "../alert/alert";
import { defaultAlertTiming, message } from "../../constants/constants";

export const DialogBox = ({
  name,
  successFn: clearAll,
  title,
  body,
  isClearAllDisabled,
}: {
  name: string;
  successFn: Function;
  title: string;
  body: string;
  isClearAllDisabled: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  const [getDisplayAlert, setDisplayAlert] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setAlert = () => {
    setDisplayAlert(false);
  };

  return (
    <div>
      <AlertComponent
        isOpen={getDisplayAlert}
        alertText={message.burgerIngredientsResetMessage}
        timing={defaultAlertTiming}
        isSuccess={true}
        setAlert={setAlert}
      />
      <Button
        disabled={isClearAllDisabled}
        variant="contained"
        color="error"
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
            No, not at the moment
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              clearAll();
              handleClose();
              setDisplayAlert(true);
            }}
          >
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
