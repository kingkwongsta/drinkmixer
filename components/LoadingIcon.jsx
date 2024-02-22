import React from "react";
import { motion } from "framer-motion";

const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-slate-100"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          opacity: { duration: 1 },
        }}
      />
    </div>
  );
};

export default LoadingIcon;
