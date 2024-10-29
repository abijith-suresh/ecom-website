import React, { useState } from "react";
import Cart from "./Cart";
import ProductForm from "./ProductForm";
import Wishlist from "./WishList";

const NavBar = ({ cartItems, onDelete, onAddProduct, wishlistItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleProductForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <button
              className="btn btn-outline-success"
              onClick={toggleProductForm}
            >
              Add Product
            </button>
            <a className="navbar-brand mx-auto" href="#home">
              E-Commerce Site
            </a>
            <button className="btn btn-outline-primary" onClick={toggleCart}>
              Cart
            </button>
            <button className="btn btn-outline-info" onClick={toggleWishlist}>
              Wishlist
            </button>
          </div>
        </div>
      </nav>
      <Cart
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onDelete={onDelete}
      />
      <ProductForm
        isOpen={isFormOpen}
        onClose={toggleProductForm}
        onAddProduct={onAddProduct}
      />
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={toggleWishlist}
        wishlistItems={wishlistItems}
      />
    </>
  );
};

export default NavBar;
