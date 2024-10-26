import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import products from "./data/Products";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    console.log(`${product.name} added to cart`);
  };

  return (
    <>
      <NavBar cartItems={cartItems} />
      <HomePage products={products} addToCart={addToCart} />
    </>
  );
}

export default App;
