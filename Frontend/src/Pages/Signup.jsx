import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
let initialData = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  password: "",
};
export const Signup = () => {
  const [userData, setUserData] = useState(initialData);
  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((pre) => {
      return { ...pre, [name]: name == "mobile" ? +value : value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:8080/user/register`, userData).then((res) => {
    });
    setUserData(initialData);
  }
  return (
    <>
      <Box
        width={{ lg: "30vw", base: "80vw" }}
        boxShadow="base"
        m="20px auto"
        mb="8vh"
        p={"10px"}
      >
        <Heading m="5px" fontSize="3xl" color="#22548A">
          Sign up
        </Heading>
        <FormControl mt="20px">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="first name"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="last name"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
          <FormLabel>Mobile No.</FormLabel>
          <Input
            type="number"
            placeholder="mobile no."
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
          />
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <FormLabel m={2}>Password</FormLabel>
          <Input
            type="email"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <Button
            m="20px auto"
            display={"block"}
            p={"10px 50px"}
            size="lg"
            colorScheme="linkedin"
            variant="ghost"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </FormControl>
        <Flex justify="space-around">
          <Link to="/login">
            <Button color="#22548A" variant="link" fontSize="lg">
              Already have account!
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};
