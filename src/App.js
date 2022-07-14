import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { routes } from './util/route';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './component/Navbar';

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

const AnimatedRoute = () => {
  return (
    <AnimatePresence exitBeforeEnter>
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
        <Routes>
          {routes.map((route) => {
            return (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
            );
          })}
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Flex
        // TODO cek size
        direction={{ base: 'column', md: 'row' }}
        h="100%"
      >
        <Navbar />
        <AnimatedRoute />
      </Flex>
    </Router>
  );
}

export default App;
