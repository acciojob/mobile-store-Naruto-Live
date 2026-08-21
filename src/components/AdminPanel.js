import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({
  products,
  addProduct,
  deleteProduct
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim() === "" ||
      description.trim() === "" ||
      image.trim() === "" ||
      price === ""
    ) {
      return;
    }

    addProduct({
      name: name.trim(),
      description: description.trim(),
      image: image.trim(),
      price: Number(price)
    });

    setName("");
    setDescription("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="container">

      <h1>Admin Panel</h1>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >

        <input
          className="form-control"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />

        <input
          className="form-control"
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
        />

        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(event) =>
            setImage(event.target.value)
          }
        />

        <input
          className="form-control"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) =>
            setPrice(event.target.value)
          }
        />

        <button type="submit">
          Add
        </button>

      </form>

      <div className="admin-list">

        {products.map((product) => (
          <div
            className="admin-product"
            key={product.id}
          >

            {/* FIRST CHILD */}
            <div className="admin-product-info">

              <img
                src={product.image}
                alt={product.name}
              />

              <div>
                <h2>{product.name}</h2>

                <p>
                  {product.description}
                </p>

                <p className="price">
                  ₹{product.price}
                </p>
              </div>

            </div>

            {/* SECOND CHILD - DELETE */}
            <div className="admin-delete">

              <button
                type="button"
                className="float-right"
                onClick={() =>
                  deleteProduct(product.id)
                }
              >
                Delete
              </button>

            </div>

            {/* THIRD CHILD - EDIT */}
            <div className="admin-edit">

              <Link
                className="float-right"
                to={`/products/${product.id}`}
              >
                Edit
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminPanel;