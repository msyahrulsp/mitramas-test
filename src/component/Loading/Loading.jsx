import { Flex, Spinner, Text } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Spinner speed="0.7s" size="lg" />
      <Text mt={2}>Loading...</Text>
    </Flex>
  )
}