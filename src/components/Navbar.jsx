import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about-us">About us</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
