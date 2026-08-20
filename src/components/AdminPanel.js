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
    <div className="container">
    <div className="row">

        {products.map((product) => (
            <div
                className="col-12"
                key={product.id}
            >

                <div>

                    <Link
                        to={`/products/${product.id}`}
                    >
                        <div className="row">
                            <div className="col">
                                {product.name}
                            </div>

                            <div className="col">
                                ₹{product.price}
                            </div>
                        </div>
                    </Link>

                    <button
                        className="float-right"
                        onClick={() =>
                            deleteProduct(product.id)
                        }
                    >
                        Delete
                    </button>

                    <Link
                        className="float-right"
                        to={`/products/${product.id}?edit=true`}
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