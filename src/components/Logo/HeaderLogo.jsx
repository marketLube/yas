import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import desc from "../../assets/logo/desc.svg";
import "./_logo.scss";
import MainProductHead from "../../pages/Home/ProductPage/ProductHead/mainProductHead";
import ProductHead from "../../pages/Home/ProductPage/ProductHead/ProductHead";
import AccessibilityModal from "../../pages/Home/Components/AccessibilityModal";
import CartModal from "../../pages/Home/Components/CartModal";

export default function HeaderLogo() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] =
    useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleLogoClick = () => {
    navigate("/");
  };

  const isProductRoute = location.pathname === "/product";

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: isProductRoute ? "space-between" : "flex-start",
          gap: "1rem",
        }}
      >
        <div
          className="header-logo"
          onClick={handleLogoClick}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: isProductRoute ? "column" : "row",
            alignItems: "center",
            height: isProductRoute ? "130px" : "118px",
            width: isProductRoute ? "12rem" : "",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="header-logo-img"
            style={{
              width: isProductRoute ? "5rem" : "7rem",
            }}
          />
          <img
            src={desc}
            alt="desc"
            className="header-logo-desc"
            style={{
              width: isProductRoute ? "6rem" : "8rem",
            }}
          />
        </div>
        {isProductRoute && (
          <div
            style={{
              width: "87%",
            }}
          >
            <MainProductHead
              onAccessibilityOpen={() => setIsAccessibilityModalOpen(true)}
              onCartOpen={() => setIsCartModalOpen(true)}
            />
            <ProductHead />
          </div>
        )}
      </div>

      <AccessibilityModal
        isOpen={isAccessibilityModalOpen}
        onClose={() => setIsAccessibilityModalOpen(false)}
      />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </>
  );
}
