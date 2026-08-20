import React, { useState } from "react";
import {
  useParams,
  Link
} from "react-router-dom";

function ProductDetails({
  products,
  updateProduct
}) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState(null);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const currentProduct = form || product;

  const handleChange = (e) => {
    setForm({
      ...currentProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setForm(product);
    setEditing(true);
  };

  const handleSave = () => {

    updateProduct({
      ...currentProduct,
      price: Number(currentProduct.price)
    });

    setEditing(false);
  };

  return (
    <div className="product-details">

      <h1>{product.name}</h1>

      {editing ? (

        <div className="edit-form">

          <input
            className="form-control"
            name="name"
            value={currentProduct.name}
            onChange={handleChange}
          />

          <input
            className="form-control"
            name="description"
            value={currentProduct.description}
            onChange={handleChange}
          />

          <input
            className="form-control"
            name="image"
            value={currentProduct.image}
            onChange={handleChange}
          />

          <input
            className="form-control"
            name="price"
            type="number"
            value={currentProduct.price}
            onChange={handleChange}
          />

          <button
            className="float-right"
            onClick={handleSave}
          >
            Save
          </button>

        </div>

      ) : (

        <>
          <img
            className="detail-image"
            src={product.image}
            alt={product.name}
          />

          <p>
            {product.description}
          </p>

          <h3>
            Price: ₹{product.price}
          </h3>

        </>

      )}

      <button
        className="btn"
        onClick={handleEdit}
      >
        Edit
      </button>

      <Link
        className="btn"
        to="/"
      >
        Back
      </Link>

    </div>
  );
}

export default ProductDetails;