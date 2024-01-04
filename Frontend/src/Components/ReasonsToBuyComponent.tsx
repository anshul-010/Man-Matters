import TickImg from "../Images/CheckoutImgs/TickIcon.png";
import TruckImg from "../Images/CheckoutImgs/TruckIcon.png";
import SafetyImg from "../Images/CheckoutImgs/SafetyIcon.png";

import { css } from "@emotion/react";
import { Box, Image, Text } from "@chakra-ui/react";

const ReasonsToBuyComponent = () => {
  return (
    <Box color="blackB" css={ReasonsToBuyCont}>
      <Box css={ChildDivReasonsToBuy}>
        <Image src={TickImg} />
        <Text>100% Genuine</Text>
        <Text>Products</Text>
      </Box>
      <Box css={ChildDivReasonsToBuy}>
        <Image src={TruckImg} />
        <Text>Free & Fast</Text>
        <Text>Delivery</Text>
      </Box>
      <Box css={ChildDivReasonsToBuy}>
        <Image src={SafetyImg} />
        <Text>Trusted by</Text>
        <Text>1 Crore+ Men</Text>
      </Box>
    </Box>
  );
};

export default ReasonsToBuyComponent;

// Styles ***********************
const ReasonsToBuyCont = css`
  display: flex;
  justify-content: space-between;
  padding: 0px 28px;
  width: 100%;
  -webkit-box-pack: justify;
  margin-bottom: 40px;
  margin-top: 20px;

  @media (max-width: 992px) {
    padding: 0px 12px;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding: 0px 10px;
  }
`;
const ChildDivReasonsToBuy = css`
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 30%;
  -webkit-box-align: center;
  align-items: center;

  p {
    overflow-wrap: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.25px;
    opacity: 0.7;
  }
  img {
    width: 28px;
    height: 28px;
    margin-bottom: 5px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

/* 

export const Temp = css`

@media (max-width: 992px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
`;

*/
