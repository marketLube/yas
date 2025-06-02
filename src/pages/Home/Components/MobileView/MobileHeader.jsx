import React from "react";
import logo from "../../../../assets/images/moblogo.svg"; // Update path if needed
// Update path if needed
import accessibilityIcon from "../../../../assets/images/accessibility.svg"; // Replace with your icon
import globeIcon from "../../../../assets/images/global.svg"; // Replace with your icon

function MobileHeader() {
  return (
    <div className="mobile-header">
      <div className="mobile-header__left">
        <img src={logo} alt="YAS Island Logo" className="mobile-header__logo" />
      </div>
      <div className="mobile-header__right">
        <button className="mobile-header__icon-btn" aria-label="Accessibility">
          <img src={accessibilityIcon} alt="Accessibility" />
        </button>
        <button className="mobile-header__lang-btn" aria-label="Language">
          <img src={globeIcon} alt="Language" />
          <span>En</span>
          <span className="chevron">&#9662;</span>
        </button>
      </div>
    </div>
  );
}

export default MobileHeader;
