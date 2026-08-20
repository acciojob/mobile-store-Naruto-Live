import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

import "./../styles/App.css";

const initialProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S6 64GB Black",
    price: 16303,
    description: "Samsung Galaxy S6 with 64GB storage.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
  },
  {
    id: 2,
    name: "Samsung Galaxy S9 64GB Black",
    price: 20888,
    description: "Samsung Galaxy S9 with 64GB storage.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300"
  },
  {
    id: 3,
    name: "Samsung Galaxy S8+ 64GB Black",
    price: 19701,
    description: "Samsung Galaxy S8 Plus with 64GB storage.",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300"
  },
  {
    id: 4,
    name: "Samsung Galaxy S9+ 64GB Black",
    price: 49999,
    description: "Samsung Galaxy S9 Plus with 64GB storage.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300"
  },
  {
    id: 5,
    name: "Samsung Galaxy Note 9 128GB Midnight Black",
    price: 29768,
    description: "Samsung Galaxy Note 9 with 128GB storage.",
    image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?w=300"
  },
  {
    id: 6,
    name: "Samsung Galaxy Note 8 64GB Black",
    price: 22771,
    description: "Samsung Galaxy Note 8 with 64GB storage.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300"
  },
  {
    id: 7,
    name: "Samsung Galaxy S10 128GB",
    price: 39999,
    description: "Samsung Galaxy S10 with 128GB storage.",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300"
  },
  {
    id: 8,
    name: "Samsung Galaxy S20 128GB",
    price: 44999,
    description: "Samsung Galaxy S20 with 128GB storage.",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300"
  }
];

function App() {

  const [products, setProducts] =
    useState(initialProducts);

  const addProduct = (product) => {

    setProducts((previousProducts) => [
      ...previousProducts,
      {
        ...product,
        id: Date.now()
      }
    ]);

  };

  const deleteProduct = (id) => {

    setProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product.id !== id
      )
    );

  };

  const updateProduct = (updatedProduct) => {

    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

  };

  return (

    <BrowserRouter>

      <nav className="navbar">

        <Link to="/">
          HOME
        </Link>

        <Link to="/admin">
          ADMIN
        </Link>

      </nav>

      <Switch>

        <Route exact path="/">
          <ProductList
            products={products}
          />
        </Route>

        <Route path="/products/:id">
          <ProductDetails
            products={products}
            updateProduct={updateProduct}
          />
        </Route>

        <Route path="/admin">
          <AdminPanel
            products={products}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
          />
        </Route>

      </Switch>

    </BrowserRouter>

  );
}

export default App;