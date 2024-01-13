import { LogOut } from "../Redux/AuthReducer/action";
import { useAppDispatch } from "../Redux/store";
import { GetUserDetails } from "../Redux/AuthReducer/action";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Text,
  useToast,
  Skeleton,
  Flex,
  Button
} from "@chakra-ui/react";

export const Profile = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLoginInfo, setUserLoginInfo] = useState({
    userName: "",
    email: "",
    mobile: "",
  });
console.log(userData)
  // Get User Appointment Data Function
  function getUserData() {
    setLoading(true)
    axios
      .get(`${API_URL}/appointment`, {
        headers: {
          Authorization: GetUserDetails().token,
        },
      })
      .then((res) => {
    setLoading(false)
        setUserData(res.data.data);
      })
      .catch((err: any) => {
        toast({
          title: "Something Went Wrong!",
          description: "This seems to be a server error, Please try again!",
          status: "error",
          position: "top",
        });
        console.log("Error getting User data:-", err);
      });
  }

  useEffect(() => {
    getUserData();
    const { userName, email, mobile } = GetUserDetails(); // This function gets user login details from LS
    setUserLoginInfo({ userName, email, mobile });
  }, []);

  // Logout Function
  function handleLogout() {
    LogOut(dispatch);
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
      <Box width={{ base: "", lg: "90vw" }} m="auto" >
        <Heading size="md" mt="20px" color="#3b3b3b">
          Your Previous Schedule Appoinment
        </Heading>
          {loading  && <Grid templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            
          }}
          width={{ base: "10vw", lg: "90vw" }}
          // border="1px solid"
          gap="15px"
          mt="20px" >
            <Skeleton height={{ base: "", lg: "30vh" }} borderRadius="10px"></Skeleton>
            <Skeleton height={{ base: "", lg: "30vh" }} borderRadius="10px"></Skeleton>
            <Skeleton height={{ base: "", lg: "30vh" }} borderRadius="10px"></Skeleton>
          </Grid>}
        {!loading && <Grid
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
              
              <Box bg={"#18222D"} position={"relative"} p={"7px"} maxW="sm" borderRadius="lg"  overflow="hidden">
         <Text fontWeight={"bold"} color={"white"}>Issue Relate: {ele.title}</Text>
         <Flex>
          <Image w={"70px"} m={"5px"} borderRadius={"50%"} src="https://i.mscwlns.co/media/man-matters/Consult/DA/ConsultCardDoctorImageDesktop_HRCEiaVDF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666844428607" alt="" />
        <Center>
          <Text fontWeight={"bold"} color={"white"} >Dr. Nitesh </Text>
        </Center>
         </Flex>
         <Text color={"white"} fontWeight={"small"}>Be on time <span >💙</span></Text>
         <Button bg={"#5DADEC"} color={"white"} >Join</Button>
         <Box  className="btn2">
          <Text color={"#5DADEC"} fontWeight={"bold"} >Wed</Text>
          <Text color={"white"} fontWeight={"bold"}>{ele.date}</Text>
          <Text color={"white"} fontWeight={"bold"}>{ele.time} PM</Text>
         </Box>
          </Box>
            );
          })}
        </Grid>}
      </Box>
    </div>
  );
};
