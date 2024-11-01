import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product, addToCart, addToWishlist, isInWishlist }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-warning"
              onClick={() => addToWishlist(product)}
              disabled={isInWishlist}
            >
              {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
