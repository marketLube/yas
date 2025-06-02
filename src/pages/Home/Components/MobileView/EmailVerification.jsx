import React, { useState } from "react";
import MobileHeader from "./MobileHeader"; // Adjust the import path as needed
import CheckOut from "./CheckOut"; // Import your checkout component

function EmailVerification({ onClose, onConfirmEmail }) {
  const [email, setEmail] = useState("vivek@dev.panashi.ae");
  const [step, setStep] = useState(1); // 1 = email, 2 = checkout

  const handleSubmit = (e) => {
    e.preventDefault();
    // Move to checkout step
    setStep(2);
    // If you want to call onConfirmEmail, do it here
    // if (onConfirmEmail) onConfirmEmail();
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal email-verification-modal">
        <div className="email-verification-header-fixed">
          <MobileHeader />
        </div>
        <div className="email-verification-content">
          <div className="email-verification__title">
            Guest details and payment
          </div>
          <button className="email-verification__back-btn" onClick={onClose}>
            ←
          </button>
          <div className="email-verification__steps">
            <div
              className={
                "email-verification__step" +
                (step === 1 ? " email-verification__step--active" : "")
              }
              onClick={() => setStep(1)}
              style={{ cursor: "pointer" }}
            >
              Step 1<br />
              <span>Email verification</span>
            </div>
            <div
              className={
                "email-verification__step" +
                (step === 2 ? " email-verification__step--active" : "")
              }
              onClick={() => setStep(2)}
              style={{ cursor: "pointer" }}
            >
              Step 2<br />
              <span>Checkout</span>
            </div>
          </div>
          <div className="email-verification__step-underline"></div>
          <div className="email-verification__form-container">
            {step === 1 ? (
              <form
                className="email-verification__form"
                onSubmit={handleSubmit}
              >
                <label className="email-verification__label">
                  EMAIL ADDRESS *
                  <input
                    type="email"
                    className="email-verification__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <button
                  className="email-verification__confirm-btn"
                  type="submit"
                >
                  Checkout
                </button>
              </form>
            ) : (
              <CheckOut />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
