import React, { useState } from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";

function ProductDetails({ products, updateProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [price, setPrice] = useState(
    product ? product.price : ""
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const savePrice = () => {
    updateProduct({
      ...product,
      price: Number(price)
    });
  };

  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <input
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <p>₹{product.price}</p>

      <button
        className="float-right"
        onClick={savePrice}
      >
        Save
      </button>

      <button
        className="btn"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetails;