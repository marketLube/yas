import React from "react";
import ProductHead from "./ProductHead/ProductHead";
import { useSelector } from "react-redux";
import ProductSoloThumbnail from "./ProductSoloThumnail/ProductSoloThumbnail";
import MobSelectorGroup from "./MobSelectorGroup/MobSelectorGroup";
import SideBar from "../../../layouts/SideBar/SideBar";
import ChatWithUsButton from "../../../components/buttons/ChatWithUsButton";

export default function ProductPage() {
  const { isMobile, isTablet } = useSelector((state) => state.responsive);

  return (
    <div className="product">
      <SideBar />
      <div className="product-content">
        <ProductHead />
        {(isMobile || isTablet) && <ProductSoloThumbnail />}
        {(isMobile || isTablet) && <MobSelectorGroup />}
      </div>
    </div>
  );
}
