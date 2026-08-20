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
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Galaxy+S6"
  },
  {
    id: 2,
    name: "Samsung Galaxy S9 64GB Black",
    price: 20888,
    description: "Samsung Galaxy S9 with 64GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Galaxy+S9"
  },
  {
    id: 3,
    name: "Samsung Galaxy S8+ 64GB Black",
    price: 19701,
    description: "Samsung Galaxy S8 Plus with 64GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Galaxy+S8"
  },
  {
    id: 4,
    name: "Samsung Galaxy S9+ 64GB Black",
    price: 49999,
    description: "Samsung Galaxy S9 Plus with 64GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Galaxy+S9%2B"
  },
  {
    id: 5,
    name: "Samsung Galaxy Note 9 128GB Midnight Black",
    price: 29768,
    description: "Samsung Galaxy Note 9 with 128GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Note+9"
  },
  {
    id: 6,
    name: "Samsung Galaxy Note 8 64GB Black",
    price: 22771,
    description: "Samsung Galaxy Note 8 with 64GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Note+8"
  },
  {
    id: 7,
    name: "Samsung Galaxy S10 128GB",
    price: 39999,
    description: "Samsung Galaxy S10 with 128GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Galaxy+S10"
  },
  {
    id: 8,
    name: "Samsung Galaxy S20 128GB",
    price: 44999,
    description: "Samsung Galaxy S20 with 128GB storage.",
    image: "https://dummyimage.com/120x180/eeeeee/000000&text=Galaxy+S20"
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

      <nav className="navbar">

        <Link
          className="home-link"
          to="/"
        >
          HOME
        </Link>

        <Link
          className="admin-link"
          to="/admin"
        >
          ADMIN
        </Link>

      </nav>

      <Switch>

        <Route exact path="/">
          <ProductList products={products} />
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