import React from "react";
import homeIcon from "../../../../assets/images/home1.svg";
import chatIcon from "../../../../assets/images/message.svg";
import cartIcon from "../../../../assets/images/shopping.svg";

function MobileBottomNav() {
  return (
    <div className="mobile-bottom-nav">
      <div className="mobile-bottom-nav__item mobile-bottom-nav__item--active">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </div>
      <div className="mobile-bottom-nav__item">
        <img src={chatIcon} alt="Chat with us" />
        <span>Chat with us</span>
      </div>
      <div className="mobile-bottom-nav__item">
        <img src={cartIcon} alt="Cart" />
        <span>Cart</span>
      </div>
    </div>
  );
}

export default MobileBottomNav;
