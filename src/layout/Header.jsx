import React from 'react';
import { Flex, Text, Box, Avatar } from '@chakra-ui/react';
import { SearchIcon, BellIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const Header = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={5}
      py={3}
    >
      <Box
        display="flex"
        alignContent="center"
      >
        <Text
          opacity="0.5"
          fontSize={{ base: "8px", lg: "md" }}
        >
          Perusahaan <ChevronRightIcon />&nbsp;
        </Text>
        <Text 
          fontWeight="bold"
          fontSize={{ base: "8px", lg: "md" }}
        >
          Mitramas Infosys Global
        </Text>
      </Box>
      <Flex
        gap={9}
        alignItems="center"
      >
        <Flex
          gap={5}
        >
          <SearchIcon />
          <BellIcon />
        </Flex>
        <Flex
          gap={3}
          alignItems="center"
        >
          <Avatar name="John Doe" size={{ base: "xs", lg: "sm" }} />
          <Text
            fontSize={{ base: "8px", lg: "md" }}
          >
            John Doe
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}