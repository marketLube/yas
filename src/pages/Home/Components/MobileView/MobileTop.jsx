import React from "react";

import allIcon from "../../../../assets/images/header1.svg";
import attractionsIcon from "../../../../assets/images/header2.svg";
import packagesIcon from "../../../../assets/images/header3.svg";
import hotelsIcon from "../../../../assets/images/header4.svg";
import diningIcon from "../../../../assets/images/header5.svg";
import searchIcon from "../../../../assets/images/searchicon.svg";

function MobileTop() {
  return (
    <div>
      <div className="mobile-top">
        <div className="mobile-top__item">
          <img src={allIcon} alt="All" className="mobile-top__icon" />
          <span>All</span>
        </div>
        <div className="mobile-top__item mobile-top__item--active">
          <img
            src={attractionsIcon}
            alt="Attractions"
            className="mobile-top__icon"
          />
          <span>Attractions</span>
          <div className="mobile-top__underline"></div>
        </div>
        <div className="mobile-top__item">
          <img src={packagesIcon} alt="Packages" className="mobile-top__icon" />
          <span>Packages</span>
        </div>
        <div className="mobile-top__item">
          <img src={hotelsIcon} alt="Hotels" className="mobile-top__icon" />
          <span>Hotels</span>
        </div>
        <div className="mobile-top__item">
          <img src={diningIcon} alt="Dining" className="mobile-top__icon" />
          <span>Dining</span>
        </div>
      </div>

      <div className="mobile-top-search-section">
        <h2 className="mobile-top-search-section__title">Select attractions</h2>
        <div className="mobile-top-search-section__searchbar">
          <input
            type="text"
            placeholder='Search Attractions " Ferrari World"'
          />
          <button>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <div className="mobile-top-search-section__filters">
          <button className="mobile-top-search-section__filter-btn">
            Sort by <span className="chevron">&#9662;</span>
          </button>
          <button className="mobile-top-search-section__filter-btn">
            Filter by <span className="chevron">&#9662;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileTop;
