import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import CartAlert from "./components/CartAlert";
import WishListAlert from "./components/WishListAlert";
import products from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState(products);
  const [isCartAlertOpen, setIsCartAlertOpen] = useState(false);
  const [isWishListAlertOpen, setIsWishListAlertOpen] = useState(false);
  const [cartAlertMessage, setCartAlertMessage] = useState("");
  const [wishListAlertMessage, setWishListAlertMessage] = useState("");
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartAlertMessage(`${product.name} has been added to your cart!`);
    setIsCartAlertOpen(true);

    setTimeout(() => {
      setIsCartAlertOpen(false);
    }, 750);
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.some((item) => item.id === product.id)) {
      setWishlistItems((prevItems) => [...prevItems, product]);
      setWishListAlertMessage(
        `${product.name} has been added to your wishlist!`
      );
      setIsWishListAlertOpen(true);

      setTimeout(() => {
        setIsWishListAlertOpen(false);
      }, 750);
    }
  };

  const handleWishlistDelete = (index) => {
    const updatedWishlistItems = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlistItems);
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
        wishlistItems={wishlistItems}
        onWishlistDelete={handleWishlistDelete}
      />
      <HomePage
        products={productList}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        wishlistItems={wishlistItems}
      />
      <CartAlert
        message={cartAlertMessage}
        isOpen={isCartAlertOpen}
        onClose={() => setIsCartAlertOpen(false)}
      />
      <WishListAlert
        message={wishListAlertMessage}
        isOpen={isWishListAlertOpen}
        onClose={() => setIsWishListAlertOpen(false)}
      />
    </>
  );
}

export default App;
