import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ back, type }) => {
  return (
    <Link to={back.to} style={{ color: type === "bg" ? "wheat" : "teal" }}>
      <div
        className="back-btn"
        style={
          type === "bg" ? { position: "static" } : { position: "absolute" }
        }
      >
        <ArrowLeftOutlined />
        {back.title}
      </div>
    </Link>
  );
};

export default BackButton;
