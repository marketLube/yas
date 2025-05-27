import React from "react";
import logo from "../../assets/logo/logo.png";
import desc from "../../assets/logo/desc.svg";
import "./_logo.scss";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img" />
      <img src={desc} alt="desc" className="logo-desc" />
    </div>
  );
}
