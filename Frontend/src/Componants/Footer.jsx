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
    <Box bg="#FFFFFF" _dark={{ bg: "white" }} mt={"20px"}>
      <hr />
    <Stack
      direction={{ base: "column", lg: "row" }}
      w="full"
      justify="space-between"
      mt="25px"
    >
      {/* <Flex justify="center">
        <Image
          src="data:image/jpeg;base64,/9j/4AAQSk+8NnP5CjmO6UCqxX3c/a7MTxua3iIont2Ra+/"
          alt="Company Logo"
          rounded="lg"
          width={{ base: "100px", lg: "150px" }}
          height={{ base: "75px", lg: "100px" }}
          my={{ base: 2, lg: 0 }}
        />
      </Flex> */}
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{ base: "12px", md: "16px" }}
        color="#336193"
        _dark={{ color: "white" }}
        textAlign={{ base: "center", md: "left" }}
        spacing='24px'
        // p={"20px"}
      >
        <Flex justify="start" direction="column" gap="12px" textAlign={"start"}>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Pre-Sale FAQS</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Submit a ticket</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold"  textTransform="uppercase">Refer a Friend</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Services</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">F&Q</Link>
        </Flex>
        <Flex justify="start" direction="column" gap="12px" textAlign={"start"}>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Services</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Products</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Resources</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Contact Us</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Blog</Link>
        </Flex>
      </HStack>
      <HStack
        alignItems="start"
        flex={1}
        justify="space-around"
        fontSize={{ base: "10px", md: "10px" }}
        color="#336193"
        _dark={{ color: "white" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex justify="start" direction="column" gap="12px" textAlign={"start"}>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold"  textTransform="uppercase">Contact us</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Partner Program</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold"  textTransform="uppercase">Refer a Friend</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Support</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Main</Link>
        </Flex>
        <Flex justify="start" direction="column" gap="12px" textAlign={"start"}>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">About Us</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Contact Us</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Resources</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Products</Link>
          <Link fontSize={{lg:"13px",base:"10px"}} fontWeight="bold" textTransform="uppercase">Feedback</Link>
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
    <Text  textAlign="center" mt={"10px"} color="#336193" fontSize="13px" fontWeight="bold" _dark={{ color: "white" }}>
        &copy;Copyright. All rights reserved.
      </Text>
    
   
   
    </VStack>
    <Center >
        
          <Image w={"30px"} m={"20px"} src='https://i.mscwlns.co/mosaic-wellness/image/upload/v1631618167/Man%20Matters/misc/fb_3x.png?tr=w-200'/>
          <Image w={"30px"} m={"20px"} src='https://i.mscwlns.co/mosaic-wellness/image/upload/v1631618167/Man%20Matters/misc/insta_3x.png?tr=w-200'/>
          <Image w={"30px"} m={"20px"} src='https://i.mscwlns.co/mosaic-wellness/image/upload/v1631618167/Man%20Matters/misc/twitter_3x.png?tr=w-200'/>
          <Image w={"30px"} m={"20px"} src='https://i.mscwlns.co/mosaic-wellness/image/upload/v1631618166/Man%20Matters/misc/yt_3x.png?tr=w-200'/>
         
        
      </Center>
  </Box>
  )
}