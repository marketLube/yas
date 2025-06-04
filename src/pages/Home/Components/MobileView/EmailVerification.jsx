import React, { useState } from "react";
import MobileHeader from "./MobileHeader"; // Adjust the import path as needed
import ConfirmEmail from "./ConfirmEmail";

function EmailVerification({ onClose, onConfirmEmail }) {
  const [email, setEmail] = useState("vivek@dev.panashi.ae");
  const [step, setStep] = useState(1); // 1 = email, 2 = confirm email
  const [showEmailVerification, setShowEmailVerification] = useState(true);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEmailVerification(false);
    setShowConfirmEmail(true);
    setStep(2);
  };

  return (
    <>
      {showEmailVerification && (
        <div className="outer-modal-bg">
          <form className="email-verification__form" onSubmit={handleSubmit}>
            <div className="email-verification-header-fixed">
              <MobileHeader />
            </div>
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
              >
                Step 1<br />
                <span>Email verification</span>
              </div>
              <div
                className={
                  "email-verification__step" +
                  (step === 2 ? " email-verification__step--active" : "")
                }
              >
                Step 2<br />
                <span>Confirm Email</span>
              </div>
            </div>

            <div className="email-verification__step-underline"></div>
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
            <button className="email-verification__confirm-btn" type="submit">
              Continue
            </button>
          </form>
        </div>
      )}
      {showConfirmEmail && (
        <ConfirmEmail
          onBack={() => {
            setShowConfirmEmail(false);
            setShowEmailVerification(true);
            setStep(1);
          }}
          onConfirm={() => {
            if (onConfirmEmail) onConfirmEmail();
          }}
        />
      )}
    </>
  );
}

export default EmailVerification;
