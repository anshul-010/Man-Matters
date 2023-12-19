import * as css from "../Styles/CheckoutStyles";

import {
  Box,
  Text,
  Image,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { IoIosArrowBack as LeftArrow } from "react-icons/io";

const Checkout = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Checkout is Easy with Us - Man Matters";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

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
      <Box>
        <Stepper index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>

      {/*  */}
    </Box>
  );
};

export default Checkout;
