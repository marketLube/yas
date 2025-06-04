import React from "react";
import { Outlet } from "react-router-dom";
import { useResponsive } from "./hooks/responsiveHook/useResponsive";
import MobileLanding from "./pages/Home/Components/MobileView/MobileLanding";
import Attractions from "./pages/Home/Components/MobileView/Attractions";
import AttractionDetailModal from "./pages/Home/Components/MobileView/AttractionDetailModal";
export default function App() {
  useResponsive();

  return (
    <div>
      <Outlet />

      <Attractions />
      <AttractionDetailModal />
    </div>
  );
}
