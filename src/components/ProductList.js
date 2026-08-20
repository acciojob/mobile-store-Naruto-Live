import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="store">

      <h1>Mobile Store</h1>

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

            <Link
              to={`/products/${product.id}`}
              className="product-link"
            >
              {product.name}
            </Link>

            <p>
              Price: ₹{product.price}
            </p>

            <Link
              className="buy-btn"
              to={`/products/${product.id}`}
            >
              Buy
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductList;