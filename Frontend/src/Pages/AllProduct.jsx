import React, { useEffect, useState } from "react";
import Products from "../db.json";
import { Box, Grid, Button, Flex, Heading, Select } from "@chakra-ui/react";
import { Card2 } from "../Componants/Card";

export const AllProduct = () => {
  const [data, setData] = useState([]);
  const [cetagoryName, setCetagoryName] = useState("All Product");
  useEffect(() => {
    setData(Products.Products);
  }, []);


  return (
    <div>
      <Box id="top-bar"></Box>
      <Box id="main-container">
        <Box id="category">
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(7, 1fr)",
              xl: "repeat(7, 1fr)",
            }}
            justifyContent="center"
            w="80%"
            m="auto"
            mt="10"
            mb="10"
            alignItems={"center"}
            // border="2px solid"
          >
            <Button
              bg={"#5194D1"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#ffffff"
              borderRadius="15px"
              m={"10px"}
              onClick={() => setCetagoryName("All Products")}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#5194D1",
                boxShadow: "5px 5px 8px #82b8eb",
              }}
            >
              All Products
            </Button>
            <Button
              bg={"#F2ECEC"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#b09999"
              borderRadius="15px"
              m={"10px"}
              onClick={() => setCetagoryName("New Launches")}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#F2ECEC",
                boxShadow: "5px 5px 8px #b09999",
              }}
            >
              New Launches
            </Button>
            <Button
              bg={"#E4F5ED"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#70bd99"
              borderRadius="15px"
              m={"10px"}
              onClick={() => setCetagoryName("Nutrition")}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#E4F5ED",
                boxShadow: "5px 5px 8px #70bd99",
              }}
            >
              Nutrition
            </Button>
            <Button
              bg={"#FAE9E9"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#bc8888"
              borderRadius="15px"
              m={"10px"}
              onClick={() => setCetagoryName("Hair")}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#FAE9E9",
                boxShadow: "5px 5px 8px #bc8888",
              }}
            >
              Hair
            </Button>
            <Button
              bg={"#DDEFEC"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#69afa3"
              borderRadius="15px"
              m={"10px"}
              onClick={() => setCetagoryName("Beard")}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#DDEFEC",
                boxShadow: "5px 5px 8px #69afa3",
              }}
            >
              Beard
            </Button>
          </Grid>
        </Box>
        <Flex
          id="categary-name"
          justify={{ base: "space-between", lg: "space-evenly" }}
          width={{ base: "100%", lg: "74%" }}
          alignItems="center"
          // border="2px solid"
          height="15vh"
        >
          <Heading color="#565656" size={{ base: "sm", lg: "lg" }}>{cetagoryName}</Heading>
          <Box>
            <Select
              fontSize={{ base: "sm", lg: "lg" }}
              width={{ base: "130px", lg: "174px" }}
              focusBorderColor="transparent"
              fontWeight="500"
              color="gray.700"
            >
              <option value="">Sort by Price</option>
              <option value="asc">Asc</option>
              <option value="decs">Desc</option>
            </Select>
            <hr />
          </Box>
          <Box>
            <Select
              fontSize={{ base: "sm", lg: "lg" }}
              width={{ base: "145px", lg: "174px" }}
              focusBorderColor="transparent"
              fontWeight="500"
              color="gray.700"
            >
              <option value="">Filter by Rating</option>
              <option value="">Above 4</option>
              <option value="">Above 3</option>
              <option value="">Above 2</option>
            </Select>
            <hr />
          </Box>
        </Flex>
        <hr />
        <Box id="products" mt="10px" >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            justifyContent="center"
            gap="30px"
            w="80%"
            m="auto"
            alignItems={"center"}
          >
            {data?.map((property) => (
              <Card2 property={property} />
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
