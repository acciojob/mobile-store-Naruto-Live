import React, { useState } from "react";
import {
  useParams,
  Link,
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

  const [editing, setEditing] =
    useState(false);

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

        <Link
          to="/"
          className="btn"
        >
          Back
        </Link>
      </div>
    );
  }

  const saveChanges = (event) => {
    event.preventDefault();

    updateProduct({
      id: product.id,
      name,
      price: Number(price),
      description,
      image
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
              onClick={() =>
                history.push("/")
              }
            >
              Back
            </button>
          </>
        ) : (
          <form
            onSubmit={saveChanges}
            className="edit-form"
          >

            <input
              className="form-control"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Product Name"
            />

            <input
              className="form-control"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
              placeholder="Price"
              type="number"
            />

            <textarea
              className="form-control"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              placeholder="Description"
            />

            <input
              className="form-control"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
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