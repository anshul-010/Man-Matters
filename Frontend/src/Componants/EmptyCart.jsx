import { ReasonsToBuyComponent } from "../Pages/Checkout";
import EmptyCartImg from "../Images/CheckoutImgs/EmptyCartImg.webp";

import { css } from "@emotion/react";
import { Box, Text, Image, Button, Link } from "@chakra-ui/react";

const EmptyCart = () => {
  return (
    <Box fontFamily="font1" css={Outer}>
      <Box>
        <Image src={EmptyCartImg} />
        <Text>Your Cart is Empty!</Text>
        <Text>Add products to cart and being your wellness Journey</Text>
        <Button
          bg="primary"
          color="whiteA"
          _hover={{ bg: "primary" }}
          as={Link}
          href="/all-products"
        >
          Add Products
        </Button>
      </Box>
      <ReasonsToBuyComponent />
    </Box>
  );
};

export default EmptyCart;

// Styles **************
export const Outer = css`
  margin: auto;
  width: 70%;
  min-height: 100dvh;
  padding-bottom: 64px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 30px;

  > div:first-child {
    margin-bottom: 120px;
  }

  > div:first-child img {
    margin: auto;
    display: block;
    width: 120px;
    height: 120px;
    margin-bottom: 48px;
    aspect-ratio: auto 120 / 120;
  }

  > div:first-child p:nth-of-type(1) {
    font-size: 22px;
    font-weight: 900;
    line-height: 38px;
    text-align: center;
    margin: 0px 0px 16px;
  }

  > div:first-child p:nth-of-type(2) {
    margin: 0px 0px 16px;
    font-weight: 400;
    line-height: 27px;
    text-align: center;
    font-size: 14px;
  }

  > div:first-child a {
    text-decoration: none;
    border-radius: 20px;
    width: 80%;
    max-width: 360px;
    height: 60px;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding-bottom: 42px;
    margin-top: 70px;
    margin-bottom: 20px;

    > div:first-child {
      margin-bottom: 60px;
    }

    > div:first-child img {
      width: 80px;
      height: 80px;
      margin-bottom: 35px;
      aspect-ratio: auto 120 / 120;
    }

    > div:first-child p:nth-of-type(1) {
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      margin: 0px 0px 10px;
    }

    > div:first-child p:nth-of-type(2) {
      margin: 0px 0px 10px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      font-size: 14px;
    }

    > div:first-child a {
      border-radius: 12px;
      max-width: 350px;
      height: 45px;
      font-size: 18px;
      font-weight: 300;
    }
  }
`;
