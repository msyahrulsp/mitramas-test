import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Button,
  useToast,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import { putDataAPI } from '../../util/api';

export const EditModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [val, setVal] = useState({
    ...props
  })
  const [stat, setStat] = useState(val.status === true ? '1' : '0');
  
  const toast = useToast();
  const handleSubmit = async () => {
    try {
      if (val.name === "" || val.address === "" || val.country === "" || val.phone_number === "" || val.job_title === "") {
        toast({
          title: "Error",
          description: "Terdapat field yang kosong",
          status: "error",
          isClosable: true,
          position: "top",
        });
        return;
      }
      const payload = {
        ...val,
        status: stat === '1' ? true : false
      }

      await putDataAPI('/customers', payload);

      toast({
        title: "Berhasil",
        description: "Berhasil mengubah profil",
        position: "top",
        status: "success",
      });
      
      setTimeout(function() {
        window.location.reload();
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
    onClose();
  }

  return (
    <>
      <Flex color="green" onClick={onOpen}><FaPencilAlt cursor="pointer" /></Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Edit Data
          </ModalHeader>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nama</FormLabel>
              <Input name="nama" value={val.name} onChange={(e) => setVal({ ...val, name: e.target.value })} />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Alamat</FormLabel>
              <Input name="alamat" value={val.address} onChange={(e) => setVal({ ...val, address: e.target.value })} />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Negara</FormLabel>
              <Input name="negara" value={val.country} onChange={(e) => setVal({ ...val, country: e.target.value })} />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>No. Telp</FormLabel>
              <Input name="negara" value={val.phone_number} onChange={(e) => setVal({ ...val, phone_number: e.target.value })} />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Pekerjaan</FormLabel>
              <Input name="negara" value={val.job_title} onChange={(e) => setVal({ ...val, job_title: e.target.value })} />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Status</FormLabel>
              <RadioGroup onChange={setStat} value={stat}>
                <Stack direction="row">
                  <Radio value='1'>Active</Radio>
                  <Radio value='0'>Inactive</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter gap={4}>
            <Button bg="red" color="#FFFFFF" onClick={onClose}>
              Cancel
            </Button>
            <Button bg="#D4F5E9" color="#888888" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}