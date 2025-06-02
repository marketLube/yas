import React from "react";
import arrow from "../../assets/icons/left.svg";

export default function PaymentCheckoutHeader() {
  return (
    <div className="payment-checkout__header">
      <button className="back-button">
        <img src={arrow} alt="arrow" /> Back
      </button>
      <h1 className="payment-checkout__title">Guest details and payment</h1>
    </div>
  );
}
