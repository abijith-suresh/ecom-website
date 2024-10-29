import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Wishlist = ({ isOpen, onClose, wishlistItems }) => {
  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Wishlist</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {wishlistItems.length > 0 ? (
              <ul className="list-group">
                {wishlistItems.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.name} - {item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your wishlist is empty.</p>
            )}
          </div>
          <div className="modal-footer">
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

export default Wishlist;
