import "./burger_controller.css";

export const BurgerController = ({ name }: { name: string }) => {
  return (
    <div>
      <label className="Label" htmlFor="">
        {name}
      </label>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};
