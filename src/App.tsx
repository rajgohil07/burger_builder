import { Layout } from "./component/layout/layout";
import { ToolbarComponent } from "./component/navigation/toolbar/toolbar";
import { BurgerBuilder } from "./container/burger_builder/burger_builder";

const App = () => {
  return (
    <>
      <Layout>
        <ToolbarComponent />
        <BurgerBuilder />
      </Layout>
    </>
  );
};

export default App;
