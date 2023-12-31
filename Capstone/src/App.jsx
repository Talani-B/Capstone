import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NavBar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [cart, setCart] = useState([]);
  console.log("cart", cart);
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} token={token} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} token={token} />}
        />
        <Route
          path="/products/:id"
          element={
            <SingleProduct cart={cart} setCart={setCart} token={token} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
