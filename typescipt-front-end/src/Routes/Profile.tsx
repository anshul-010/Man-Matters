import { GetUserDetails } from "../Redux/AuthReducer/action";
import { logout } from "../Redux/AuthReducer/action";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Center, Grid, Heading, Image, Text } from "@chakra-ui/react";

export const Profile = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [userLoginInfo, setUserLoginInfo] = useState({
    userName: "",
    email: "",
    mobile: "",
  });

  function getUserData() {
    axios
      .get(`${API_URL}/appointment`, {
        headers: {
          Authorization: GetUserDetails().token,
        },
      })
      .then((res) => {
        setUserData(res.data.data);
      });
  }

  useEffect(() => {
    getUserData();
    const { userName, email, mobile } = GetUserDetails(); // This function gets user login details from LS
    setUserLoginInfo({ userName, email, mobile });
  }, []);

  function handleLogout() {
    logout(dispatch);
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
            {userLoginInfo?.userName}
          </Heading>
          <Text
            p="0px 5px 0px 0px"
            color="#6C6C99"
            display="inline"
            borderRight="1px solid"
          >
            {userLoginInfo?.mobile}
          </Text>
          <Text m="5px" display="inline" color="#6C6C99">
            {userLoginInfo?.email}
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
          {userData?.map((ele: any) => {
            return (
              <Box
                position="relative"
                p="10px"
                backgroundColor="#b84440d8"
                color="white"
                borderRadius="10px"
                height={{ base: "", lg: "30vh" }}
              >
                <Text>Issue Related: {ele?.title}</Text>
                <Text>Date: {ele?.date}</Text>
                <Text>Time: {ele?.time}</Text>
                <Center>
                  <Box
                    mt="60px"
                    fontWeight="500"
                    p="5px 20px"
                    backgroundColor={"white"}
                    borderRadius="20px"
                    color="#22548A"
                  >
                    You talked with Dr.
                  </Box>
                </Center>
                <Box
                  position="absolute"
                  zIndex="10"
                  height={{ base: "", lg: "20vh" }}
                  width={{ base: "", lg: "8vw" }}
                  left="290px"
                  bottom="65px"
                >
                  <Image
                    width="100%"
                    height="100%"
                    src="https://i.mscwlns.co/media/man-matters/Consult/DA/ConsultCardDoctorImageDesktop_HRCEiaVDF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666844428607"
                  />
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
