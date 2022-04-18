import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <Layout>
        <>
          <ToastContainer position="top-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/product-details/:id" component={ProductDetails} />
          </Switch>
        </>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
