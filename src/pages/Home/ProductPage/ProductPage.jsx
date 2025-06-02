import React, { useState } from "react";
import ProductHead from "./ProductHead/ProductHead";
import { useSelector } from "react-redux";
import ProductSoloThumbnail from "./ProductSoloThumnail/ProductSoloThumbnail";
import MobSelectorGroup from "./MobSelectorGroup/MobSelectorGroup";
import ProductCard from "../Components/ProductCard";
import SideBar from "../../../layouts/SideBar/SideBar";
import ChatWithUsButton from "../../../components/buttons/ChatWithUsButton";
import AccessibilityModal from "../Components/AccessibilityModal";
import CartModal from "../Components/CartModal";

export default function ProductPage() {
  const { isMobile, isTablet } = useSelector((state) => state.responsive);
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] =
    useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <div className="product">
      <SideBar />
      <div className="product-content">
        <div className="product-header">
          <button className="back-button" onClick={() => window.history.back()}>
            <span>←</span> Back
          </button>
          <h1>Select attractions</h1>
          <div className="header-actions">
            <button
              className="accessibility-button"
              aria-label="Accessibility options"
              onClick={() => setIsAccessibilityModalOpen(true)}
            >
              <span className="icon">♿</span>
            </button>
            <div className="language-selector">
              <button className="language-button">
                <span className="globe-icon">🌐</span>
                <span>English</span>
                <span className="chevron-down">▼</span>
              </button>
            </div>
            <button
              className="cart-button"
              onClick={() => setIsCartModalOpen(true)}
            >
              View Cart
            </button>
          </div>
        </div>
        <ProductHead />
        <ProductCard />
        {(isMobile || isTablet) && <ProductSoloThumbnail />}
        {(isMobile || isTablet) && <MobSelectorGroup />}

        <AccessibilityModal
          isOpen={isAccessibilityModalOpen}
          onClose={() => setIsAccessibilityModalOpen(false)}
        />
        <CartModal
          isOpen={isCartModalOpen}
          onClose={() => setIsCartModalOpen(false)}
        />
      </div>
    </div>
  );
}
