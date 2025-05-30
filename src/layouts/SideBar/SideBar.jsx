import React from "react";
import { NavLink } from "react-router";
import Logo from "../../components/Logo/Logo";
import ChatWithUsButton from "../../components/buttons/ChatWithUsButton";

export default function SideBar() {
  return (
    <nav className="side-bar normal-title-txt">
      <Logo />
      <ul className="side-bar-list">
        <NavLink to="/" className="side-bar-list-item">
          <li>All</li>
        </NavLink>
        <NavLink to="/" className="side-bar-list-item">
          <li>Top Attractions</li>
        </NavLink>
        <NavLink to="/" className="side-bar-list-item">
          <li>Packages</li>
        </NavLink>
        <NavLink to="/" className="side-bar-list-item">
          <li>Hotels</li>
        </NavLink>
        <NavLink to="/" className="side-bar-list-item">
          <li>Dining</li>
        </NavLink>
        <NavLink to="/" className="side-bar-list-item">
          <li>Live</li>
        </NavLink>
        <NavLink to="/" className="side-bar-list-item">
          <li>Shopping</li>
        </NavLink>
      </ul>
      <div className="side-bar-bottom">
        <ChatWithUsButton />
      </div>
    </nav>
  );
}
