import { Flex, Text } from '@chakra-ui/react';

const data = [
  {
    activity: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
    date: "Hari ini, 06:00",
  },
  {
    activity: "Bintang baru saja menghapus sublokasi KCP Tebst 4 dari induk Kantor Cabang Tebet",
    date: "Kemaren, 17:32",
  },
  {
    activity: "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
    date: "Kemaren, 17:32",
  },
]

export const AktivitasCard = () => {
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
      <Text fontSize="lg" fontWeight="bold">
        Aktivitas
      </Text>
      <Flex flexDirection="column" gap={4}>
        {data.map((item) => {
          return (
            <Flex flexDirection="column" gap={1}>
              <Text>
                {item.activity}
              </Text>
              <Text opacity="0.5">
                {item.date}
              </Text>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}