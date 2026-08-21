import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="container">

      <h1>Online Mobile Store</h1>

      <div className="product-grid">

        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <p className="price">
              ₹{product.price}
            </p>

            <Link
              to={`/products/${product.id}`}
              className="btn"
            >
              View Details
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductList;