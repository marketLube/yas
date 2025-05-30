import React from "react";
import arrow from "../../assets/icons/left.svg";

export default function PaymentCheckoutBody() {
  return (
    <div className="payment-checkout">
      {/* */}

      <div className="payment-checkout__steps">
        <div className="step active">
          <span>Step 1</span>
          <h2>Email verification</h2>
          <div className="step-line"></div>
        </div>
        <div className="step">
          <span>Step 2</span>
          <h2>Checkout</h2>
          <div className="step-line inactive"></div>
        </div>
      </div>
      <div className="payment-checkout__header">
        <button className="back-button">
          <img src={arrow} alt="arrow" /> Back
        </button>
        <h1 className="payment-checkout__title">Guest details and payment</h1>
      </div>
      <div className="payment-checkout__content">
        <div className="form-container">
          <div className="form-group">
            <label>EMAIL ADDRESS *</label>
            <input
              type="email"
              placeholder="vivek@dev.vanasthi.ae"
              className="form-control"
            />
            <div className="input-underline"></div>
          </div>

          <button className="confirm-button">Confirm email</button>
        </div>
      </div>
    </div>
  );
}
