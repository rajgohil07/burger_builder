import logoImage from "../../assets/images/burger-logo.png";
import "./logo.css";

export const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="burger" title="Burger" />
  </div>
);
