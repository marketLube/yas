import React from "react";
import { Outlet } from "react-router";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Home/ProductPage/ProductPage";
import { useResponsive } from "./hooks/responsiveHook/useResponsive";
import MobileHeader from "./pages/Home/Components/MobileView/MobileHeader";
import MobileTop from "./pages/Home/Components/MobileView/MobileTop";
import Attractions from "./pages/Home/Components/MobileView/Attractions";
import AttractionDetailModal from "./pages/Home/Components/MobileView/AttractionDetailModal";
// import BookingModal from "./pages/Home/Components/MobileView/BookingModal";
export default function App() {
  useResponsive();

  return (
    <div>
      <Home>{/* <ProductPage /> */}</Home>
      <Outlet />
      {/* <Footer /> */}
      <MobileHeader />
      <MobileTop />
      <Attractions />
      <AttractionDetailModal />
      {/* <BookingModal /> */}
    </div>
  );
}
