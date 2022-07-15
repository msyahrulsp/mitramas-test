import { Link } from 'react-router-dom';
import { Flex, Box, Avatar } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineDatabase } from 'react-icons/ai';

export const Navbar = () => {
  return (
    <Flex
      w={{ base: "100%", lg: "fit-content" }}
      px={{ base: 10, lg: 4 }}
      py={3}
      bg="#FFFFFF"
      boxShadow= "4px 5px 5px -2px lightgray"
      flexDirection={{ base: "row", lg: "column" }}
      justifyContent={{ base: "space-between", lg: "flex-start" }}
      alignItems="center"
      flexWrap="wrap"
      borderRightRadius={{ base: "none", lg: "lg" }}
      borderBottomRadius={{ base: "lg", lg: "none" }}
    >
      <Link to="/">
        <Avatar
          size={{ base: "sm", lg: "md" }}
          bg="#FFFFFF"
          src={require('../image/logo.png')}
        />
      </Link>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={{ base: 0, lg: 16 }}
        gap={{ base: 5, lg: 10 }}
        flexDirection={{base: "row", lg: "column" }}
        pb={{ base: 0, lg: 10 }}
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