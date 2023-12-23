import React from "react";
import "../data/styles.css";
import data from "../data/data";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import { Card2 } from "../Componants/Card";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { motion } from "framer-motion";

export const Home = () => {
  //hover
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch()
  const daata = useSelector((store)=>store.ProductReducer.products)
  const loading = useSelector((store) => store.ProductReducer.isLoading);

  
  let paramObj = {
    params:{
      limit:4,
      page:1,
      category: category,

    }
  }

  useEffect(()=>{
    dispatch(getProducts(paramObj))
  },[category])
  
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

// frame animation
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


  return (
    <div>
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
      {/* Consult On App */}
      <Heading m="3% 10% 3% 11%" size="lg">
        Expert Advice that Works
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w={"80%"}
        m="auto"
        alignItems={"center"}
      >
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          className="card"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius="0 0 20px 20px"
          m={{ base: "20px" }}
        >
          <Box bg={"#E1EFF8"} pos="relative" borderRadius="0 0 20px 20px">
            <Flex
              align="center"
              alignItems="center"
              height={{ base: "13vh", lg: "25vh" }}
            >
              <Image
                h={{ base: "200px", lg: "300px" }}
                pos="absolute"
                left={{ base: "", lg: "" }}
                bottom={{ base: "0", lg: "0px" }}
                src={
                  "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/doc%202_6ku9ii.png?tr=w-500"
                }
                alt="article_1"
                borderRadius="lg"
              />
              <Heading
                color={"#5194D1"}
                ml={{ base: "40%", lg: "39%" }}
                size={{ base: "sm", lg: "lg" }}
                fontWeight={"bold"}
              >
                Consult on App
              </Heading>
              <Image
                m={"15px"}
                mt={"18px"}
                h={{ base: "30px", lg: "45px" }}
                src={
                  "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/blarr_PfFHZtvMd.png"
                }
                alt="article_1"
                borderRadius="lg"
              />
            </Flex>
            <div
              style={{
                backgroundColor: "#5194D1",
                borderRadius: "0 0 20px 20px",
                width: "100%",
                height: "30px",
              }}
            ></div>
          </Box>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          className="card"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius="0 0 20px 20px"
          m={{ base: "20px" }}
        >
          <Box pos="relative" bg={"#E1EFF8"} borderRadius="0 0 20px 20px">
            <Flex
              align="center"
              alignItems="center"
              height={{ base: "13vh", lg: "25vh" }}
            >
              <Image
                h={{ base: "200px", lg: "300px" }}
                pos="absolute"
                bottom={{ base: "0vh", lg: "0px" }}
                left={{ base: "", lg: "" }}
                src={
                  "https://i.mscwlns.co/media/misc/sub_category_pages/general-hair-health/Image-4.2---Assessment-nudge_v6J8A_G8z.png?tr=w-500"
                }
                alt="article_1"
                borderRadius="lg"
              />
              <Heading
                color={"#5194D1"}
                ml={{ base: "42%", lg: "44%" }}
                size={{ base: "sm", lg: "lg" }}
                fontWeight={"bold"}
              >
                Assess Myself
              </Heading>
              <Image
                m={"15px"}
                mt={"18px"}
                h={{ base: "30px", lg: "45px" }}
                src={
                  "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/blarr_PfFHZtvMd.png"
                }
                alt="article_1"
                borderRadius="lg"
              />
            </Flex>
            <div
              style={{
                backgroundColor: "#5194D1",
                borderRadius: "0 0 20px 20px",
                width: "100%",
                height: "30px",
              }}
            ></div>
          </Box>
        </Card>
      </Grid>
      {/* 3L+ Consults */}
      <Flex
        justifyContent="space-evenly"
        gap="30px"
        w={{ base: "70vw", lg: "50vw" }}
        m="auto"
        alignItems={"center"}
        mt={{ base: "50px", lg: "60px" }}
        mb={{ base: "50px", lg: "60px" }}
      >
        <Card data-aos="fade-right" data-aos-duration="1500">
          <CardBody
            bgColor="#E1EFF8"
            align="center"
            p={{ base: "10px", lg: "50px" }}
          >
            <Image
              bg={"#E1EFF8"}
              w={{ base: "80vw", lg: "5vw" }}
              p={"10%"}
              src={
                "https://i.mscwlns.co/media/bebodywise/tmarkers/trust/1_Bw82nMjZZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664231347"
              }
              alt="article_1"
            />
            <Stack textAlign={"left"}></Stack>
          </CardBody>
          <Text
            color={"gray.500"}
            fontWeight="500"
            mt={"10px"}
            textAlign={"center"}
          >
            3L+ Consults
          </Text>
        </Card>
        <Card data-aos="fade-right" data-aos-duration="1500">
          <CardBody
            bgColor="#E1EFF8"
            align="center"
            p={{ base: "10px", lg: "50px" }}
          >
            <Image
              bg={"#E1EFF8"}
              w={{ base: "80vw", lg: "5vw" }}
              p={"10%"}
              src={
                "https://i.mscwlns.co/media/bebodywise/tmarkers/trust/2_athIadUPU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664231703"
              }
              alt="article_1"
            />
            <Stack textAlign={"left"}></Stack>
          </CardBody>
          <Text
            color={"gray.500"}
            fontWeight="500"
            mt={"10px"}
            textAlign={"center"}
          >
            150+ Doctors
          </Text>
        </Card>
        <Card data-aos="fade-right" data-aos-duration="1500">
          <CardBody
            bgColor="#E1EFF8"
            align="center"
            p={{ base: "10px", lg: "50px" }}
          >
            <Image
              bg={"#E1EFF8"}
              w={{ base: "80vw", lg: "5vw" }}
              p={"10%"}
              src={
                "https://i.mscwlns.co/media/bebodywise/tmarkers/trust/3_lmdAT-6cE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675664231687"
              }
              alt="article_1"
            />
            <Stack textAlign={"left"}></Stack>
          </CardBody>
          <Text
            color={"gray.500"}
            fontWeight="500"
            mt={"10px"}
            textAlign={"center"}
          >
            10L+ Customer
          </Text>
        </Card>
      </Flex>
      {/* Beared Nutriton Performance */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w="80%"
        m="auto"
        mb="7%"
        alignItems={"center"}
      >
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <CardBody p={"0"} align="center">
            <Image
              backgroundColor="#F2ECEC"
              src={
                "https://i.mscwlns.co/media/misc/other/home-rcl/3_Jk-73vm_j.png?tr=w-500"
              }
              alt="article_1"
            />
            <Stack
              _hover={{
                bg: "black",
                textColor: "white",
                borderRadius: "7px",
              }}
              textAlign={"left"}
            >
              <Heading ml={"10px"} textAlign={"left"} size="sm">
                Beared <ChevronRightIcon />
              </Heading>
              <Text ml={"10px"}>
                Patchy Beard | Beard Growth | Healthy Beard
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <CardBody p={"0"} align="center">
            <Image
              backgroundColor="#FCE9E9"
              src={
                "https://i.mscwlns.co/media/misc/other/home-rcl/4_EHvSVJQ1c.png?tr=w-500"
              }
              alt="article_1"
            />
            <Stack
              _hover={{
                bg: "black",
                textColor: "white",
                borderRadius: "7px",
              }}
              textAlign={"left"}
            >
              <Heading ml={"10px"} textAlign={"left"} size="sm">
                Performance <ChevronRightIcon />
              </Heading>
              <Text ml={"10px"}>
                Sexual Health | Vitality | Stamina | Stamina{" "}
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <CardBody p={"0"} align="center">
            <Image
              backgroundColor="#E4F5ED"
              src={
                "https://i.mscwlns.co/media/misc/other/home-rcl/2_eC69YoDSw.png?tr=w-500"
              }
              alt="article_1"
            />
            <Stack
              _hover={{
                bg: "black",
                textColor: "white",
                borderRadius: "7px",
              }}
              textAlign={"left"}
            >
              <Heading ml={"10px"} textAlign={"left"} size="sm">
                Nutrition <ChevronRightIcon />
              </Heading>
              <Text ml={"10px"}>Nutrition | Metabolism | Immunity</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <CardBody p={"0"} align="center">
            <Image
              backgroundColor="#FEF3EA"
              src={
                "https://i.mscwlns.co/media/misc/other/home-rcl/5_3fhACuk5-.png?tr=w-500"
              }
              alt="article_1"
            />
            <Stack
              _hover={{
                bg: "black",
                textColor: "white",
                borderRadius: "7px",
              }}
              textAlign={"left"}
            >
              <Heading ml={"10px"} textAlign={"left"} size="sm">
                Skin <ChevronRightIcon />
              </Heading>
              <Text ml={"10px"}>Acne | Pigmentation | Anti-Aging | Pimple</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <CardBody p={"0"} align="center">
            <Image
              src={
                "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled-1_jha49v.png?tr=w-500"
              }
              alt="article_1"
            />
            <Stack
              _hover={{
                cursor: "pointer",
                bg: "black",
                textColor: "white",
                borderRadius: "7px",
              }}
              textAlign={"left"}
            >
              <Heading ml={"10px"} textAlign={"left"} size="sm">
                Quit Smoking <ChevronRightIcon />
              </Heading>
              <Text ml={"10px"}>
                Quitting Smoking | Quitting Vaping | Quit Smoking
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <CardBody p={"0"} align="center">
            <Image
              backgroundColor="#E8F4FF"
              src={
                "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Homepage_hair_category_card_I-4woJERa.png?tr=w-500"
              }
              alt="article_1"
            />
            <Stack
              _hover={{
                bg: "black",
                textColor: "white",
                borderRadius: "7px",
              }}
              textAlign={"left"}
            >
              <Heading ml={"10px"} textAlign={"left"} size="sm">
                Hair <ChevronRightIcon />
              </Heading>
              <Text ml={"10px"}>Hair Fall | Hair Growth | Dandruff</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>
      {/* 30%CashBack Awaits */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        justifyContent="center"
        height={{ base: "", lg: "50vh" }}
        w={"100%"}
        // border='2px solid red'
        mt={"10px"}
        mb={"10px"}
        alignItems={"center"}
        bgColor="#E1EFF8"
      >
        <Card
          p={"0px"}
          pb={"0px"}
          //  heigth="100%"
          data-aos="fade-right"
          data-aos-duration="1500"
          // borderRadius={"80px"}
        >
          <Box borderColor={"#E1EFF8"} bgColor="#E1EFF8">
            <Center>
              <Heading
                textAlign={"center"}
                mt="15px"
                mb="15px"
                color={"#5194D1"}
                size="lg"
                fontWeight={"bold"}
              >
                30% Cashback Awaits 🤯
              </Heading>
            </Center>
            <Center>
              <Heading textAlign={"center"} color={"#5194D1"} size="sl">
                Rewards for building habits 💸
              </Heading>
            </Center>
            <Center>
              <Heading textAlign={"center"} color={"#5194D1"} size="sl">
                Text doctors & fellow users 💬
              </Heading>
            </Center>
            <Center>
              <Heading textAlign={"center"} color={"#5194D1"} size="sl">
                Unlimited Doctor Consultations 🩺
              </Heading>
            </Center>
            <Center>
              <Heading
                textAlign={"center"}
                mt="15px"
                mb="15px"
                color={"#5194D1"}
                size="lg"
              >
                What are you waiting for? Download Now!!
              </Heading>
            </Center>
            <Center>
              <Flex>
                <Image
                  h={"45px"}
                  src={
                    "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  }
                  alt="article_1"
                />
                <Image
                  h={"45px"}
                  src={
                    "https://i.mscwlns.co/media/misc/landing_pages/home-rcl/Untitled_design__88__hPcMy7SlL.png?tr=w-600"
                  }
                  alt="article_1"
                />
              </Flex>
            </Center>
          </Box>
        </Card>
        <Card
          bg={"#E1EFF8"}
          p={"10px"}
          pb={"0px"}
          // borderRadius={"0px"}
        >
          <Box>
            <Center>
              <Image
                h={{ base: "", lg: "48vh" }}
                w={"65vh"}
                src={
                  "https://i.mscwlns.co/mosaic-wellness/image/upload/v1654071511/Man%20Matters/Random/App%20download%20cards/Group-Of-Men_1.png?tr=w-800"
                }
                alt="article_1"
              />
            </Center>
          </Box>
        </Card>
      </Grid>
      <Text ml={"10%"} mt="8" fontWeight="bold" fontSize="3xl">
        Best Sellers
      </Text>
      <Text ml={"10%"} mt="8" mb="8" fontSize="xl">
        Browse our best sellers by type of your concerns
      </Text>
      {/* Product Card ANd Filter */}
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
          value="Hair"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
          m={"10px"}
          _hover={{ cursor: "pointer", backgroundColor: "#5194D1", boxShadow: "5px 5px 8px #82b8eb" }}
        >
          Hair
        </Button>
        <Button
          bg={"#F2ECEC"}
          p={{ base: "10px 30px", lg: "27px 80px" }}
          fontSize={{ base: "xs", lg: "md" }}
          color="#b09999"
          borderRadius="15px"
          value="Beard"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
          m={"10px"}
          _hover={{ cursor: "pointer", backgroundColor: "#F2ECEC", boxShadow: "5px 5px 8px #b09999" }}
        >
          Beard
        </Button>
        <Button
          bg={"#E4F5ED"}
          p={{ base: "10px 30px", lg: "27px 80px" }}
          fontSize={{ base: "xs", lg: "md" }}
          color="#70bd99"
          borderRadius="15px"
          value="Nutrition"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
          m={"10px"}
          _hover={{ cursor: "pointer", backgroundColor: "#E4F5ED", boxShadow: "5px 5px 8px #70bd99" }}
        >
          Nutrition
        </Button>
        <Button
          bg={"#FAE9E9"}
          p={{ base: "10px 30px", lg: "27px 80px" }}
          fontSize={{ base: "xs", lg: "md" }}
          color="#bc8888"
          borderRadius="15px"
          value="Beard"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
          m={"10px"}
          _hover={{ cursor: "pointer", backgroundColor: "#FAE9E9", boxShadow: "5px 5px 8px #bc8888" }}
        >
          Performance
        </Button>
        <Button
          bg={"#DDEFEC"}
          p={{ base: "10px 30px", lg: "27px 80px" }}
          fontSize={{ base: "xs", lg: "md" }}
          color="#69afa3"
          borderRadius="15px"
          value="Hair"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
          m={"10px"}
          _hover={{ cursor: "pointer", backgroundColor: "#DDEFEC", boxShadow: "5px 5px 8px #69afa3" }}
        >
          Body
        </Button>
        <Button
          bg={"#FEF3EA"}
          p={{ base: "10px 30px", lg: "27px 80px" }}
          fontSize={{ base: "xs", lg: "md" }}
          color="#b88052"
          borderRadius="15px"
          value="Nutrition"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
          m={"10px"}
          _hover={{ cursor: "pointer", backgroundColor: "#FEF3EA", boxShadow: "5px 5px 8px #b88052" }}
        >
          Skin
        </Button>
      </Grid>
      {loading && <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w="80%"
        m="auto"
        alignItems={"center"}
      >
        <Skeleton height="80" width={{ base: "75vw", lg: "18vw" }}></Skeleton>
              <Skeleton height="80" width={{ base: "75vw", lg: "18vw" }}></Skeleton>
              <Skeleton height="80" width={{ base: "75vw", lg: "18vw" }}></Skeleton>
              <Skeleton height="80" width={{ base: "75vw", lg: "18vw" }}></Skeleton>
      </Grid>}
      { !loading && <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w="80%"
        m="auto"
        alignItems={"center"}
      >
        {daata?.map((property) => (
          <Card2 property={property} />
        ))}
      </Grid>}
      {/* Asses Yourself Consult Free */}
      <Center>
        <Text fontWeight="bold" mt={"25px"} mb={"15px"} fontSize="3xl">
          How it works
        </Text>
      </Center>
      <Flex
        justifyContent="center"
        gap="20%"
        w={"80%"}
        m="auto"
        alignItems={"center"}
        mt={"15px"}
      >
        <Box w={"20%"}>
          <Image
            borderRadius={"50%"}
            src="https://i.mscwlns.co/media/misc/other/home-rcl/Untitled_design_-_2023-02-14T161116.978_baDXsxoof.png?tr=w-500"
          />
          <Center>
            <Text mt={"10px"}>Assess Yourself</Text>
          </Center>
        </Box>
        <Box w={"20%"}>
          <Image
            borderRadius={"50%"}
            src="https://i.mscwlns.co/media/misc/other/home-rcl/Untitled_design_-_2023-02-14T160453.970_Zf7K80ASa.png?tr=w-500"
          />
          <Center>
            <Text mt={"10px"}>Consult Free</Text>
          </Center>
        </Box>
        <Box w={"20%"}>
          <Image
            borderRadius={"50%"}
            src="https://i.mscwlns.co/media/misc/other/home-rcl/Untitled_design_-_2023-02-14T161558.401_sH3WhAYSE.png?tr=w-500"
          />
          <Center>
            <Text mt={"10px"}>Be Consistent</Text>
          </Center>
        </Box>
      </Flex>
      {/* Meet Our Experts */}
      <Text ml={"10%"} fontWeight="bold" fontSize="3xl">
        Meet Our Experts
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w={"90%"}
        m="auto"
        alignItems={"center"}
      >
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          className="card"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Box bg={"#E1EFF8"}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(2, 1fr)",
              }}
            >
              <Image
                h={"100%"}
                pos="relative"
                src={
                  "https://i.mscwlns.co/media/misc/category_pages/hair/1_WYkaxrs4J.png?tr=w-600"
                }
                alt="article_1"
                borderRadius="lg"
              />
              <Box
                ml={"40px"}
                mt={"20px"}
                color={"#49729F"}
                fontSize="2xl"
                fontWeight={"bold"}
              >
                Dr. Rohit Singh
                <Heading color={"#49729F"} size="sm">
                  MBBS, DPM
                </Heading>
                <Text
                  p={"30px"}
                  pl={"0px"}
                  color={"gray"}
                  fontWeight={{ base: "", lg: "500" }}
                  fontSize={{ base: "lg", lg: "xl" }}
                >
                  Dr. Sujit has honed his skills in various cosmetic procedures
                  and dermatology. His past experiences in New York, Chicago and
                  Derven, push him to deliver the best quality of hair treatment
                  to you.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
          className="card"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Box bg={"#E1EFF8"}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(2, 1fr)",
              }}
            >
              <Image
                h={"100%"}
                pos="relative"
                src={
                  "https://i.mscwlns.co/media/misc/category_pages/hair/4_uFxS6aANb.png?tr=w-600"
                }
                alt="article_1"
                borderRadius="lg"
              />
              <Box
                ml={"40px"}
                mt={"20px"}
                color={"#49729F"}
                fontSize="2xl"
                fontWeight={"bold"}
              >
                Dr. Rohit Singh
                <Heading color={"#49729F"} size="sm">
                  MBBS, DPM
                </Heading>
                <Text
                  p={"30px"}
                  pl={"0px"}
                  color={"gray"}
                  fontWeight={{ base: "", lg: "500" }}
                  fontSize={{ base: "lg", lg: "xl" }}
                >
                  Dr. Rohit Singh is a Consulting Psychiatrist with 3 years of
                  experience. He believes in a holistic approach to in treatment
                  of any condition. His areas of interest are sexual problems
                  like Erectile Dystfunction and Premature Ejaculation.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Card>
      </Grid>
      {/* Info Matters */}
      <Text fontWeight="bold" ml={"10%"} fontSize="3xl">
        Info Matters
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w="80%"
        m="auto"
        alignItems={"center"}
      >
        <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
          <Image
            height="30vh"
            src={
              "https://manmatters.com/blog/content/images/size/w1000/2022/10/guava-leaes-for-hair--3-.jpg"
            }
          />
          <Box pt="0">
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              isTruncated
              m={"7px"}
            >
              5Proven Tips For Growing Hair Faster
            </Box>
            <Box m={"7px"} as="h6" mt="1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quos deserunt facere at, libero recusandae quod veritatis
              excepturi et, quam exercitationem dolorum ducimus amet saepe
              quibusdam, commodi alias harum temporibus.
            </Box>
            <Box
              as="button"
              w={"100%"}
              bg="#22548A"
              color="white"
              py={2}
              mt="2"
            >
              Learn More
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
          <Image
            height="30vh"
            src={
              "https://manmatters.com/blog/content/images/size/w1000/2022/08/Untitled-design--27-_11zon.jpeg"
            }
          />
          <Box pt="0">
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              m={"7px"}
            >
              Research Backed Fish Oil Benefits for Men
            </Box>
            <Box m={"7px"} lineHeight="tight" as="h6" mt="1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quos deserunt facere at, libero recusandae quod veritatis
              excepturi et, quam exercitationem dolorum ducimus amet saepe
              quibusdam, commodi alias harum temporibus.
            </Box>
            <Box
              as="button"
              w={"100%"}
              bg="#22548A"
              color="white"
              py={2}
              mt="2"
            >
              Learn More
            </Box>
          </Box>
        </Box>
        <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
          <Center>
            <Image
              height="30vh"
              src={
                "https://manmatters.com/blog/content/images/size/w1000/2021/04/Gym_Rules_Every_Guy_Should_Know_unsaid_gym_rules2-1.jpg"
              }
            />
          </Center>
          <Box pt="0">
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              m={"7px"}
              isTruncated
            >
              5 Gym Rules Every Guy Should Know
            </Box>
            <Box lineHeight="tight" as="h6" mt="1" m={"7px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quos deserunt facere at, libero recusandae quod veritatis
              excepturi et, quam exercitationem dolorum ducimus amet saepe
              quibusdam, commodi alias harum temporibus.
            </Box>
            <Box
              as="button"
              w={"100%"}
              bg="#22548A"
              color="white"
              py={2}
              mt="2"
            >
              Learn More
            </Box>
          </Box>
        </Box>
      </Grid>
      <Center>
        <Text
          width={"80%"}
          textAlign={"center"}
          mt={"20px"}
          fontSize={{ base: "", lg: "xl" }}
          color="gray.600"
        >
          Complete your payment using any of these payment options
        </Text>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(7, 1fr)",
          xl: "repeat(7, 1fr)",
        }}
        justifyContent="center"
        gap="30px"
        w="80%"
        m="auto"
        mt={"40px"}
        mb={"40px"}
        alignItems={"center"}
      >
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/amex-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/master-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/visa-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/bhim-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/gpay-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/netbanking-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
        <Card
          data-aos="fade-right"
          data-aos-duration="1500"
          _hover={{
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 6px 0px, rgba(0, 0, 0, 0.06) 0px 0px 3px 1px",
          }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 2px"
        >
          <Image
            src={
              "https://i.mscwlns.co/mosaic-wellness/image/upload/v1603435295/staging/Home/Images/cash-icn.png?tr=w-200"
            }
            alt="article_1"
          />
        </Card>
      </Grid>
    </div>
  );
};
