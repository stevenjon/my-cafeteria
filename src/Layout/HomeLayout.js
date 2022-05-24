import React from "react";
import Logo from "../assets/logo.png";
const HomeLayout = ({ children }) => {
  return (
    <div className="home">
      <div className="main-area">
        <div className="top-bar">
          <img src={Logo} alt="logo" width={100}></img>
          <h2 style={{ color: "white" }}>My Cafeteria</h2>
        </div>
        <div className="menu">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
