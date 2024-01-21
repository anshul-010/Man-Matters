import DoctorImg from "../Images/Appointment/doctor-thums-up.jpg";
import { GetUserDetails } from "../Redux/AuthReducer/action";

import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Input,
  Select,
  FormControl,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Languages, Calendar, Clock3, Phone } from "lucide-react";

export const Appoinment = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const toast = useToast();
  const { title } = useParams();
  const [spin, setSpin] = useState(false);
  const [appoinmentData, setAppoinmentData] = useState({
    title: title,
    language: "",
    date: "",
    time: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setAppoinmentData((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function addAppoinment() {
    if (!spin) {
      setSpin(true);
      axios
        .post(`${API_URL}/appointment`, appoinmentData, {
          headers: {
            Authorization: GetUserDetails().token,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          setSpin(false);
          toast({
            title: "Appoinment Booked!",
            description: "Please check your mail",
            position: "top",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        })
        .catch((err: any) => {
          setSpin(false);
          toast({
            title: "Something Went Wrong!",
            description: "This seems to be a server error, Please try again!",
            status: "error",
            position: "top",
          });
          console.log("Appointment Booking Error", err);
        });
    }
  }

  const swipeAnimationLeft = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  const swipeAnimationRight = {
    initial: { x: "+100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  const swipeAnimationFromBottom = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  return (
    <div>
      {spin && (
        <Spinner
          thickness="10px"
          speed=".8s"
          emptyColor="white"
          color="blue.400"
          size="xl"
          zIndex="100"
          pos="relative"
          left="47vw"
          top="40vh"
        />
      )}
      {spin && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="1"
        ></Box>
      )}
      <Flex justify="space-between">
        <Box width="20vw" height="70vh" ml="5%" mt="2%">
          <motion.div {...swipeAnimationLeft}>
            <Image src={DoctorImg} width="100%" />
          </motion.div>
        </Box>
        <motion.div {...swipeAnimationFromBottom}>
          <Box
            border="1px"
            boxShadow="xl"
            borderRadius="20px"
            borderColor="#a4c9f099"
            width={{ base: "80vw", lg: "32vw" }}
            m="10px auto"
          >
            <Center>
              <Heading m="10px" size={{ lg: "lg" }} color="#404040ed">
                {" "}
                {title}
              </Heading>
            </Center>
            <Center>
              <Text mb="30px" color="#09c8a8" fontSize={{ lg: "xl" }}>
                Free consult at your selected time
              </Text>
            </Center>
            <Box backgroundColor="#22548A" mt="25px" borderRadius="18px">
              <Flex
                alignItems="center"
                height={{ base: "8vh", lg: "12vh" }}
                border="1px solid"
                pos="relative"
                bottom="18px"
                backgroundColor="white"
                borderRadius="18px"
                boxShadow="md"
                borderColor="gray.200"
              >
                <Image
                  pos="relative"
                  left="10px"
                  bottom={{ base: "2.1vh", lg: "3.2vh" }}
                  width={{ base: "10vh", lg: "15vh" }}
                  src="https://i.mscwlns.co/media/man-matters/Consult/DA/ConsultCardDoctorImageDesktop_HRCEiaVDF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666844428607"
                />
                <Heading
                  fontSize={{ base: "md", lg: "xl" }}
                  color="#22548A"
                  ml="20px"
                >
                  Schedule Appointment
                </Heading>
              </Flex>
              <Box>
                <Center>
                  <Text color="white" fontSize={{ base: "sm", lg: "md" }}>
                    Get a callback at selected date & time
                  </Text>
                </Center>
              </Box>
            </Box>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color="gray.500"
              m="5px 15px"
            >
              Select Language
            </Text>
            <FormControl>
              <Flex alignItems="center" m="10px 15px">
                <Languages color="#356395" />
                <Select
                  border="none"
                  color="#063e7b"
                  width={{ base: "50vw", lg: "15vw" }}
                  focusBorderColor="transparent"
                  name="language"
                  onChange={handleChange}
                  // isRequired={true}
                >
                  <option value="">Select Your Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </Select>
              </Flex>
            </FormControl>
            <hr style={{ width: "17vw" }} />
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color="gray.500"
              m="10px 15px"
            >
              Select Date
            </Text>
            <Flex alignItems="center" m="10px 15px">
              <Calendar color="#356395" />
              <Input
                ml="5px"
                type="date"
                width={{ base: "55vw", lg: "14vw" }}
                color="#063e7b"
                name="date"
                onChange={handleChange}
              />
            </Flex>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color="gray.500"
              m="0px 15px"
            >
              Select Time
            </Text>
            <Flex alignItems="center" m="10px 15px">
              <Clock3 color="#356395" />
              <Input
                ml="5px"
                type="time"
                width={{ base: "55vw", lg: "14vw" }}
                color="#063e7b"
                name="time"
                onChange={handleChange}
              />
            </Flex>
            <Box
              display="flex"
              p="15px"
              borderRadius="15px"
              m="20px auto"
              width={{ base: "60vw", lg: "30vw" }}
              justifyContent="center"
              border="1px solid"
              backgroundColor="#0f56a2"
              color="white"
              _hover={{ cursor: "pointer", backgroundColor: "#083f7a" }}
              onClick={addAppoinment}
            >
              <Phone />
              <Heading size={{ base: "", lg: "md" }}>Book Free Consult</Heading>
            </Box>
          </Box>
        </motion.div>
        <Box width="20vw" height="70vh" mr="5%" mt="2%">
          <motion.div {...swipeAnimationRight}>
            <Image src={DoctorImg} width="100%" />
          </motion.div>
        </Box>
      </Flex>
    </div>
  );
};
