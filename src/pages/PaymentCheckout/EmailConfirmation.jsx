import React, { useState } from "react";
import VerificationBox from "./VerificationBox";

export default function EmailConfirmation() {
  const [showVerification, setShowVerification] = useState(false);

  return (
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

      {showVerification && <VerificationBox email="vivek@dev.panashi.ae" />}

      <button
        className="confirm-button"
        onClick={() => setShowVerification(true)}
      >
        Confirm email
      </button>
    </div>
  );
}
