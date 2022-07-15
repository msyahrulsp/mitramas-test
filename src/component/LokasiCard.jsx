import { Flex, Text } from '@chakra-ui/react';
import { BiBuildingHouse, BiWrench, BiBuilding } from 'react-icons/bi';

const data = [
  {
    icon: BiBuildingHouse,
    num: 20,
    legend: "Induk",
    bg: "#42934a",
  },
  {
    icon: BiWrench,
    num: 3,
    legend: "Sub Lokasi Level 1",
    bg: "linear-gradient(126.63deg, #42934a 14.17%, #6dbd74 71.32%)",
  },
  {
    icon: BiBuilding,
    num: 1,
    legend: "Sub Lokasi Level 2",
    bg: "#6dbd74",
  },
]

export const LokasiCard = () => {
  return (
    <Flex
      px={6}
      py={5}
      flexDirection="column"
      gap={2}
      bg="#FFFFFF"
      boxShadow= "4px 5px 5px -2px lightgray"
      borderRadius="lg"
      flexWrap="wrap"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
      >
        <Text fontWeight="bold" fontSize="lg">
          Lokasi
        </Text>
        <Text color="green">
          Lihat semua
        </Text>
      </Flex>
      <Flex mt={2} gap={4} flexDirection="row" justifyContent="space-between">
        {data.map((item) => {
          return (
            <Flex
              bg={item.bg}
              px={3}
              py={3}
              justifyContent="space-between"
              borderRadius="lg"
              color="#FFFFFF"
              alignItems="center"
              w="100%"
              fontSize="md"
            >
              <item.icon size={40} />
              <Flex justifyContent="flex-end" flexDirection="column">
                <Text fontWeight="bold" fontSize="2xl" textAlign="right">
                  {item.num}
                </Text>
                <Text opacity="0.5">
                  {item.legend}
                </Text>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}