import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { routes } from './util/route';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './layout/Navbar';
import { Header } from './layout/Header';

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
        direction={{ base: 'column', lg: 'row' }}
        bg="#D4F5E9"
      >
        <Navbar />
        <Flex
          direction="column"
          w="100%"
        >
          <Header />
          <AnimatedRoute />
        </Flex>
      </Flex>
    </Router>
  );
}

export default App;
