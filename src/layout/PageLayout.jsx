import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

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

export const PageLayout = ({ children }) => {
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
      <Box
        px={5}
        pt={4}
        pb={7}
      >
        {children}
      </Box>
    </motion.div>
  )
}