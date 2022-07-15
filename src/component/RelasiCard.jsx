import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineShareAlt } from 'react-icons/ai';

const data = [
  {
    number: 20,
    legend: "Memiliki",
  },
  {
    number: 108,
    legend: "Menggunakan",
  },
  {
    number: 67,
    legend: "Meminjam",
  },
]

export const RelasiCard = () => {
  return (
    <Flex
      px={6}
      py={5}
      flexDirection="column"
      bg="#FFFFFF"
      boxShadow= "4px 5px 5px -2px lightgray"
      borderRadius="lg"
      gap={3}
      flexWrap="wrap"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        mb={4}
      >
        <Text fontWeight="bold" fontSize="lg">
          Relasi
        </Text>
        <Text color="green">
          Lihat semua
        </Text>
      </Flex>
      {data.map((item, idx) => {
        return (
          <Flex key={idx} flexDirection="row" gap={4} alignItems="center">
            <AiOutlineShareAlt size={30} />
            <Flex flexDirection="column">
              <Text fontSize="xl" fontWeight="bold">
                {item.number}
              </Text>
              <Text opacity="0.5">
                {item.legend}
              </Text>
            </Flex>
          </Flex> 
        )
      })}
    </Flex>
  )
}