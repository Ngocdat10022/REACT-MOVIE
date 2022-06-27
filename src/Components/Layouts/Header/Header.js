import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header flex items-center justify-center gap-5 h-[50px]">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : null)}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-red-500" : null)}
        >
          Movies
        </NavLink>
      </header>
    </>
  );
};

export default Header;
