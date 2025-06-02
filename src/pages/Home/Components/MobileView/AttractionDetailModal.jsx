import React from "react";
import closeIcon from "../../../../assets/images/close.svg"; // Replace with your close icon
import backIcon from "../../../../assets/images/back.svg"; // Replace with your back arrow icon

function AttractionDetailModal({ attraction, onClose, onBack, onAddToCart }) {
  if (!attraction) return null;

  return (
    <div className="attraction-detail-modal-overlay">
      <div className="attraction-detail-modal">
        <div className="attraction-detail-modal__header">
          <button className="attraction-detail-modal__back" onClick={onBack}>
            <img src={backIcon} alt="Back" />
          </button>
          <span className="attraction-detail-modal__title">
            {attraction.title}
          </span>
          <button className="attraction-detail-modal__close" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="attraction-detail-modal__body">
          <img
            src={attraction.image}
            alt={attraction.title}
            className="attraction-detail-modal__image"
          />
          <div className="attraction-detail-modal__main-title">
            {attraction.title}
          </div>
          <div className="attraction-detail-modal__desc">
            {attraction.detailDesc || attraction.desc}
          </div>
        </div>
        <div className="attraction-detail-modal__footer">
          <div>
            <div className="attraction-detail-modal__price">
              {attraction.detailPrice || attraction.price}
            </div>
            <div className="attraction-detail-modal__vat">
              {attraction.detailVat || attraction.vat}
            </div>
          </div>
          <button
            className="attraction-detail-modal__add-btn"
            onClick={onAddToCart}
          >
            + Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttractionDetailModal;
