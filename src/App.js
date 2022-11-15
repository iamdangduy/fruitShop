import { Route, Routes } from "react-router-dom";
import Blog from "./Components/blog/Blog";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import GridList from "./Components/gridList/GridList";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import OderSuccess from "./Components/OderSuccess";
import ProductSearch from "./Components/ProductSearch";
import Register from "./Components/Register";
import Provider from "./Components/store/Provider";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Provider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/index.html" element={<HomePage />} />
              <Route path="/shop" element={<GridList />} />
              <Route path="/blog.html" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productsearch" element={<ProductSearch />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/odersuccess" element={<OderSuccess />} />
            </Routes>
            <Footer />
          </Provider>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
