import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" />
      <nav className="nav-bar">
        <a href="/shop">Shop</a>
        <a href="/orderReview">Order Review</a>
        <a href="/manageInventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
