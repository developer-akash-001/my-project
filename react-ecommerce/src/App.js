import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const addToCart = (item) => {
    if (!isLoggedIn) return alert("Please login first!");
    setCart([...cart, item]);
  };

  return (
    <BrowserRouter>
      <nav style={{ padding: 10, background: "#BDB76B", display: "flex", justifyContent: "space-between" }}>
        <h3>🛍️ MiniShop</h3>
        <div>
          <Link to="/">Products</Link> |{" "}
          <Link to="/cart">Cart ({cart.length})</Link> |{" "}
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
