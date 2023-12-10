import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { useSelector } from "react-redux"

export const Login=()=>{

  const {isAuth,isError,token}=useSelector((store)=>{
    return {
        isAuth :store.AuthReducer.isAuth,
        isError : store.AuthReducer.isError
    ,    token : store.AuthReducer.token
    }
})

    const { isOpen, onOpen, onClose } = useDisclosure()
          
            const initialRef = useRef(null)
            const finalRef = useRef(null)
    return(

        <>
            
                <Button colorScheme="blue" onClick={onOpen}>Login</Button>
                
          
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Login your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

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
                        Login
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </>
    )
}