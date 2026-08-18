import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({
  products,
  addProduct,
  deleteProduct
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.description ||
      !form.image ||
      !form.price
    ) {
      return;
    }

    addProduct({
      ...form,
      price: Number(form.price)
    });

    setForm({
      name: "",
      description: "",
      image: "",
      price: ""
    });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <input
          className="form-control"
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <button type="submit">
          Add
        </button>
      </form>

      <h2>Products: {products.length}</h2>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>

          <button
            className="float-right"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;