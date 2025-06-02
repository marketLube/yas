import React, { useState } from "react";
import MobileHeader from "./MobileHeader"; // Adjust the import path as needed

function CheckOut() {
  const [firstName, setFirstName] = useState("vivek");
  const [lastName, setLastName] = useState("eracheri");
  const [country, setCountry] = useState("UAE");
  const [nationality, setNationality] = useState("UAE");
  const [phone, setPhone] = useState("527263748");
  const [promo, setPromo] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [receiveComms, setReceiveComms] = useState(false);

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
          <div className="email-verification__steps">
            <div className="email-verification__step">
              Step 1<br />
              <span>Email verification</span>
            </div>
            <div className="email-verification__step email-verification__step--active">
              Step 2<br />
              <span>Checkout</span>
            </div>
          </div>
          <div className="email-verification__step-underline"></div>
          <div className="email-verification__form-container">
            <form className="email-verification__form">
              <label className="email-verification__label">
                FIRST NAME *
                <input
                  type="text"
                  className="email-verification__input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label className="email-verification__label">
                LAST NAME *
                <input
                  type="text"
                  className="email-verification__input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <label className="email-verification__label">
                COUNTRY OF RESIDENCE *
                <select
                  className="email-verification__input"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="UAE">UAE</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  {/* Add more countries as needed */}
                </select>
              </label>
              <label className="email-verification__label">
                NATIONALITY *
                <select
                  className="email-verification__input"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  required
                >
                  <option value="UAE">UAE</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  {/* Add more nationalities as needed */}
                </select>
              </label>
              <label className="email-verification__label">
                PHONE NUMBER (PREFERRED NUMBER) *
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 600, color: "#231942" }}>
                    +971
                  </span>
                  <input
                    type="tel"
                    className="email-verification__input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </label>

              {/* Order summary */}
              <div className="checkout-summary-box">
                <div className="checkout-summary-title">
                  1 day FERRARI WORLD YAS ISLAND
                </div>
                <div className="checkout-summary-row">
                  <span>DATES & GUESTS</span>
                  <span>
                    THU 08- FEB 2025 &nbsp; ADULT - 2 &nbsp; CHILDREN - 1
                  </span>
                </div>
                <div className="checkout-summary-row">
                  <span>Sub total :</span>
                  <span>AED 935.71</span>
                </div>
                <div className="checkout-summary-row">
                  <span>vat & tax :</span>
                  <span>+ 49.29 VAT & Tax</span>
                </div>
                <div className="checkout-summary-row checkout-summary-row--total">
                  <span>Total :</span>
                  <span>AED 985.00</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="checkout-promo-box">
                <label
                  className="email-verification__label"
                  style={{ marginBottom: 0 }}
                >
                  ENTER YOUR PROMO CODE TO GET DISCOUNT
                </label>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="text"
                    className="email-verification__input"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                  />
                  <button type="button" className="checkout-promo-apply">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="checkout-checkboxes">
                <label
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms((v) => !v)}
                    required
                  />
                  I have read and accept the{" "}
                  <a
                    href="#"
                    style={{ color: "#1976d2", textDecoration: "underline" }}
                  >
                    terms and conditions
                  </a>
                </label>
                <label
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <input
                    type="checkbox"
                    checked={receiveComms}
                    onChange={() => setReceiveComms((v) => !v)}
                  />
                  Receive communications via email
                </label>
              </div>

              {/* Proceed button */}
              <button
                className="email-verification__confirm-btn"
                type="submit"
                style={{
                  background: "#ffe600",
                  color: "#231942",
                  fontWeight: 700,
                  fontSize: 18,
                  marginTop: 16,
                }}
                disabled={!acceptTerms}
              >
                Proceed to payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
