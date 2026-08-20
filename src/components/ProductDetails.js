import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
      />

      <p>{product.description}</p>

      <h3>{product.price}</h3>

      <Link className="btn" to="/">
        Back
      </Link>
    </div>
  );
}

export default ProductDetails;