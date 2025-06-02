import React from "react";
import { NavLink } from "react-router";
import Logo from "../../components/Logo/Logo";
import ChatWithUsButton from "../../components/buttons/ChatWithUsButton";

export default function SideBar() {
  return (
    <nav className="side-bar normal-title-txt">
      {/* <Logo /> */}
      <ul className="side-bar-list">
        <NavLink to="/">
          <li className="side-bar-list-item">All</li>
        </NavLink>
        <NavLink to="/">
          <li className="side-bar-list-item">Top Attractions</li>
        </NavLink>
        <NavLink to="/">
          <li className="side-bar-list-item">Packages</li>
        </NavLink>
        <NavLink to="/">
          <li className="side-bar-list-item">Hotels</li>
        </NavLink>
        <NavLink to="/">
          <li className="side-bar-list-item">Dining</li>
        </NavLink>
        <NavLink to="/">
          <li className="side-bar-list-item">Live</li>
        </NavLink>
        <NavLink to="/">
          <li className="side-bar-list-item">Shopping</li>
        </NavLink>
      </ul>
      <div className="side-bar-bottom">
        <ChatWithUsButton />
      </div>
    </nav>
  );
}
