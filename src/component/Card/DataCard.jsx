import { Flex, Avatar, Text, Container } from '@chakra-ui/react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { EditModal } from '../Modal/EditModal';

export const DataCard = (props) => {
  return (
    <Container
      display="flex"
      direction="row"
      gap={5}
      bg="#FFFFFF"
      borderRadius="lg"
      p={4}
      boxShadow= "4px 5px 5px -2px lightgray"
      alignItems="center"
      mt={4}
      maxW="70ch"
    >
      <Avatar name={props.name} size="lg" />
      <Flex direction="column" flexWrap="wrap" w="100%">
        <Flex direction="row" justifyContent="space-between">
          <Text
            whitespace="pre-line"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            {props.name}
          </Text>
          <Flex gap={4} alignItems="center">
            <EditModal {...props} />
            <FaTrashAlt color="red" />
          </Flex>
        </Flex>
        <Text opacity="0.8" whitespace="pre-line">{props.address}</Text>
        <Text opacity="0.7" whitespace="pre-line">{props.country}</Text>
        <Text opacity="0.5" whitespace="pre-line">{props.job_title}</Text>
      </Flex>
    </Container>
  )
}