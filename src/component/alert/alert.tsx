import { Snackbar, Alert } from "@mui/material";
import {
  defaultAlertText,
  defaultAlertTiming,
} from "../../constants/constants";

export const AlertComponent = ({
  isOpen = false,
  alertText = defaultAlertText,
  timing = defaultAlertTiming,
  isSuccess = true,
  setAlert,
}: {
  isOpen: boolean;
  alertText: string;
  timing: number;
  isSuccess: boolean;
  setAlert: Function;
}) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isOpen}
        autoHideDuration={timing}
        onClose={() => {}}
        transitionDuration={timing / 8}
      >
        <Alert
          style={{
            backgroundColor: isSuccess ? "rgb(78,154,81)" : "rgb(211,47,47)",
          }}
          variant="filled"
          onClose={() => {
            setAlert();
          }}
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
};
