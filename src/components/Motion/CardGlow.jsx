import React from "react";
import { motion } from "framer-motion";

const CardGlow = ({ children }) => {
  const wrapperVariant = {
    hover: {
      y: -10,
    },
    initial: { y: 0 },
    transition: {
      type: "spring",
      ease: "easeOut",
      duration: 0.5,
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      opacity: 0.2,
    },
  };

  return (
    <motion.div
      className="relative"
      initial="initial"
      whileHover="hover"
      variants={wrapperVariant}
    >
      <motion.div
        variants={glowVariants}
        transition={{
          ease: "easeOut",
          delay: 0.15,
        }}
        className="absolute top-0 w-full h-full blur rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600"
      ></motion.div>
      <motion.span
        variants={cardVariants}
        transition={{
          ease: "easeOut",
          delay: 0.15,
          duration: 0.5,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

export default CardGlow;
