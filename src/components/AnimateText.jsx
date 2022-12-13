import React from "react";
import { motion } from "framer-motion";

const AnimateText = ({ p }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {p.map((letter, i) => (
        <motion.span variants={item} key={i}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateText;
