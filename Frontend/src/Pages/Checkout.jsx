import * as css from "../Styles/CheckoutStyles";

import { useState, useEffect } from "react";
import { IoIosArrowBack as LeftArrow } from "react-icons/io";
import { FaPen as PenIcon } from "react-icons/fa6";
import { Box, Text, Image } from "@chakra-ui/react";
import { GetCartItems } from "../Redux/CartReducer/actions";

const Checkout = () => {
  const [currStepper, setCurrStepper] = useState(1);
  const [cartitem, setCartItem] = useState(GetCartItems());

  useEffect(() => {
    console.log(cartitem);
  }, [cartitem]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Checkout is Easy with Us - Man Matters";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleStepperChange = (val) => {
    if (val <= 0) {
      setCurrStepper(1);
    } else if (val >= 4) {
      setCurrStepper(3);
    } else {
      setCurrStepper(val);
    }
  };

  return (
    <Box>
      {/* Navbar */}
      <Box color="blackA" bg="whiteA" boxShadow="shadowB" css={css.NavOuter}>
        <Box css={css.InnerNavCont}>
          <Box css={css.LeftOptionsCont}>
            <Image as={LeftArrow} />
            <Text>Checkout</Text>
          </Box>
        </Box>
      </Box>

      {/* Middle */}
      <Box css={css.MiddleOuter}>
        {/* Stepper */}
        <Box css={css.StepperBox}>
          <Box onClick={() => handleStepperChange(1)} css={css.EachStepBox}>
            <Box bg="greenB" color="whiteA" css={css.NumBoxStepper}>
              1
            </Box>
            <Text color="greenB">Cart</Text>
          </Box>
          <Text
            borderTop="1px dashed"
            w="70px"
            borderColor={currStepper >= 2 ? "primary" : "greyWhiteA"}
          ></Text>
          <Box onClick={() => handleStepperChange(2)} css={css.EachStepBox}>
            <Box
              bg={currStepper >= 2 ? "greenB" : "whiteA"}
              color={currStepper >= 2 ? "whiteA" : "greyWhiteA"}
              borderColor={currStepper >= 2 ? "none" : "greyWhiteA"}
              css={css.NumBoxStepper}
            >
              2
            </Box>
            <Text color={currStepper >= 2 ? "greenB" : "greyWhiteA"}>
              Address
            </Text>
          </Box>
          <Text
            borderTop="1px dashed"
            w="70px"
            borderColor={currStepper == 3 ? "primary" : "greyWhiteA"}
          ></Text>
          <Box onClick={() => handleStepperChange(3)} css={css.EachStepBox}>
            <Box
              bg={currStepper == 3 ? "greenB" : "whiteA"}
              color={currStepper == 3 ? "whiteA" : "greyWhiteA"}
              borderColor={currStepper == 3 ? "none" : "greyWhiteA"}
              css={css.NumBoxStepper}
            >
              3
            </Box>
            <Text color={currStepper == 3 ? "greenB" : "greyWhiteA"}>
              Payment
            </Text>
          </Box>
        </Box>

        {/* Content Container */}
        <Box css={css.ContentOuter}>
          {/* Left Side Box */}
          <Box css={css.LeftSideCont}>
            <Box bg="blueA" color="whiteA" css={css.BlueBoxLeftSide}>
              <Box css={css.TalkToDoctorCont}>
                <Text fontFamily="font1" css={css.TextTalkToDoctor}>
                  Talk to Doctor Now for FREE
                </Text>
                <Box bg="blueC" css={css.PenBtnCont}>
                  <Image as={PenIcon} />
                </Box>
              </Box>
              <Box css={css.TypeLanguageCont}>
                <Box>
                  <Text color="yellowB" css={css.TypeLanguageHeadingTexts}>
                    Type
                  </Text>
                  <Text css={css.TypeLanguageValueTexts}>Audio Call</Text>
                </Box>
                <Box>
                  <Text color="yellowB" css={css.TypeLanguageHeadingTexts}>
                    Language
                  </Text>
                  <Text css={css.TypeLanguageValueTexts}>English</Text>
                </Box>
              </Box>
              <Text css={css.BottomTextLeftBlueBox}>
                Your consultation will start on placement of order
              </Text>
            </Box>
            <Box css={css.BookAnotherSlotCont}>
              <span>Not free right now?</span>
              <Text fontFamily="font1" color="blueC">
                Book Another Slot {`>`}
              </Text>
            </Box>
          </Box>

          {/* Right Side Box */}
          <Box css={css.RightSideCont}>Right</Box>
        </Box>
      </Box>

      {/*  */}
    </Box>
  );
};

export default Checkout;
