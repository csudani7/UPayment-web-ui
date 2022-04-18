import "styles/global.css";
import Layout from "./component/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home"
import AddProduct from "component/add-product";
import ProductDetails from "component/product-details";
function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/add-product" component={AddProduct} />
          <Route path="/product-details/:id" component={ProductDetails} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
