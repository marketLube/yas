import React from "react";
import logo from "../../assets/logo/logo.png";
import desc from "../../assets/logo/desc.svg";
import "./_logo.scss";

export default function HeaderLogo() {
  return (
    <div className="header-logo">
      <img src={logo} alt="logo" className="header-logo-img" />
      <img src={desc} alt="desc" className="header-logo-desc" />
    </div>
  );
}
