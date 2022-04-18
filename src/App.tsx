import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/global.css';

import Layout from './component/layout';
import Home from './component/home';
import AddProduct from './component/add-product';
import ProductDetails from './component/product-details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Layout>
          <>
            <Route exact path="/" component={Home} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/product-details/:id" component={ProductDetails} />
          </>
        </Layout>
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
