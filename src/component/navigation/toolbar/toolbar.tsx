import { Logo } from "../../logo/logo";
import { NavigationLinks } from "../navigation_links/navigation_links";
import "./toolbar.css";

export const ToolbarComponent = () => (
  <header className="Toolbar">
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationLinks />
    </nav>
  </header>
);
