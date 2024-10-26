import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProductCard from "./ProductCard";

const HomePage = ({ products, addToCart }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
