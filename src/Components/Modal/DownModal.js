import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import "./modal.css";
import { FormBody } from "./FormBody";
import { CloseCircleFilled } from "@ant-design/icons";
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const DownModal = ({ modal, setOpen, page }) => {
  const modalA = {
    visible: {
      y: page.modalY || "50px",
      opacity: 1,
      transition: { delay: 0.1, type: "tween" },
    },
    hidden: { y: "100vh", opacity: 0 },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {modal.open && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="backdrop"
          exit="hidden"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={modalA}
            className="down-modal"
            exit="hidden"
          >
            <FormBody setOpen={setOpen} modal={modal} page={page}></FormBody>
            <div className="close-modal" onClick={() => setOpen(false)}>
              <CloseCircleFilled
                style={{ color: "#FF6363", fontSize: "18px" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownModal;
