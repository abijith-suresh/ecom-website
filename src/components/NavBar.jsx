import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Cart from "./Cart";

const NavBar = ({ cartItems, onDelete }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <a className="navbar-brand mx-auto" href="#home">
              My E-Commerce Site
            </a>
            <button className="btn btn-outline-primary" onClick={toggleCart}>
              Cart
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
    </>
  );
};

export default NavBar;
