import { Layout } from "./component/layout/layout";
import { SideDrawer } from "./component/navigation/side_drawer/side_drawer";
import { ToolbarComponent } from "./component/navigation/toolbar/toolbar";
import { BurgerBuilder } from "./container/burger_builder/burger_builder";

const App = () => {
  return (
    <>
      <Layout>
        <ToolbarComponent />
        <SideDrawer />
        <BurgerBuilder />
      </Layout>
    </>
  );
};

export default App;
