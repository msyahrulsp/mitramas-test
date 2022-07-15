import { Flex, Image, Avatar, Text, Container, Switch } from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone, AiOutlineGlobal } from 'react-icons/ai';

const util = [
  {
    title: "Singkatan",
    value: "MIG",
  },
  {
    title: "Alamat Perusahaan",
    value: "Jl. Tebet Raya No.42, Jakarta Selatan",
  },
  {
    title: "Penganggung Jawab (PIC)",
    value: "John Doe",
  },
  {
    title: "Tanggal PKP",
    value: "03 Maret 2021",
  }
]

const util2 = [
  {
    title: "E-mail",
    value: "mig@mitrasolusi.group",
    icon: AiOutlineMail,
    isUnderLine: true,
  },
  {
    title: "No. Telp",
    value: "021-5678-1234",
    icon: AiOutlinePhone,
    isUnderLine: false,
  },
  {
    title: "Situs Web",
    value: "mitramas.com",
    icon: AiOutlineGlobal,
    isUnderLine: true,
  },
]

export const OverviewCard = () => {
  return (
    <Flex
      flexDirection="column"
      flexWrap="wrap"
      borderRadius="lg"
      bg="#FFFFFF"
      pb={7}
      alignItems="center"
      alignSelf={{ base: "center", lg: "inherit" }}
      fontSize="xs"
      maxW={{ base: "50ch", lg: "60ch" }}
      boxShadow= "4px 5px 5px -2px lightgray"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        pb="9ch"
      >
        <Image
          src={require('../../image/view.jpg')}
          alt="logo" 
          borderTopRadius="lg"
          maxW={{ base: "50ch", lg: "60ch" }}
        />
        <Avatar
          src={require('../../image/logo.png')}
          size="xl"
          bg="#FFFFFF"
          top={{ base: "13ch", lg: "12ch" }}
          position="absolute"
        />
      </Flex>
      <Container px={7}>
        <Flex gap={1} flexDirection="column" textAlign="center">
          <Text fontWeight="bold" fontSize="lg">
            Mitramas Infosys Global
          </Text>
          <Text color="gray">
            Layanan IT
          </Text>
          <Flex
            color="green"
            flexDirection="row"
            gap={4}
            alignItems="center"
            justifyContent="center"
            mt={3}
          >
            <FaPencilAlt />
            <Text>
              Sunting Profil
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt={8}
          color="gray"
          alignSelf="flex-start"
          flexDirection="column"
          gap={2}
        >
          <Flex gap={1} flexDirection="inherit">
            <Text>
              Status Perusahaan
            </Text>
            <Flex justifyContent="space-between">
              <Text fontWeight="bold" color="green">
                Aktif
              </Text>
              <Switch isChecked colorScheme="green" />
            </Flex>
          </Flex>
          {util.map(({ title, value }, idx) => {
            return (
              <Flex gap={1} key={idx} flexDirection="inherit">
                <Text>
                  {title}
                </Text>
                <Text color="black">
                  {value}
                </Text>
              </Flex>
            )
          })}
          {util2.map((item, idx) => {
            return (
              <Flex gap={1} key={idx} flexDirection="inherit">
                <Text>
                  {item.title}
                </Text>
                <Flex flexDirection="row" gap={2} alignItems="center" color="green">
                  <item.icon />
                  <Text
                    textDecoration={item.isUnderLine ? "underline" : "none"}
                  >
                    {item.value}
                  </Text>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Container>
    </Flex>
  )
}