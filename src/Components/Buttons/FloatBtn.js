import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { motion } from "framer-motion";
const FloatBtn = ({ onClick }) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 100 }}
      onClick={onClick}
      style={style}
    >
      <PlusOutlined style={{ fontSize: "20px", color: "wheat" }} />
    </motion.div>
  );
};

const style = {
  position: "fixed",
  width: "40px",
  height: "40px",
  bottom: "55px",
  display: "flex",
  right: "20px",
  backgroundColor: "teal",
  color: "#FFF",
  borderRadius: "50%",
  boxShadow: "2px 2px 3px #999",
  justifyContent: "center",
  alignItems: "center",
};

export default FloatBtn;
