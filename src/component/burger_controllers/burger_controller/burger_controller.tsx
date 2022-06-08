import "./burger_controller.css";

export const BurgerController = ({ name }: { name: string }) => {
  return (
    <div className="BuildControl">
      <label className="Label" htmlFor="">
        {name}
      </label>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};
