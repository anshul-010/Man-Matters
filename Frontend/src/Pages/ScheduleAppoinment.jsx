import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
let data = [
  {
    image:
      "https://i.mscwlns.co/media/man-matters/Consult/DA/Hair_FtPJMHJh1u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670248695895",
    title: "HAIR & SCALP",
    color: "#BFD8EE",
    imageColor:"#EAF4FA"
  },
  {
    image:
      "https://i.mscwlns.co/media/man-matters/Consult/DA/skin_3VoP2Spmjb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670248695931",
    title: "SKIN",
    color: "#D77325",
    imageColor:"#FEF7F0"
  },
  {
    image:
      "https://i.mscwlns.co/media/man-matters/Consult/DA/beard_UomdQJlNH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670248695680",
    title: "BEARD",
    color: "#967A75",
    imageColor:"#F6F2F0"
  },
  {
    image:
      "https://i.mscwlns.co/media/man-matters/Consult/DA/nutrition_NwHtd3u3D8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670248695789",
    title: "ACTIVE NUTRITION",
    color: "#80A857",
    imageColor:"#E4F5ED"
  },
  {
    image:
      "https://i.mscwlns.co/media/misc/consult/questions/c_iQLX_u1GA.png?tr=w-600",
    title: "QUIT SMOKING",
    color: "#22548A",
    imageColor:"#E1EFF8"
  },
];

export const ScheduleAppoinment = () => {
  return (
    <div >
      <div >
        <Center><Heading color={"gray.700"} m='20px' size={{base:"sm",lg:"xl"}}>Choose a concern to get started</Heading></Center>
        {data?.map((ele,i) => {
          return (
            <Link to={`/appoinment/${ele.title}`} ><Flex
              key={i}
              _hover={{
                cursor: "pointer",
                boxShadow: `${ele.color} 1px 1px 5px`
              }}
              border={"1px"}
              align="center"
              borderRadius={{base:"15px",lg:"20px"}}
              m="15px auto"
              boxShadow="sm"
              borderColor={ele.color}
              justify="space-between"
              width={{base:"55vw",lg:"35vw"}}
              height={{base:"4vh",lg:"11vh"}}
              
            >
              <Box width="5.5vw" ml={{base:"5px",lg:"10px"}}  borderRadius="14px">
                <Image mixBlendMode="multiply" backgroundColor={ele.imageColor} borderRadius="14px"  src={ele.image} alt="image not found" />
              </Box>
              <Box  width="35vw" textAlign="start" color={"gray.700"}  fontSize={{base:"13px",lg:"17px"}}>
                <p>{ele.title}</p>
              </Box>
              <ChevronRight color={ele.color} size="2.5vw" />
            </Flex></Link>
          );
        })}
      </div>
    </div>
  );
};
