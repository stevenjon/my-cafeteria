import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
const MenuItem = ({ to, title, icon }) => {
  return (
    <Link style={{ height: "80px" }} to={to}>
      <div className="menu-item ripple">
        <span style={{ marginBottom: "2px" }}>{icon}</span>
        <span style={{ lineHeight: "1" }}>{title}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
