

import React, { useState } from "react";
import './../styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const initialProducts = [
  {
    id: 1,
    name: "iPhone 14",
    price: 79999,
    description: "Apple iPhone with powerful performance.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 74999,
    description: "Samsung flagship smartphone.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Google Pixel 7",
    price: 59999,
    description: "Google smartphone with excellent camera.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 56999,
    description: "Fast and powerful OnePlus phone.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 69999,
    description: "Premium Xiaomi smartphone.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 6,
    name: "Nothing Phone 2",
    price: 44999,
    description: "Unique smartphone with Glyph interface.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 7,
    name: "Realme GT",
    price: 39999,
    description: "Performance-focused smartphone.",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 8,
    name: "Motorola Edge",
    price: 35999,
    description: "Modern Motorola smartphone.",
    image: "https://via.placeholder.com/200"
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      {
        ...product,
        id: Date.now()
      }
    ]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} />}
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails
              products={products}
              updateProduct={updateProduct}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminPanel
              products={products}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
