import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProductCard from "./ProductCard";

const HomePage = ({ products, addToCart, addToWishlist, wishlistItems }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist} 
            isInWishlist={wishlistItems.some(item => item.id === product.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
