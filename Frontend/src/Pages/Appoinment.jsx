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
} from "@chakra-ui/react";
import React from "react";
import { Languages, Calendar, Clock3, Phone } from "lucide-react";
import { useParams } from "react-router-dom";

export const Appoinment = () => {
  const { title } = useParams();

  console.log(title);
  return (
    <div>
      <Box
        border="1px"
        boxShadow='xl'
        borderRadius="20px"
        borderColor="#a4c9f099"
        width={{ base: "80vw", lg: "35vw" }}
        m="15px auto"
      >
        <Center>
          <Heading size={{ lg: "lg" }}>Book Your Doctor</Heading>
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
          m="10px 15px"
        >
          Select Language
        </Text>
        <Flex alignItems="center" m="10px 15px">
          <Languages color="#356395" />
          <Select
            border="none"
            color="#063e7b"
            width={{ base: "50vw", lg: "15vw" }}
            focusBorderColor="transparent"
          >
            <option>Select Your Language</option>
            <option>English</option>
            <option>Hindi</option>
          </Select>
        </Flex>
        <hr width="250vw" />
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
          />
        </Flex>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color="gray.500"
          m="10px 15px"
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
          />
        </Flex>
        {/* <Flex alignItems="center"> */}
        <Box
          display="flex"
          p="15px"
          borderRadius="15px"
          m="50px auto"
          width={{ base: "60vw", lg: "30vw" }}
          justifyContent="center"
          border="1px solid"
          backgroundColor="#0f56a2"
          color="white"
          _hover={{cursor: "pointer",backgroundColor:"#083f7a"}}
        >
          <Phone />
          <Heading size={{ base: "", lg: "md" }}>Book Free Consult</Heading>
        </Box>
        {/* </Flex> */}
      </Box>
    </div>
  );
};
