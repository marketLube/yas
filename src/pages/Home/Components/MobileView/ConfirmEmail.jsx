import React, { useState } from "react";
import MobileHeader from "./MobileHeader"; // Adjust the import path as needed

function ConfirmEmail({
  email = "vivek@dev.panashi.ae",
  onBack,
  onResend,
  onConfirm,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds

  // Handle OTP input
  const handleOtpChange = (value, idx) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[idx] = value.slice(-1);
    setOtp(newOtp);
    // Move to next input if filled
    if (value && idx < 5) {
      document.getElementById(`otp-input-${idx + 1}`).focus();
    }
  };

  // Timer countdown
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Format timer as MM:SS
  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

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
          <button className="email-verification__back-btn" onClick={onBack}>
            ←
          </button>
          <div className="email-verification__steps">
            <div className="email-verification__step email-verification__step--active">
              Step 1<br />
              <span>Email verification</span>
            </div>
            <div className="email-verification__step">
              Step 2<br />
              <span>Checkout</span>
            </div>
          </div>
          <div className="email-verification__step-underline"></div>
          <div className="email-verification__form-container">
            <div className="email-verification__label">EMAIL ADDRESS *</div>
            <div
              className="email-verification__input"
              style={{ marginBottom: 16 }}
            >
              {email}
            </div>
            <div className="otp-section">
              <div className="otp-section__label">ENTER VERIFICATION CODE</div>
              <div className="otp-section__inputs">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="otp-section__input"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                  />
                ))}
              </div>
              <div className="otp-section__info">
                Verification code has been sent to <b>{email}</b>
                <br />
                <span className="otp-section__info-warning">
                  Please check your spam or junk mail folder
                </span>
              </div>
              <div className="otp-section__actions">
                <span>
                  Will Expire In <b>{formatTime(timer)}</b>
                </span>
                <button
                  className="otp-section__resend"
                  onClick={() => {
                    setTimer(180);
                    if (onResend) onResend();
                  }}
                  disabled={timer > 0}
                >
                  Resend
                </button>
              </div>
            </div>
            <button
              className="email-verification__confirm-btn"
              style={{ marginTop: 24 }}
              onClick={() => onConfirm && onConfirm(otp.join(""))}
            >
              Confirm OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
