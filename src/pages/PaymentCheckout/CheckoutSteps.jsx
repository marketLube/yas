import React from "react";

export default function CheckoutSteps() {
  return (
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
  );
}
