import React, { useState } from "react";

import {
  useParams,
  useHistory
} from "react-router-dom";

function ProductDetails({
  products,
  updateProduct
}) {
  const { id } = useParams();
  const history = useHistory();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(
    product ? product.name : ""
  );

  const [price, setPrice] = useState(
    product ? product.price : ""
  );

  const [description, setDescription] =
    useState(
      product ? product.description : ""
    );

  const [image, setImage] = useState(
    product ? product.image : ""
  );

  if (!product) {
    return (
      <div className="container">
        <h1>Product Not Found</h1>

        <button
          className="btn"
          onClick={() => history.push("/")}
        >
          Back
        </button>
      </div>
    );
  }

  const handleEdit = () => {
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setEditing(true);
  };

  const handleSave = (event) => {
    event.preventDefault();

    updateProduct({
      id: product.id,
      name: name,
      price: Number(price),
      description: description,
      image: image
    });

    setEditing(false);
  };

  return (
    <div className="container">

      <div className="details-card">

        <img
          src={product.image}
          alt={product.name}
        />

        {!editing ? (
          <>
            <h1>{product.name}</h1>

            <p>
              {product.description}
            </p>

            <h2>
              ₹{product.price}
            </h2>

            <button
              className="btn"
              onClick={() => history.push("/")}
            >
              Back
            </button>

            <button
              className="btn"
              onClick={handleEdit}
            >
              Edit
            </button>
          </>
        ) : (
          <form
            className="edit-form"
            onSubmit={handleSave}
          >

            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Product Name"
            />

            <input
              className="form-control"
              type="number"
              value={price}
              onChange={(event) =>
                setPrice(event.target.value)
              }
              placeholder="Price"
            />

            <textarea
              className="form-control"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Description"
            />

            <input
              className="form-control"
              type="text"
              value={image}
              onChange={(event) =>
                setImage(event.target.value)
              }
              placeholder="Image URL"
            />

            <button
              type="submit"
              className="btn"
            >
              Save
            </button>

          </form>
        )}

      </div>
    </div>
  );
}

export default ProductDetails;