import { Button, Divider, Stack } from "@mui/material";
import { Burger } from "../../burger/burger";
import "./checkout_summary.css";

export const CheckoutSummary = ({ burgerOption }: { burgerOption: any }) => (
  <div className="checkoutSummaryOuterDiv">
    <h1>We hope it tastes well!</h1>
    <div className="checkoutSummary">
      <Burger burgerOption={burgerOption} />
    </div>
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Button
        style={{ textTransform: "uppercase" }}
        variant="contained"
        color="error"
      >
        Cancel
      </Button>
      <Button
        style={{ textTransform: "uppercase" }}
        variant="contained"
        color="success"
      >
        Continue
      </Button>
    </Stack>
  </div>
);
