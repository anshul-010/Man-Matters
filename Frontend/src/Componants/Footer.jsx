import React from 'react'
import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider,Center,
    Icon,
  } from "@chakra-ui/react";
  
  import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
  import { GrLinkedinOption } from "react-icons/gr";

export const Footer = () => {
  return (
    <Box bg="blue.600" _dark={{ bg: "white" }}>
    <Stack
      direction={{ base: "column", lg: "row" }}
      w="full"
      justify="space-between"
      
    >
      <Flex justify="center">
        <Image
          src="data:image/jpeg;base64,/9j/4AAQSk+8NnP5CjmO6UCqxX3c/a7MTxua3iIont2Ra+/"
          alt="Company Logo"
          rounded="lg"
          width={{ base: "100px", lg: "150px" }}
          height={{ base: "75px", lg: "100px" }}
          my={{ base: 2, lg: 0 }}
        />
      </Flex>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{ base: "12px", md: "16px" }}
        color="white"
        _dark={{ color: "white" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">Pre-Sale FAQS</Link>
          <Link textTransform="uppercase">Submit a ticket</Link>
          <Link textTransform="uppercase">Refer a Friend</Link>
          <Link textTransform="uppercase">Partner Program</Link>
        </Flex>
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">Services</Link>
          <Link textTransform="uppercase">Products</Link>
          <Link textTransform="uppercase">Recognition</Link>
          <Link textTransform="uppercase">Blog</Link>
        </Flex>
      </HStack>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{ base: "12px", md: "16px" }}
        color="white"
        _dark={{ color: "white" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">Contact us</Link>
          <Link textTransform="uppercase">F&Q</Link>
          <Link textTransform="uppercase">Support</Link>
          <Link textTransform="uppercase">Main</Link>
        </Flex>
        <Flex justify="start" direction="column">
          <Link textTransform="uppercase">About Us</Link>
          <Link textTransform="uppercase">Contact Us</Link>
          <Link textTransform="uppercase">Resources</Link>
          <Link textTransform="uppercase">Feedback</Link>
        </Flex>
    
        
      </HStack>
    </Stack>
    <Divider
      w="95%"
      mx="auto"
      color="gray.600"
      _dark={{ color: "#F9FAFB" }}
      h="3.5px"
    />
    <VStack py={3}>
    
    <Center mt="10px">
        <HStack fontSize={"30px"} spacing={"30px"}>
          <BsFacebook />
          <BsTwitter />
          <BsPinterest />
          <GrLinkedinOption />
        </HStack>
      </Center>
      <Text textAlign="center" color="white" fontSize="smaller" _dark={{ color: "white" }}>
        &copy;Copyright. All rights reserved.
      </Text>
    </VStack>
  </Box>
  )
}