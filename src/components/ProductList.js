import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>

            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;