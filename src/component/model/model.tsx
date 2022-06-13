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

// reference https://stackoverflow.com/a/7224605/15350391
const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

export const ModelComponent = ({
  modelStatus,
  changeModelStatus,
  burgerOption,
  totalPrice,
}: {
  modelStatus: boolean;
  changeModelStatus: Function;
  burgerOption: any;
  totalPrice: string;
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
            <ul>
              {Object.keys(burgerOption).map((singularData: any) => (
                <li key={singularData}>
                  {capitalize(singularData)}:{burgerOption[singularData]}
                </li>
              ))}
              <hr className="dottedLine" />
              <li>
                <strong>
                  Total price: <span>{totalPrice}$</span>
                </strong>
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
