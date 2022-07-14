import React from 'react';
import { motion } from 'framer-motion';

const pageAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const PageAnimation = ({ children }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={
        {
          duration: 0.3,
        }
      }
    >
      {children}
    </motion.div>
  )
}