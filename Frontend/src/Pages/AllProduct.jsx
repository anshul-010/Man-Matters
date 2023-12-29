import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Flex,
  Heading,
  Select,
  Skeleton,
} from "@chakra-ui/react";
import { Card2 } from "../Componants/Card";
import Data from "../data/doctors";
import "../data/styles.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { useSearchParams } from "react-router-dom";

export const AllProduct = () => {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [cetagoryName, setCetagoryName] = useState("All Product");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const [rating, setRating] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.ProductReducer.products);
  const totalCount = useSelector((store) => store.ProductReducer.totalCount);
  const loading = useSelector((store) => store.ProductReducer.isLoading);

  const totalButton = Math.ceil(totalCount / 12);
  let paramObj = {
    params: {
      limit: 12,
      page: page,
      category: category,
      sort: "price",
      order: order,
      rating: rating,
    },
  };

  useEffect(()=>{
    const params = {

    }
    category && (params.category = category)
    order && (params.order = order)
    rating && (params.rating = rating)
    setSearchParams(params);


  },[order, category, rating])

  function handleSort(e){
    setOrder(e.target.value)
  }


  function handlePage(p) {
    setPage(p);
  }

  function handleAllCategory(name) {
    setCetagoryName(name);
    setCategory("");
  }
  function handleNewLaunch(name) {
    setCetagoryName(name);
    setCategory("");
  }
  function handleNutrition(name) {
    setCetagoryName(name);
    setCategory(name);
  }
  function handleHair(name) {
    setCetagoryName(name);
    setCategory(name);
  }
  function handleBeard(name) {
    setCetagoryName(name);
    setCategory(name);
  }

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [page, category, order, rating]);

  useEffect(() => {
    const lastIndext = people.length - 1;
    if (index < 0) {
      setIndex(lastIndext);
    }
    if (index > lastIndext) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      <Box id="top-bar">
        <section className="section">
          {/* Slider Started */}
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={id}>
                  <img className="person-img" src={image} alt={name} />
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft size={50} />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight size={50} />
            </button>
          </div>
        </section>
      </Box>
      <Box
        id="main-container"
        position="sticky"
        top="14"
        backgroundColor="white"
      >
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
            position={{ base: "static", lg: "sticky" }}
            top={{ base: "auto", lg: "14vh" }} // Adjust this value based on your navbar height
            zIndex="1000" // Set a higher z-index to make it appear above other elements
            backgroundColor="white" // Set the background color as needed
            overflow="hidden"
          >
            <Button
              bg={"#5194D1"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#ffffff"
              borderRadius="15px"
              m={"10px"}
              value="All Products"
              onClick={(e) => {
                handleAllCategory(e.target.value);
              }}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#5194D1",
                boxShadow: "5px 5px 8px #82b8eb",
              }}
            >
              All Products
            </Button>

            <Button
              bg={"#E4F5ED"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#70bd99"
              borderRadius="15px"
              m={"10px"}
              value="Nutrition"
              onClick={(e) => {
                handleNutrition(e.target.value);
              }}
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
              value="Hair"
              onClick={(e) => {
                handleHair(e.target.value);
              }}
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
              value="Beard"
              onClick={(e) => {
                handleBeard(e.target.value);
              }}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#DDEFEC",
                boxShadow: "5px 5px 8px #69afa3",
              }}
            >
              Beard
            </Button>
            <Button
              bg={"#F2ECEC"}
              p={{ base: "10px 30px", lg: "27px 80px" }}
              fontSize={{ base: "xs", lg: "md" }}
              color="#b09999"
              borderRadius="15px"
              m={"10px"}
              value="New Launch"
              onClick={(e) => {
                handleNewLaunch(e.target.value);
              }}
              _hover={{
                cursor: "pointer",
                backgroundColor: "#F2ECEC",
                boxShadow: "5px 5px 8px #b09999",
              }}
            >
              New Launches
            </Button>
          </Grid>
        </Box>

        <hr />

        <Box display={{ base: "", lg: "flex" }}>
          {/* <Sidebar/> */}
          <Box
            id="categary-name"
            display={{ base: "flex", lg: "block" }}
            justifyContent={{ base: "space-between", lg: "none" }}
            width={{ base: "100%", lg: "20vw" }}
            alignItems="center"
            height={{ base: "15vh", lg: "90vh" }}
            position="sticky"
            top={{ base: "4vh", lg: "8vh" }}
            backgroundColor="white" // Set the background color as needed
            zIndex="1000"
            // border="5px solid red"
            borderRight="1px solid lightgray"
          >
            <Heading
              color="#565656"
              textAlign="center"
              width={{ base: "", lg: "14vw" }}
              m="auto"
              size={{ base: "sm", lg: "lg" }}
            >
              {cetagoryName}
            </Heading>
            <Box>
              <Select
                fontSize={{ base: "sm", lg: "lg" }}
                width={{ base: "130px", lg: "174px" }}
                focusBorderColor="transparent"
                fontWeight="500"
                color="gray.700"
                m={{ base: "0", lg: " 20px auto" }}
                onChange={handleSort}
              >
                <option value="">Sort by Price</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
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
                m={{ base: "0", lg: " 20px auto" }}
                onChange={(e) => setRating(+e.target.value + 1)}
              >
                <option value="">Filter by Rating</option>
                <option value="4">Above 4</option>
                <option value="3">Above 3</option>
                <option value="2">Above 2</option>
              </Select>
              <hr />
            </Box>
          </Box>
          <Box id="products" p="10px">
            {loading && (
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
                w={{ base: "75vw", lg: "80vw" }}
                m="auto"
                alignItems={"center"}
              >
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
                <Skeleton
                  height="80"
                  width={{ base: "75vw", lg: "20vw" }}
                ></Skeleton>
              </Grid>
            )}
            {!loading && (
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
                w="80vw"
                m="auto"
                alignItems={"center"}
                // border="2px solid"
              >
                {data?.map((property, i) => (
                  <Card2 property={property} key={i} />
                ))}
              </Grid>
            )}
            <Box
              id="pagination-btn"
              display="flex"
              width={{ base: "80vw", lg: "20vw" }}
              justifyContent="center"
              m="25px auto"
            >
              {Array.from({ length: totalButton }, (_, index) => (
                <Button
                  borderRadius={"50%"}
                  key={index}
                  colorScheme="teal"
                  m="2"
                  onClick={() => handlePage(index + 1)}
                  _hover={{
                    cursor: "pointer",
                    // backgroundColor: "#E4F5ED",
                    boxShadow: "0px 0px 20px 0px #6dd5a4",
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
