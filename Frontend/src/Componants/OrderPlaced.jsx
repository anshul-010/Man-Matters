import { ReasonsToBuyComponent } from "../Pages/Checkout";
import OrderPlacedImg from "../Images/CheckoutImgs/OrderPlaced.jpg";

import { css } from "@emotion/react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const OrderPlaced = ({ userMail }) => {
  const location = useLocation();

  return (
    <Box fontFamily="font1" bg="whiteA" w="100%" h="100%">
      <Box css={OuterStyles}>
        <Box css={InnerDivStyles}>
          <Text>Order Placed Successfully</Text>
          <Image src={OrderPlacedImg} />
          <Text>
            An email is sent to {userMail} containing delivery details of your
            order.
          </Text>
          <Button
            bg="primary"
            color="whiteA"
            _hover={{ bg: "primary" }}
            as={Link}
            to="/all-products"
            replace
            state={{ redirectTo: location.pathname }}
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
const OuterStyles = css`
  margin: auto;
  width: 970px;
  text-align: center;

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

const InnerDivStyles = css`
  img {
    margin: auto;
    width: 120px;
    height: 120px;
    aspect-ratio: auto 120 / 120;
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;
