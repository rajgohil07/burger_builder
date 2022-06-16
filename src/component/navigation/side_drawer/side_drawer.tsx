import { Logo } from "../../logo/logo";
import { NavigationLinks } from "../navigation_links/navigation_links";
import "./side_drawer.css";

export const SideDrawer = () => (
  <div className="sideDrawer">
    <Logo isMobileDevice={true} />
    <nav>
      <NavigationLinks />
    </nav>
  </div>
);
