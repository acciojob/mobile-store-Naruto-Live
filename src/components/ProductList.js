import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;