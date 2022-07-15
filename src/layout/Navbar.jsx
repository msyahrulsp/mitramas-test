import { Link } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineDatabase } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <Flex
      w="fit-content"
      px={4}
      py={3}
      minH="100vh"
      bg="#FFFFFF"
      boxShadow= "4px 0 5px -2px lightgray"
      flexDirection="column"
      flexWrap="wrap"
    >
      <Link to="/">
        LOGO
      </Link>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={10}
        gap={6}
        flexDirection="column"
      >
        <Link to="/">
          <AiOutlineHome />
        </Link>
        <Link to="/data">
          <AiOutlineDatabase />
        </Link>
      </Box>
    </Flex>
  )
}