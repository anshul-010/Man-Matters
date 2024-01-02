import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Text, Image } from "@chakra-ui/react";
import { IoIosArrowBack as LeftArrow } from "react-icons/io";

const CheckoutNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.stopPropagation();
    navigate(-1, {
      state: { redirectTo: location.pathname },
      replace: true,
    });
  };

  return (
    <Box color="blackA" bg="whiteA" boxShadow="shadowB" css={NavOuter}>
      <Box css={InnerNavCont}>
        <Box onClick={handleGoBack} css={LeftOptionsCont}>
          <Image as={LeftArrow} />
          <Text>Checkout</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutNavbar;

// Styles *******************
const NavOuter = css`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  border-radius: 0px 0px 8px 8px;

  @media (max-width: 768px) {
    border-radius: 0px 0px 7px 7px;
  }
  @media (max-width: 480px) {
    border-radius: 0px 0px 6px 6px;
  }
`;
const InnerNavCont = css`
  margin: auto;
  width: 990px;
  height: 60px;

  @media (max-width: 992px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    height: 50px;
  }
`;
const LeftOptionsCont = css`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 22px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 18px;
    font-size: 16.5px;
    font-weight: 600;
  }
  @media (max-width: 480px) {
    gap: 16px;
    font-size: 16px;
  }
`;
