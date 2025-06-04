import React from "react";
import homeIcon from "../../../../assets/images/home1.svg";
import chatIcon from "../../../../assets/images/message.svg";
import cartIcon from "../../../../assets/images/shopping.svg";
import { useNavigate, useLocation } from "react-router-dom";
import MobileLanding from "./MobileLanding";

function MobileBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mobile-bottom-nav">
      <div
        className={`mobile-bottom-nav__item${
          location.pathname === "/mobilelanding"
            ? " mobile-bottom-nav__item--active"
            : ""
        }`}
        onClick={() => {
          navigate("/mobilelanding");
          window.scrollTo(0, 0);
        }}
        style={{ cursor: "pointer" }}
      >
        <img
          src={homeIcon}
          alt="Home"
          style={{
            filter:
              location.pathname === "/mobilelanding"
                ? "invert(32%) sepia(99%) saturate(7496%) hue-rotate(202deg) brightness(99%) contrast(101%)"
                : "brightness(0) saturate(100%)",
          }}
        />
        <span>Home</span>
      </div>
      <div className="mobile-bottom-nav__item">
        <img src={chatIcon} alt="Chat with us" />
        <span>Chat with us</span>
      </div>
      <div
        className="mobile-bottom-nav__item"
        onClick={() => {
          navigate("/mycart");
          window.scrollTo(0, 0);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={cartIcon} alt="Cart" />
        <span>Cart</span>
      </div>
    </div>
  );
}

export default MobileBottomNav;
