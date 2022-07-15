import { Link } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineDatabase } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <Flex
      w="fit-content"
      px={4}
      py={3}
      bg="#FFFFFF"
      boxShadow= "4px 5px 5px -2px lightgray"
      flexDirection="column"
      flexWrap="wrap"
      borderRadius="lg"
    >
      <Link to="/">
        LOGO
      </Link>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={16}
        gap={10}
        flexDirection="column"
        pb={10}
      >
        <Link to="/">
          <AiOutlineHome size={20} />
        </Link>
        <Link to="/data">
          <AiOutlineDatabase size={20} />
        </Link>
      </Box>
    </Flex>
  )
}