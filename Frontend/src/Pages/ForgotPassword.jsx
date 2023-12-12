import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function handleReset() {
    console.log(email);
    axios.post(`http://localhost:8080/user/forgot-password`,{email})
    .then((res)=>{
        console.log(res.data)
    })
  }

  return (
    <div>
      <Box
        width={{ lg: "30vw", base: "90vw" }}
        boxShadow="base"
        m="20px auto"
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
      </Box>
    </div>
  );
};
