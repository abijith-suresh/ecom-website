import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import products from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState(products); // Initialize with existing products

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleAddProduct = (newProduct) => {
    setProductList((prevList) => [...prevList, newProduct]);
  };

  return (
    <>
      <NavBar
        cartItems={cartItems}
        onDelete={handleDelete}
        onAddProduct={handleAddProduct}
      />
      <HomePage products={productList} addToCart={addToCart} />
    </>
  );
}

export default App;
