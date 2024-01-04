import doctorLeftImg from "../Images/ScheduleAppoinment/doctor-image.png";
import doctorRightImg from "../Images/ScheduleAppoinment/doctor-image2.png";
import { AppointmentTypes } from "../Data/AppointmentTypes";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";

export const ScheduleAppoinment = () => {
  const swipeAnimationLeft = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  const swipeAnimationRight = {
    initial: { x: "+100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  const swipeAnimationFromBottom = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, delay: 0.3 },
  };

  return (
    <div>
      <Flex justify="space-around">
        <Box width="20vw" height="70vh" mt="2%">
          <motion.div {...swipeAnimationLeft}>
            <Image src={doctorLeftImg} width="100%" />
          </motion.div>
        </Box>
        <div>
          <Center>
            <Heading
              color={"gray.700"}
              m="20px"
              size={{ base: "sm", lg: "xl" }}
            >
              Choose a concern to get started
            </Heading>
          </Center>
          {AppointmentTypes?.map((ele, i) => {
            return (
              <Link
                to={`/appoinment/${ele.title}`}
                replace
                state={{ redirectTo: location.pathname }}
                key={i}
              >
                <motion.div {...swipeAnimationFromBottom}>
                  <Flex
                    key={i}
                    _hover={{
                      cursor: "pointer",
                      boxShadow: `${ele.color} 1px 1px 5px`,
                    }}
                    border={"1px"}
                    align="center"
                    borderRadius={{ base: "15px", lg: "20px" }}
                    m="15px auto"
                    boxShadow="sm"
                    borderColor={ele.color}
                    justify="space-between"
                    width={{ base: "55vw", lg: "35vw" }}
                    height={{ base: "8vw", lg: "11vh" }}
                  >
                    <Box
                      width="5.5vw"
                      ml={{ base: "5px", lg: "10px" }}
                      borderRadius="14px"
                    >
                      <Image
                        mixBlendMode="multiply"
                        backgroundColor={ele.imageColor}
                        borderRadius="14px"
                        src={ele.image}
                        alt="image not found"
                      />
                    </Box>
                    <Box
                      width="35vw"
                      textAlign="start"
                      color={"gray.700"}
                      fontSize={{ base: "13px", lg: "17px" }}
                    >
                      <p>{ele.title}</p>
                    </Box>
                    <ChevronRight color={ele.color} size="2.5vw" />
                  </Flex>
                </motion.div>
              </Link>
            );
          })}
        </div>
        <Box width="20vw" height="70vh" mt="2%">
          <motion.div {...swipeAnimationRight}>
            <Image src={doctorRightImg} width="100%" />
          </motion.div>
        </Box>
      </Flex>
    </div>
  );
};
