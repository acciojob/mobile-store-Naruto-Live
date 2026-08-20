import React, { useState } from "react";
import {
  useParams,
  useLocation,
  Link
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

  const searchParams =
    new URLSearchParams(location.search);

  const editMode =
    searchParams.get("edit") === "true";

  const [price, setPrice] = useState("");

  if (!product) {
    return (
      <h2>Product not found</h2>
    );
  }

  const handleSave = () => {

    if (price === "") {
      return;
    }

    updateProduct({
      ...product,
      price: Number(price)
    });
  };

  return (
    <div>

      <h1>
        {product.name}
      </h1>

      <img
        src={product.image}
        alt={product.name}
      />

      <p>
        {product.description}
      </p>

      {!editMode && (
        <h3>
          {product.price}
        </h3>
      )}

      {editMode && (
        <div>

          <input
            className="form-control"
            value={price}
            placeholder={product.price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <Link
            className="float-right"
            to={`/products/${product.id}`}
            onClick={handleSave}
          >
            Save
          </Link>

        </div>
      )}

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