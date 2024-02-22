import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-icon"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Loading;
