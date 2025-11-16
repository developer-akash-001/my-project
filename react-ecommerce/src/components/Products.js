import React from "react";
import "./Products.css";

const productList = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "Watch", price: 100 },
];

function Products({ addToCart }) {
  return (
    <div className="products-container">
      <h2>🛍️ Our Products</h2>
      <div className="products-grid">
        {productList.map((p) => (
          <div key={p.id} className="product-card">
            <h4>{p.name}</h4>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
