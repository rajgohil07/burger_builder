import { useState } from "react";
import { BackdropComponent } from "../../backdrop/backdrop";
import { Logo } from "../../logo/logo";
import { NavigationLinks } from "../navigation_links/navigation_links";
import "./side_drawer.css";

export const SideDrawer = () => {
  const [getSideDrawer, setSideDrawer] = useState(true);
  const sideDrawerClassic = getSideDrawer
    ? ["sideDrawer", "open"]
    : ["sideDrawer", "close"];
  return (
    <>
      <BackdropComponent show={getSideDrawer} toggleFunction={setSideDrawer} />
      <div className={sideDrawerClassic.join(" ")}>
        <Logo isMobileDevice={true} />
        <nav>
          <NavigationLinks />
        </nav>
      </div>
    </>
  );
};
