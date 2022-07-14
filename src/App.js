import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { routes } from './util/route';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './component/Navbar';

const AnimatedRoute = () => {
  return (
    <AnimatePresence exitBeforeEnter>
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
        bg="#F4FAF5"
      >
        <Navbar />
        <AnimatedRoute />
      </Flex>
    </Router>
  );
}

export default App;
