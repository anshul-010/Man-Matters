import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../data/styles.css";
import Rangoli from "../Images/Rangoli.jpg";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function handleReset() {
    axios
      .post(`http://localhost:8080/user/forgot-password`, { email })
      .then((res) => {
        // console.log(res.data)
      });
  }

  return (
    <div>
      <Box display="flex" m="auto" width="98vw" justifyContent="space-evenly">
        <Box width="20%" height="30%" mt="20px" className="rotating-image">
          <Image src={Rangoli} width="100%" height="100%" alt="img-not-found" />
        </Box>
        <Box
          width={{ lg: "30vw", base: "80vw" }}
          boxShadow="base"
          m="20px"
          mb="8vh"
          p={"10px"}
        >
          <Heading m="5px" fontSize="3xl" color="#22548A">
            Forgot password
          </Heading>
          <FormControl>
            <FormLabel m={2}>Email</FormLabel>

            <Input
              type="email"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              m="20px auto"
              display={"block"}
              p={"10px 50px"}
              size="lg"
              colorScheme="linkedin"
              variant="ghost"
              onClick={handleReset}
            >
              Reset Password
            </Button>
          </FormControl>
          <Flex justify="space-around">
            <Link to="/login">
              <Button color="#22548A" variant="link" fontSize="lg">
                login
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box width="20%" height="30%" mt="20px" className="rotating-image">
          <Image src={Rangoli} width="100%" height="100%" alt="img-not-found" />
        </Box>
      </Box>
    </div>
  );
};
