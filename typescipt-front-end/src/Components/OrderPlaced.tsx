import TickIcon from "../Images/CheckoutImgs/TickIcon.png";
import OrderPlacedImg from "../Images/CheckoutImgs/OrderPlaced.jpg";
import { HIDECHECKOUTPAYMENT } from "../Redux/actionTypes";
import ReasonsToBuyComponent from "./ReasonsToBuyComponent";

import { css } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const OrderPlaced = ({ userMail }: any) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: HIDECHECKOUTPAYMENT });
    };
  }, []);

  return (
    <Box fontFamily="font1" bg="whiteA" minH="100dvh" w="100%">
      <Box w={["93%", "465px", "750px", "970px"]} m="auto" textAlign="center">
        <Box css={InnerDivStyles}>
          <Text>
            Order Placed Successfully <Image src={TickIcon} />
          </Text>
          <Image src={OrderPlacedImg} />
          <Text>
            An email is sent to <span>{userMail}</span> containing delivery
            details of your order.
          </Text>
          <Button
            bg="primary"
            color="whiteA"
            _hover={{ bg: "primary" }}
            as={Link}
            to="/all-products"
            state={{ redirectTo: location.pathname }}
            replace
          >
            Continue Shopping
          </Button>
        </Box>
        <ReasonsToBuyComponent />
      </Box>
    </Box>
  );
};

export default OrderPlaced;

// Styles **************

const InnerDivStyles = css`
  cursor: default;

  p:nth-of-type(1) {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 24px;
    margin: 40px auto -10px;
  }
  p:nth-of-type(1) > img {
    width: 42px;
    height: 42px;
    aspect-ratio: auto 42 / 42;
  }
  > img {
    margin: auto;
    width: 280px;
    height: 280px;
    aspect-ratio: auto 280 / 280;
  }
  p:nth-of-type(2) {
    font-size: 18px;
    font-weight: 500;
    color: #666666;
  }
  p:nth-of-type(2) > span {
    cursor: text;
    color: #22548a;
  }
  > a {
    margin: 20px auto 60px;
    text-decoration: none;
    border-radius: 20px;
    width: 80%;
    max-width: 360px;
    height: 60px;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    p:nth-of-type(1) {
      gap: 5px;
      font-size: 22px;
      margin: 32px auto 0px;
    }
    p:nth-of-type(1) > img {
      width: 38px;
      height: 38px;
      aspect-ratio: auto 38 / 38;
    }
    > img {
      width: 250px;
      height: 250px;
      aspect-ratio: auto 250 / 250;
    }
    p:nth-of-type(2) {
      font-size: 16.5px;
    }
    > a {
      margin: 20px auto 45px;
      border-radius: 15px;
      width: 80%;
      max-width: 360px;
      height: 55px;
      font-size: 18.5px;
    }
  }
  @media (max-width: 480px) {
    p:nth-of-type(1) {
      gap: 2px;
      font-size: 18.5px;
      margin: 40px auto 0px;
    }
    p:nth-of-type(1) > img {
      width: 32px;
      height: 32px;
      aspect-ratio: auto 32 / 32;
    }
    > img {
      width: 200px;
      height: 200px;
      aspect-ratio: auto 200 / 200;
    }
    p:nth-of-type(2) {
      font-size: 14.5px;
      margin-top: 15px;
    }
    > a {
      margin: 20px auto 30px;
      border-radius: 12px;
      width: 80%;
      max-width: 340px;
      height: 50px;
      font-size: 16.5px;
    }
  }
`;
