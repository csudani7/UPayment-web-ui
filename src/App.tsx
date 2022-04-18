import './styles/global.css';
import Layout from './component/layout';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home';
import AddProduct from './component/add-product';
import ProductDetails from './component/product-details';

function App() {
  return (
    <Switch>
      <Layout>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/product-details/:id" component={ProductDetails} />
        </>
      </Layout>
    </Switch>
  );
}

export default App;
