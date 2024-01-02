import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../data/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/actions";
import Rangoli from "../Images/Rangoli.jpg";
import { useToast, Spinner } from "@chakra-ui/react";

let initialData = {
  email: "anshkush532@gmail.com",
  password: "ansh",
};
export const Login = () => {
  const [userData, setUserData] = useState(initialData);
  const [spin, setSpin] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { isAuth, name, token } = useSelector((store) => {
    return {
      isAuth: store.AuthReducer.isAuth,
      name: store.AuthReducer.name,
      token: store.AuthReducer.token,
    };
  });
  // console.log(isAuth);
  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((pre) => {
      return { ...pre, [name]: name == "mobile" ? +value : value };
    });
  }
  function handleLogin(event) {
    event.preventDefault();
    setSpin(true);
    dispatch(login(userData)).then((auth) => {
      setSpin(false);
      if (auth.auth) {
        toast({
          position: "top",
          duration: 2500,
          render: () => (
            <Box color="white" p={3} bg="#69d729">
              <b>Login Successfull 👍</b>
            </Box>
          ),
        });
      } else {
        toast({
          position: "top",
          duration: 2500,
          render: () => (
            <Box color="white" p={3} bg="#ea3838">
              <b>Wrong Credential 👎</b>
            </Box>
          ),
        });
      }
      setUserData(initialData);

      navigate(location.state.redirectTo || "/", { replace: true });
    });
  }
  return (
    <>
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
    </>
  );
};
