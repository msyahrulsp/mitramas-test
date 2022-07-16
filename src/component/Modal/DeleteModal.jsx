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
  Button,
  useToast,
  Text
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { deleteDataAPI } from '../../util/api';

export const DeleteModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const toast = useToast();
  const handleSubmit = async () => {
    try {
      const payload = {
        id: props.id
      }

      await deleteDataAPI('/customers', payload);

      toast({
        title: "Berhasil",
        description: "Berhasil menghapus data",
        position: "top",
        status: "success",
      });
      
      setTimeout(function() {
        window.location.reload();
      }, 1500)
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
      <Flex color="red" onClick={onOpen}><FaTrashAlt cursor="pointer" /></Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Konfirmasi Hapus Data
          </ModalHeader>
          <ModalBody pb={6}>
            <Text>
              Anda yakin ingin menghapus data ini?
            </Text>
          </ModalBody>
          <ModalFooter gap={4}>
            <Button bg="#D4F5E9" color="#888888" onClick={onClose}>
              Cancel
            </Button>
            <Button bg="red" color="#FFFFFF" onClick={handleSubmit}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}