import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { name, email, mobile } = useSelector((store) => store.AuthReducer);

  return (
    <div>
      <Box
        border="1px solid"
        justifyContent="space-around"
        alignItems="center"
        height={{ base: "", lg: "25vh" }}
        backgroundColor="#E1EFF8"
        display={{ base: "block", lg: "flex" }}
      >
        <Box width={{ base: "80vw", lg: "30%" }} m={{ base: "auto", lg: "0" }}>
          <Heading mb="20px" letterSpacing="1px">
            {name}
          </Heading>
          <Text
            p="0px 5px 0px 0px"
            color="#6C6C99"
            display="inline"
            borderRight="1px solid"
          >
            {mobile}
          </Text>
          <Text m="5px" display="inline" color="#6C6C99">
            {email}
          </Text>
        </Box>
        <Box
          borderRadius={10}
          backgroundColor="black"
          color="white"
          fontWeight="500"
          p="10px 70px"
          width={{ base: "80vw", lg: "15vw" }}
          m={{ base: "auto", lg: "0px" }}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Center>Logout</Center>
        </Box>
      </Box>
      <Box></Box>
    </div>
  );
};
