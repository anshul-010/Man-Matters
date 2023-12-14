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
import { useSelector,useDispatch  } from "react-redux";
import { Link,useLocation, useNavigate  } from "react-router-dom";
import axios from "axios";
import { login } from "../Redux/AuthReducer/actions";

let initialData = {
  email: "",
  password: "",
};

export const Login = () => {
  const [userData, setUserData] = useState(initialData);
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    dispatch(login(userData)).then(()=>{
      navigate(location.state,{replace:true})
    })

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
          <Link to='/forgot-password'><Button color="#22548A" variant="link" fontSize="lg">
            forgot password
          </Button></Link>
          <Link to="/signup">
            <Button fontSize="lg" color="#22548A" variant="link">
              sign up
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};
