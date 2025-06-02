import React from "react";
import ResponsiveLanding from "../ResponsiveLanding";
// import MobileLanding from "./Components/MobileView/MobileLanding";
export default function Home({ children }) {
  return (
    <div className="home">
      <ResponsiveLanding />
      {/* <MobileLanding /> */}
      {children}
    </div>
  );
}
