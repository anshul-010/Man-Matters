import "../Styles/Styles.css";
import Rangoli from "../Images/ForgotPassword/Rangoli.jpg";
import { LogIn } from "../Redux/AuthReducer/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Box,
  Image,
  useToast,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

let initialData = {
  email: "",
  password: "",
};
export const Login = () => {
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState(initialData);
  const isLoading = useAppSelector((store) => store.AuthReducer.isLoading);

  // Form Input Change
  function handleChange(event: any) {
    const { name, value } = event.target;
    setUserData((pre) => {
      return { ...pre, [name]: name == "mobile" ? Number(value) : value };
    });
  }

  // Login
  function handleLogin(event: any) {
    event.preventDefault();
    if (!isLoading) {
      toast.closeAll();
      LogIn(dispatch, userData).then((auth: any) => {
        if (auth.auth) {
          if (auth.admin === "Admin") {
            return navigate("/admin-dashboard");
          } else {
            toast({
              position: "top",
              duration: 2500,
              render: () => (
                <Box color="white" p={3} bg="#69d729">
                  <b>Login Successfull 👍</b>
                </Box>
              ),
            });
            setUserData(initialData);
            navigate(location?.state || "/", { replace: true });
          }
        } else {
          toast({
            position: "top",
            duration: 2500,
            render: () => (
              <Box color="white" p={3} bg="#ea3838">
                <b>Wrong Credentials 👎</b>
              </Box>
            ),
          });
        }
      });
    }
  }

  function loginAsGuest() {
    let guestData = {
      email: "anshkush532@gmail.com",
      password: "ansh",
    };

    if (!isLoading) {
      toast.closeAll();
      LogIn(dispatch, guestData).then((auth: any) => {
        if (auth.auth) {
          if (auth.admin === "Admin") {
            return navigate("/admin-dashboard");
          } else {
            toast({
              position: "top",
              duration: 2500,
              render: () => (
                <Box color="white" p={3} bg="#69d729">
                  <b>Login Successfull 👍</b>
                </Box>
              ),
            });
            setUserData(initialData);
            navigate(location?.state || "/", { replace: true });
          }
        }
      });
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    toast({
      position: "top",
      duration: 2500,
      render: () => (
        <Box color="white" p={3} bg="gold">
          <b>Please Login First</b>
        </Box>
      ),
    });
  }, []);

  return (
    <>
      {isLoading && (
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
      {isLoading && (
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
        <Box width="24%" height="40%" mt="20px" className="rotating-image">
          <Image src={Rangoli} width="100%" height="100%" alt="img-not-found" />
        </Box>
        <Box
          width={{ lg: "30vw", base: "80vw" }}
          boxShadow="base"
          m="20px "
          mb="8vh"
          p={"10px"}
        >
          <Heading m="5px" fontSize="3xl" color="#22548A">
            Login
          </Heading>
          <FormControl mt="20px">
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
              onClick={handleLogin}
            >
              Login
            </Button>
          </FormControl>
          <Flex justify="space-around">
            <Link
              to="/forgot-password"
              replace
              state={{ redirectTo: location.pathname }}
            >
              <Button color="#22548A" variant="link" fontSize="lg">
                forgot password
              </Button>
            </Link>
            <Link
              to="/signup"
              replace
              state={{ redirectTo: location.pathname }}
            >
              <Button fontSize="lg" color="#22548A" variant="link">
                sign up
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box width="24%" height="40%" mt="20px" className="rotating-image">
          <Image src={Rangoli} width="100%" height="100%" alt="img-not-found" />
        </Box>
      </Box>
      <Center>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          backgroundColor="whatsapp.100"
          borderColor="whatsapp.400"
          colorScheme="whatsapp"
          variant="ghost"
          onClick={loginAsGuest}
        >
          login as guest
        </Button>
      </Center>
    </>
  );
};
