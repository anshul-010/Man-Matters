import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Input,
  Select,
  Button,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Languages, Calendar, Clock3, Phone } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useToast, Spinner } from "@chakra-ui/react";
import doctor_image from "../Images/doctor-thums-up.jpg";
import { motion } from "framer-motion";

export const Appoinment = () => {
  const { title } = useParams();
  let initialData = {
    title,
    language: "",
    date: "",
    time: "",
  };
  const toast = useToast();
  const [spin, setSpin] = useState(false);
  const [appoinmentData, setAppoinmentData] = useState(initialData);
  const token = useSelector((store) => store.AuthReducer.token);

  function handleChange(e) {
    const { name, value } = e.target;
    setAppoinmentData((pre) => {
      return { ...pre, [name]: value };
    });
  }

  function addAppoinment() {
    setSpin(true);

    axios
      .post(`http://localhost:8080/appointment`, appoinmentData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSpin(false);
        toast({
          title: "Appoinment Booked",
          description: "Please check your mail",
          position: "top",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
                    pos='relative'
                    left="47vw"
                    top='40vh'
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
          zIndex='1'
        ></Box>
      )}
      <Flex justify="space-between">
        <Box width="20vw" height="70vh" ml="5%" mt="2%">
          <motion.div {...swipeAnimationLeft}>
            <Image src={doctor_image} width="100%" />
          </motion.div>
        </Box>
        <motion.div {...swipeAnimationFromBottom}>
          <Box
            border="1px"
            boxShadow="xl"
            borderRadius="20px"
            borderColor="#a4c9f099"
            width={{ base: "75vw", lg: "32vw" }}
            m="15px auto"
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
            <hr width="230vw" />
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
            {/* <Flex alignItems="center"> */}
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
            {/* </Flex> */}
          </Box>
        </motion.div>
        <Box width="20vw" height="70vh" mr="5%" mt="2%">
          <motion.div {...swipeAnimationRight}>
            <Image src={doctor_image} width="100%" />
          </motion.div>
        </Box>
      </Flex>
    </div>
  );
};
