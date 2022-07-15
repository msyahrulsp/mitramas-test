import { Flex, Text, Button, Box } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const data = [
  {
    bg: "linear-gradient(126.63deg, #f8dc00 14.17%, #81a20b 71.32%)",
    title: "Bank KB Bukopin",
    people: "**** 0875 - Yusron Taufiq",
    currency: "IDR",
  },
  {
    bg: "linear-gradient(30.63deg, #2596b3 14.17%, #68d1ea 71.32%)",
    title: "Citibank, NA",
    people: "**** 5525 - Si Tampan",
    currency: "USD",
  },
]

export const BankCard = () => {
  return (
    <Flex
      px={6}
      py={5}
      flexDirection="column"
      bg="#FFFFFF"
      boxShadow= "4px 5px 5px -2px lightgray"
      borderRadius="lg"
      gap={4}
      flexWrap="wrap"
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="bold" fontSize="lg">
          Akun Bank
        </Text>
        <Button
          bg="#35763b"
          color="#FFFFFF"
          px={5}
          size={{ base: "xs", lg: "md" }}
        >
          <AiOutlinePlus/>&nbsp;Tambah Akun Bank
        </Button>
      </Flex>
      {data.map((item) => {
        return (
          <Flex flexDirection="row" gap={5}>
            <Box
              h={24}
              w={32}
              bg={item.bg}
              borderRadius="lg"
              alignSelf="center"
            >
              <Text
                display="flex"
                justifyContent="flex-end"
                fontSize="md"
                fontWeight="bold"
                color="#FFFFFF"
                mr={2}
                mt={16}
              >
                VISA
              </Text>
            </Box>
            <Flex flexDirection="column" w="100%">
              <Flex flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold">
                  {item.title}
                </Text>
                <Flex alignItems="center" gap={4}>
                  <FaPencilAlt color="green" />
                  <FaTrashAlt color="red" />
                </Flex>
              </Flex>
              <Text mt={8} opacity="0.5">
                {item.people}
              </Text>
              <Text opacity="0.5">
                {item.currency}
              </Text>
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}