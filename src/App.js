import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import productsData from "./data";

import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AdminPanel from "./components/AdminPanel";

import "./styles.css";

function App() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (product) => {
    setProducts((currentProducts) => {
      const nextId =
        currentProducts.length > 0
          ? Math.max(
              ...currentProducts.map(
                (item) => item.id
              )
            ) + 1
          : 1;

      return [
        ...currentProducts,
        {
          ...product,
          id: nextId
        }
      ];
    });
  };

  const updateProduct = (updatedProduct) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== id
      )
    );
  };

  return (
    <Router>
      <div className="app">

        <nav className="navbar">
          <Link to="/" className="brand">
            Online Mobile Store
          </Link>

          <div className="navigation-links">
            <Link to="/">
              Products
            </Link>

            <Link to="/admin">
              Admin Panel
            </Link>
          </div>
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
              updateProduct={updateProduct}
            />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;