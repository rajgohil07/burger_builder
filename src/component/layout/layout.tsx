import { useEffect, useState } from "react";
import { BurgerBuilder } from "../../container/burger_builder/burger_builder";
import { SideDrawer } from "../navigation/side_drawer/side_drawer";
import { ToolbarComponent } from "../navigation/toolbar/toolbar";

export const Layout = () => {
  const [getSideDrawer, setSideDrawer] = useState(false);

  // set sideDrawer to false when screen width > 500
  const handleSideDrawerUponWindowResize = () =>
    window.innerWidth > 500 ? setSideDrawer(false) : null;

  useEffect(() =>
    window.addEventListener("resize", handleSideDrawerUponWindowResize)
  );
  return (
    <>
      <ToolbarComponent toggleFunction={setSideDrawer} />
      <SideDrawer
        getSideDrawer={getSideDrawer}
        toggleFunction={setSideDrawer}
      />
      <BurgerBuilder />
    </>
  );
};
