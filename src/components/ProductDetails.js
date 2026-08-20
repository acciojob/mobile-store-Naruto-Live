import React, { useState } from "react";
import {
  useParams,
  Link,
  useLocation
} from "react-router-dom";

function ProductDetails({
  products,
  updateProduct
}) {

  const { id } = useParams();

  const location = useLocation();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const editMode =
    new URLSearchParams(location.search).get("edit") === "true";

  const [form, setForm] = useState(null);

  if (!product) {
    return (
      <h2>
        Product not found
      </h2>
    );
  }

  const currentForm = form || product;

  const handleChange = (event) => {

    setForm({
      ...currentForm,
      [event.target.name]:
        event.target.name === "price"
          ? event.target.value
          : event.target.value
    });

  };

  const handleSave = () => {

    updateProduct({
      ...currentForm,
      price: Number(currentForm.price)
    });

    window.history.back();

  };

  return (
    <div className="product-details">

      <h1>
        {product.name}
      </h1>

      {editMode ? (

        <div className="edit-form">

          <input
            className="form-control"
            name="name"
            value={currentForm.name}
            onChange={handleChange}
          />

          <input
            className="form-control"
            name="description"
            value={currentForm.description}
            onChange={handleChange}
          />

          <input
            className="form-control"
            name="image"
            value={currentForm.image}
            onChange={handleChange}
          />

          <input
            className="form-control"
            name="price"
            type="number"
            value={currentForm.price}
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
            src={product.image}
            alt={product.name}
            className="detail-image"
          />

          <p>
            {product.description}
          </p>

          <h3>
            Price: ₹{product.price}
          </h3>

        </>

      )}

      <br />

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