import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({ isOpen, onClose, cartItems, onDelete }) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Shopping Cart</h5>
          </div>
          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>
                      {item.name} - {item.price}
                    </span>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <h5>
              Total:{" "}
              {cartItems
                .reduce(
                  (total, item) => total + parseFloat(item.price.slice(1)),
                  0
                )
                .toFixed(2)}
            </h5>
            <button className="btn btn-primary" onClick={onClose}>
              Checkout
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
