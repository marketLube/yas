import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import ChatWithUsButton from "../../components/buttons/ChatWithUsButton";
import dash from "../../assets/icons/dash.svg"
import beach from "../../assets/icons/beach.svg"
import dropbox from "../../assets/icons/dropbox.svg"
import house from "../../assets/icons/house.svg"
import chef from "../../assets/icons/chef.svg"
import camera from "../../assets/icons/cam.svg"
import shop from "../../assets/icons/shop.svg"





export default function SideBar() {
  return (
    <nav className="side-bar normal-title-txt">
      {/* <Logo /> */}
      <ul className="side-bar-list">
        <NavLink to="/product">
          <li className="side-bar-list-item">
            <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={dash} alt="All" />
            </div>
            <div className="item-text">All</div>
          </li>
        </NavLink>
        <NavLink to="/product">
          <li className="side-bar-list-item">
             <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={beach} alt="Top Attractions" />
            </div>
            <div className="item-text">Top Attractions</div>
          </li>
        </NavLink>
        <NavLink to="/product">
          <li className="side-bar-list-item">
             <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={dropbox} alt="Packages" />
            </div>
            <div className="item-text">Packages</div>
          </li>
        </NavLink>
        <NavLink to="/product">
          <li className="side-bar-list-item">
             <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={house} alt="Hotels" />
            </div>
            <div className="item-text">Hotels</div>
          </li>
        </NavLink>
        <NavLink to="/product">
          <li className="side-bar-list-item">
             <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={chef} alt="Dining" />
            </div>
            <div className="item-text">Dining</div>
          </li>
        </NavLink>
        <NavLink to="/product">
          <li className="side-bar-list-item">
             <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={camera} alt="Live" />
            </div>
            <div className="item-text">Live</div>
          </li>
        </NavLink>
        <NavLink to="/product">
          <li className="side-bar-list-item">
             <div className="item-icon">
              {/* Add your icon img tag here */}
              <img src={shop} alt="Shopping" />
            </div>
            <div className="item-text">Shopping</div>
          </li>
        </NavLink>
      </ul>
      <div className="side-bar-bottom">
        <ChatWithUsButton />
      </div>
    </nav>
  );
}
