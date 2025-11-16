import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No items in cart.</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;
