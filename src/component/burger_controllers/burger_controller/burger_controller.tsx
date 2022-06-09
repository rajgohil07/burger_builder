import { addOrRemoveIngredientTypeEnum } from "../../../types/add_or_remove_ingredient_type";
import { IBurgerIngredientType } from "../../../types/burger_ingredient_types";
import "./burger_controller.css";

export const BurgerController = ({
  name,
  buttonClickEvent,
  type,
  disabledButtonArrayList,
}: {
  name: string;
  buttonClickEvent: Function;
  type: IBurgerIngredientType;
  disabledButtonArrayList: IBurgerIngredientType[];
}) => {
  // console.log(disabledButtonArrayList);
  const x = disabledButtonArrayList.indexOf(type) > -1 ? true : false;
  // const x = disabledButtonArrayList.indexOf(type);
  // console.log("disabledButtonArrayList :>> ", disabledButtonArrayList);
  // console.log("type :>> ", type);
  // console.log("x :>> ", x);
  // console.log("-----------------------------");
  return (
    <div className="BuildControl">
      <label className="Label" htmlFor="">
        {name}
      </label>
      <button
        disabled={x}
        className="Less"
        onClick={() =>
          buttonClickEvent(addOrRemoveIngredientTypeEnum.Less, type)
        }
      >
        Less
      </button>
      <button
        className="More"
        onClick={() =>
          buttonClickEvent(addOrRemoveIngredientTypeEnum.More, type)
        }
      >
        More
      </button>
    </div>
  );
};
