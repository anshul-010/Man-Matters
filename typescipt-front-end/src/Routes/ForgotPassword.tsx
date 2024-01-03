import "../Styles/Styles.css";
import Rangoli from "../Images/ForgotPassword/Rangoli.jpg";

import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
  Spinner,
} from "@chakra-ui/react";

export const ForgotPassword = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [spin, setSpin] = useState(false);
  const toast = useToast();

  function handleReset() {
    setSpin(true);
    axios.post(`${API_URL}/user/forgot-password`, { email }).then((res) => {
      setSpin(false);
      if (res.data.msg === "User not found") {
        toast({
          position: "top",
          duration: 2500,
          render: () => (
            <Box color="white" p={3} bg="#ea3838">
              <b>User Not Found 🙅‍♂️</b>
            </Box>
          ),
        });
      } else {
        toast({
          position: "top",
          duration: 2500,
          render: () => (
            <Box color="white" p={3} bg="#69d729">
              <b>Please Check Your Mail ✉</b>
            </Box>
          ),
        });
      }
    });
  }

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
          top="35vh"
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
            <Link to="/login" replace state={{ redirectTo: location.pathname }}>
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
