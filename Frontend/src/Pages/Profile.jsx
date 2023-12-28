import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/actions";

export const Profile = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch()
  const { name, email, mobile } = useSelector((store) => store.AuthReducer);
  const { token } = useSelector((store) => store.AuthReducer);

  const config = {
    headers: {
      Authorization: token,
    },
  };

  function getUserData() {
    axios.get(`http://localhost:8080/appointment`, config).then((res) => {
      setUserData(res.data.data);
    });
  }

  useEffect(() => {
    getUserData();
  }, []);


  function handleLogout(){
    dispatch(logout());
  }

  return (
    <div>
      <Box
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
          <Center onClick={handleLogout}>Logout</Center>
        </Box>
      </Box>
      <Box width={{ base: "", lg: "90vw" }} m="auto">
        <Heading size="md" mt="20px" color="#3b3b3b">
          Your Previous Schedule Appoinment
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap="15px"
          mt="20px"
        >
          {userData?.map((ele) => {
            return (
              <Box
                position="relative"
                p="10px"
                backgroundColor="#f28d09d2"
                color="white"
                borderRadius="10px"
                height={{ base: "", lg: "30vh" }}
              >
                <Text>Issue Related: {ele.title}</Text>
                <Text>Date: {ele.date}</Text>
                <Text>Time: {ele.time}</Text>
                <Center> <Box mt="60px" fontWeight="500" p="5px 20px" backgroundColor={"white"} borderRadius="20px" color="#22548A">You talked with Dr.</Box></Center>
                <Box
                  position="absolute"
                  zIndex="10"
                  height={{ base: "", lg: "20vh" }}
                  width={{ base: "", lg: "8vw" }}
                  left="290px"
                  bottom="65px"
                >
                  <Image width="100%" height="100%" src="https://i.mscwlns.co/media/man-matters/Consult/DA/ConsultCardDoctorImageDesktop_HRCEiaVDF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666844428607" />
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
