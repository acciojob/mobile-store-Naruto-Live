import React, { useState } from "react";
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
    name: "iPhone 13",
    price: 59999,
    description: "Apple iPhone 13",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 49999,
    description: "Samsung Galaxy S21",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "OnePlus 9",
    price: 39999,
    description: "OnePlus 9",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "Google Pixel 6",
    price: 44999,
    description: "Google Pixel 6",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    price: 29999,
    description: "Xiaomi Mi 11",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 6,
    name: "Realme GT",
    price: 25999,
    description: "Realme GT",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 7,
    name: "Vivo X60",
    price: 34999,
    description: "Vivo X60",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 8,
    name: "Oppo Reno",
    price: 27999,
    description: "Oppo Reno",
    image: "https://via.placeholder.com/200"
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts([
      ...products,
      {
        ...product,
        id: Date.now()
      }
    ]);
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
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
          element={
            <ProductList products={products} />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails products={products} />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminPanel
              products={products}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;