import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Productpage from "./pages/Productpage/Productpage";
import Cart from "./pages/Cart/cart";
import Shop from "./pages/Shop/Shop";
import { Provider } from 'react-redux';
import store from './redux/store';
import Contact from "./pages/Contact/Contact";





function App() {
  


  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>

      </Provider>

  )
}

export default App
