import React from "react";
import { useSelector } from "react-redux";
import LandingPage from "./Home/LandingPage";
import MobileLanding from "./Home/Components/MobileView/MobileLanding";

export default function ResponsiveLanding() {
  const { isMobile, isTablet } = useSelector((state) => state.responsive);

  return (
    <div className="responsive-landing">
      {isMobile || isTablet ? <MobileLanding /> : <LandingPage />}
    </div>
  );
}
