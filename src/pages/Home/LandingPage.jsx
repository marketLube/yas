import React from "react";

import landingImage from "../../assets/images/MainImg.png";
import YellowBtn from "../../components/buttons/YellowBtn";

export default function LandingPage() {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${landingImage})`,
      }}
    >
      <div className="landing-page-body">
        <div className="landing-page-body__title">
          <h1 className="landing-page__title">YAS ISLAND</h1>
          <h1 className="landing-page__title">ABU DHABI</h1>
          <div className="landing-page__subtitle">And Let Me Tell You</div>
        </div>

        <div className="landing-page__bottom">
          <div className="landing-page__subtitle">Choose Your Language</div>
          <YellowBtn>Arabic</YellowBtn>
          <YellowBtn>English</YellowBtn>
        </div>
      </div>
    </div>
  );
}
