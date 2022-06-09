import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const DialogBox = ({
  name,
  successFn: clearAll,
  title,
  body,
}: {
  name: string;
  successFn: Function;
  title: string;
  body: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
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
            }}
          >
            Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
