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
import { useState } from "react";
import "../data/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/actions";
import Rangoli from "../Images/Rangoli.jpg";
let initialData = {
  email: "",
  password: "",
};
export const Login = () => {
  const [userData, setUserData] = useState(initialData);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, name, token } = useSelector((store) => {
    return {
      isAuth: store.AuthReducer.isAuth,
      name: store.AuthReducer.name,
      token: store.AuthReducer.token,
    };
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((pre) => {
      return { ...pre, [name]: name == "mobile" ? +value : value };
    });
  }
  function handleLogin(event) {
    event.preventDefault();
    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace: true });
    });
    setUserData(initialData);
  }
  return (
    <>
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
            <Link to="/forgot-password">
              <Button color="#22548A" variant="link" fontSize="lg">
                forgot password
              </Button>
            </Link>
            <Link to="/signup">
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
