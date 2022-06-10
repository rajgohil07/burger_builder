import { Snackbar, Alert } from "@mui/material";
import {
  defaultAlertText,
  defaultAlertTiming,
} from "../../constants/constants";

export const AlertComponent = ({
  alertText = defaultAlertText,
  timing = defaultAlertTiming,
  isSuccess = true,
}: {
  alertText: string;
  timing: number;
  isSuccess: boolean;
}) => {
  <>
    <Snackbar open={true} autoHideDuration={timing} onClose={() => {}}>
      <Alert
        onClose={() => {}}
        severity={isSuccess ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {alertText}
      </Alert>
    </Snackbar>
  </>;
};
