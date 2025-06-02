import React from "react";
import { Outlet } from "react-router";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Home/ProductPage/ProductPage";
import { useResponsive } from "./hooks/responsiveHook/useResponsive";
import Header from "./layouts/Header/Header";

export default function App() {
  useResponsive();

  return (
    <div>
      <Header />
      <Home>
        <ProductPage />
      </Home>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
