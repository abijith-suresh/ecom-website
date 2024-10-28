import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CartAlert from "./components/CartAlert";
import products from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState(products);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setAlertMessage(`${product.name} has been added to your cart!`);
    setIsAlertOpen(true);

    setTimeout(() => {
      setIsAlertOpen(false);
    }, 1500);
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
      <CartAlert
        message={alertMessage}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />
    </>
  );
}

export default App;
