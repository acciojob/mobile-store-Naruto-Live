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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !image || !price) {
      return;
    }

    addProduct({
      name: name,
      description: description,
      image: image,
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

      <form onSubmit={handleSubmit} className="admin-form">

        <input
          className="form-control"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control"
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
        />

        <input
          className="form-control"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
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

            <div className="row">

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>
                  ₹{product.price}
                </p>
              </div>

              <div className="product-actions">

                <Link
                  to={`/products/${product.id}`}
                  className="edit-link"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminPanel;