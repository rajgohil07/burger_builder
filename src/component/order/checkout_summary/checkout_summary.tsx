import { Button } from "@mui/material";
import { Burger } from "../../burger/burger";

export const CheckoutSummary = ({ burgerOption }: { burgerOption: any }) => (
  <div className="checkoutSummaryOuterDiv">
    <h1>We hope it tastes well!</h1>
    <div className="checkoutSummary">
      <Burger burgerOption={burgerOption} />
    </div>
    <Button
      style={{ textTransform: "uppercase" }}
      variant="contained"
      color="success"
    >
      Continue
    </Button>
    <Button
      style={{ textTransform: "uppercase" }}
      variant="contained"
      color="error"
    >
      Cancel
    </Button>
  </div>
);
