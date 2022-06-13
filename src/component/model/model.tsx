import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AiFillCloseSquare } from "react-icons/ai";
import "./model.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#E6E6FA",
  border: "1px solid #000",
  boxShadow: 5,
  p: 3,
};

export const ModelComponent = ({
  modelStatus,
  changeModelStatus,
}: {
  modelStatus: boolean;
  changeModelStatus: Function;
}) => {
  return (
    <div>
      <Modal
        open={modelStatus}
        onClose={() => changeModelStatus(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modelCloseTagMerger">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <strong>Your burger total summary!</strong>
            </Typography>
            <AiFillCloseSquare
              className="closeTag"
              onClick={() => changeModelStatus(false)}
            />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A delicious burger with the following ingredients.
          </Typography>
          <Typography className="yourOrder">
            <p>Your order:</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};