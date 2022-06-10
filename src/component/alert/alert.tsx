import { Snackbar, Alert } from "@mui/material";
import {
  defaultAlertText,
  defaultAlertTiming,
} from "../../constants/constants";

export const AlertComponent = ({
  alertText = defaultAlertText,
  timing = defaultAlertTiming,
}: {
  alertText: string;
  timing: number;
}) => {
  <>
    <Snackbar open={true} autoHideDuration={timing} onClose={() => {}}>
      <Alert onClose={() => {}} severity="success" sx={{ width: "100%" }}>
        {alertText}
      </Alert>
    </Snackbar>
  </>;
};
