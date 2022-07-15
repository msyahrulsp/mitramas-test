import React from 'react';
import { Flex, Text, Box, Avatar } from '@chakra-ui/react';
import { SearchIcon, BellIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const Header = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={10}
      py={3}
    >
      <Box
        display="flex"
        alignContent="center"
      >
        <Text
          color="lightslategray"
        >
          Perusahaan <ChevronRightIcon />&nbsp;
        </Text>
        <Text fontWeight="bold">
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
          <Avatar name="John Doe" size="sm" />
          John Doe
        </Flex>
      </Flex>
    </Flex>
  )
}