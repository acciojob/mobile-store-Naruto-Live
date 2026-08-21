import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({
  products,
  addProduct,
  deleteProduct
}) {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !name ||
      !description ||
      !image ||
      !price
    ) {
      return;
    }

    addProduct({
      name,
      description,
      image,
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

      <div className="admin-form">

        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="form-control"
            placeholder="Product Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <input
            className="form-control"
            placeholder="Image URL"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
          />

          <input
            className="form-control"
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          <button
            type="submit"
            className="btn"
          >
            Add
          </button>

        </form>
      </div>

      <h2>
        Products ({products.length})
      </h2>

      <div className="admin-products">

        {products.map((product) => (
          <div
            className="admin-product"
            key={product.id}
          >

            <div>
              <h3>{product.name}</h3>

              <p>
                ₹{product.price}
              </p>
            </div>

            <div className="admin-actions">

              <Link
                to={`/products/${product.id}`}
                className="float-right btn"
              >
                Edit
              </Link>

              <button
                className="float-right btn danger"
                onClick={() =>
                  deleteProduct(
                    product.id
                  )
                }
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminPanel;