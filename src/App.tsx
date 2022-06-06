import { Layout } from "./component/layout/layout";
import { BurgerBuilder } from "./container/burger_builder/burger_builder";

const App = () => {
  return (
    <>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </>
  );
};

export default App;
