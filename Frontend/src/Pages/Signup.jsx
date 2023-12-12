import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"

export const Signup=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
          
            const initialRef = useRef(null)
            const finalRef = useRef(null)
    return(

        <>
            
                <Button colorScheme="blue" onClick={onOpen}>Sign Up</Button>
          
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input ref={initialRef} placeholder='First Name' />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Last Name</FormLabel>
                        <Input ref={initialRef} placeholder='Last Name' />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Mobile No.</FormLabel>
                        <Input ref={initialRef} placeholder='Mobile no.' />
                      </FormControl>
                    
                      <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' />
                      </FormControl>
                   
                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Password' />
                      </FormControl>
                    </ModalBody>
          
                    <ModalFooter>
                      <Button colorScheme='blue' mr={3}>
                        Register
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
    )
}