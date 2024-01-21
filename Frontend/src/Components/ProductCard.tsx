import "../App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Card,
  Show,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { GetCartItems, SetCartItems } from "../Redux/CartReducer/action";

export const ProductCard = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
  const toast = useToast();
  const navigate = useNavigate();
  const [image, setImage] = useState(0);
  const [details, setDetails] = useState(true);
  const dispatch = useAppDispatch();
  const [cartData, setCartData] = useState<any>([]);
  const toggleCart = useAppSelector(
    (state: any) => state.CartReducer.toggleCart
  );
  const [el, setEl] = useState({
    image: "",
    price: 0,
    with: "",
    rating: 0,
    title: "",
  });
  const { id } = useParams();

  async function GetSingleProduct() {
    axios
      .get(`${API_URL}/product/products/${id}`)
      .then((res) => {
        setEl(res.data);
      })
      .catch((err: any) => {
        toast({
          title: "Something Went Wrong!",
          description: "This seems to be a server error, Please try again!",
          status: "error",
          position: "top",
        });
        console.log("Error getting Product Data:-", err);
      });
  }

  useEffect(() => {
    setCartData(GetCartItems());
  }, [toggleCart]);

  function handleAddToCart(obj: any) {
    let checkItem = cartData.filter((item: any) => item._id === obj._id);
    toast.closeAll();
    if (checkItem.length == 0) {
      cartData.push({ ...obj, itemQty: 1 });
      SetCartItems(dispatch, cartData);
      toast({
        position: "top",
        duration: 2500,
        render: () => (
          <Box borderRadius="" color="white" p={3} bg="#619ed8">
            <b>Item added to cart 👍</b>
          </Box>
        ),
      });
    } else {
      toast({
        position: "top",
        duration: 2500,
        render: () => (
          <Box borderRadius="" color="white" p={3} bg="#d86161">
            <b>Item already added to cart ✋</b>
          </Box>
        ),
      });
    }
  }

  function handleBuyNow(obj: any) {
    let checkItemBuy = cartData.filter((item: any) => item._id === obj._id);
    if (checkItemBuy.length == 0) {
      cartData.push({ ...obj, itemQty: 1 });
      SetCartItems(dispatch, cartData);
      navigate("/checkout");
    } else {
      navigate("/checkout");
    }
  }

  useEffect(() => {
    GetSingleProduct();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
      <div>
        <Text>
          Home{" "}
          <span style={{ color: "#5194D1" }}>
            {">"} {el?.with}
          </span>
        </Text>
        {/* images and product deatils with steps */}
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          justifyContent="center"
          height={{ base: "", lg: "" }}
          w={"100%"}
          mb={"10px"}
          alignItems={"center"}
        >
          <Box
            display={{ base: "flex", lg: "flex" }}
            flexDirection={{ base: "column-reverse", lg: "row" }}
            // templateColumns={{
            //   base: "repeat(1, 1fr)",
            //   sm: "repeat(1, 1fr)",
            //   md: "repeat(2, 1fr)",
            //   lg: "repeat(4, 1fr)",
            //   xl: "repeat(4, 1fr)",
            // }}
            w={"100%"}
            ml={"5px"}
          >
            <Box
              display={{ base: "flex", lg: "block" }}
              width={{ base: "99", lg: "9vw" }}
              height={{ base: "", lg: "80vh" }}
            >
              <Grid
                width={{ base: "25vw", lg: "9vw" }}
                height={{ base: "", lg: "18vh" }}
              >
                {el && (
                  <Image
                    onClick={() => setImage(0)}
                    border={image == 0 ? "2px solid #5194D1" : ""}
                    bg={"#E1EAF7"}
                    borderRadius={"5px"}
                    src={el?.image[0]}
                  />
                )}
              </Grid>
              <Grid
                width={{ base: "25vw", lg: "9vw" }}
                height={{ base: "", lg: "18vh" }}
              >
                {el && (
                  <Image
                    onClick={() => setImage(1)}
                    border={image == 1 ? "2px solid #5194D1" : ""}
                    bg={"#E1EAF7"}
                    borderRadius={"5px"}
                    src={el?.image[1]}
                  />
                )}
              </Grid>
              <Grid
                width={{ base: "25vw", lg: "9vw" }}
                height={{ base: "", lg: "18vh" }}
              >
                {el && (
                  <Image
                    onClick={() => setImage(2)}
                    border={image == 2 ? "2px solid #5194D1" : ""}
                    bg={"#E1EAF7"}
                    borderRadius={"5px"}
                    src={el?.image[2]}
                  />
                )}
              </Grid>
              <Grid
                width={{ base: "25vw", lg: "9vw" }}
                height={{ base: "", lg: "18vh" }}
              >
                {el && (
                  <Image
                    onClick={() => setImage(3)}
                    border={image == 3 ? "2px solid #5194D1" : ""}
                    bg={"#E1EAF7"}
                    borderRadius={"5px"}
                    src={el?.image[3]}
                  />
                )}
              </Grid>
            </Box>
            <Box
              mb={1}
              w={{ base: "100vw", lg: "42vw" }}
              h={{ base: "45vh", lg: "68vh" }}
            >
              {el && (
                <Image
                  w={"100%"}
                  h={"100%"}
                  ml={{ base: "", lg: "3px" }}
                  objectFit={"fill"}
                  src={el?.image[image]}
                />
              )}
            </Box>
          </Box>

          <Grid className="body" w={"100%"} pb={"0px"} ml={"5%"}>
            <Text color={"gray"} mt="15px" mb="15px">
              {el?.with}
            </Text>
            <Heading size="lg" fontWeight={"bold"} mb={"7px"}>
              {el?.title}
            </Heading>
            <Heading color={"black"} size="sl">
              ₹{el?.price}{" "}
              <span
                style={{
                  color: "gray",
                  textDecorationLine: "line-through",
                  marginLeft: "5px",
                  marginRight: "10px",
                }}
              >
                {el?.price + 195}
              </span>
              <Badge borderRadius="full" px="2" bg={"#5194D1"}>
                {Math.floor(195 / (Number(el?.price) / 100))}% off
              </Badge>
            </Heading>
            <Text color={"gray"}>MRP Inclusive of all Taxes</Text>
            <Box ml="8px" display="flex" alignItems="baseline">
              <Box display="flex" alignItems="center">
                {el?.rating}
                {Array(5)
                  .fill("")
                  .map((_, i: any) => (
                    <StarIcon
                      key={i}
                      color={i < el.rating ? "gold" : "gray.300"}
                    />
                  ))}
                <Box as="span" color="gray.600" fontSize="sm" ml="2">
                  {Number(el?.price) - 150} reviews | {Number(el?.price) * 23}{" "}
                  Units Sold
                </Box>
              </Box>
            </Box>
            <Heading mt={"30px"} mb={"10px"} size="sl">
              Step 1: Select Your Stage of Hair Fall
            </Heading>
            <Flex gap={"10"}>
              <Grid w={"15%"}>
                <Image
                  p={"5px"}
                  bg={"#E1EAF7"}
                  borderRadius={"5px"}
                  border={"1px solid #5194D1"}
                  src="https://i.mscwlns.co/media/misc/pdp_rcl/1605/stage_1_NYWsWu0LV.png?tr=w-150"
                />
                <Text
                  color={"#6186BC"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Stage 1
                </Text>
              </Grid>
              <Grid w={"15%"}>
                <Image
                  p={"5px"}
                  bg={"#E1EAF7"}
                  borderRadius={"5px"}
                  border={"1px solid #5194D1"}
                  src="https://i.mscwlns.co/media/misc/pdp_rcl/1605/stage_2_jhOrHJ-9Ha.png?tr=w-150"
                />
                <Text
                  color={"#6186BC"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Stage 2
                </Text>
              </Grid>
              <Grid w={"15%"}>
                <Image
                  p={"5px"}
                  bg={"#E1EAF7"}
                  borderRadius={"5px"}
                  border={"1px solid #5194D1"}
                  src="https://i.mscwlns.co/media/misc/pdp_rcl/1605/stage_3_gDrWOCx_b.png?tr=w-150"
                />
                <Text
                  color={"#6186BC"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Stage 3
                </Text>
              </Grid>
              <Grid w={"15%"}>
                <Image
                  p={"5px"}
                  bg={"#E1EAF7"}
                  borderRadius={"5px"}
                  border={"1px solid #5194D1"}
                  src="https://i.mscwlns.co/media/misc/pdp_rcl/1605/stage_4_0duSk-qns.png?tr=w-150"
                />
                <Text
                  color={"#6186BC"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Stage 4
                </Text>
              </Grid>
            </Flex>
            <Heading mb={"10px"} mt={"20px"} size="sl">
              Step 2: Experiencing hair fall since
            </Heading>
            <Flex gap={"20px"}>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Less than 1 year
              </Button>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                More than 1 year
              </Button>
            </Flex>
            <Heading mb={"10px"} mt={"15px"} size="sl">
              Step 3: Select your scalp condition
            </Heading>
            <Flex gap={"20px"}>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                No Dandruff
              </Button>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Dandruff
              </Button>
            </Flex>
            <Heading mb={"10px"} mt={"15px"} size="sl">
              Step 4: Select your concerns
            </Heading>
            <Flex gap={"20px"}>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Diet
              </Button>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Stress
              </Button>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Scalp Health
              </Button>
            </Flex>
            <Heading mb={"10px"} mt={"15px"} size="sl">
              Step 5: Select your booster
            </Heading>
            <Flex mb={"30px"} gap={"20px"}>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                None
              </Button>
              <Button
                bg={"white"}
                color={"#5194D1"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Derma Roller
              </Button>
            </Flex>
            <div style={{ border: "1px solid black", margin: "3px" }}></div>
            <Heading size={"md"} mb={"20px"}>
              <span
                style={{
                  marginRight: "30px",
                  color: details ? "Black" : "gray",
                  textDecorationLine: details ? "underline" : "",
                }}
                onClick={() => setDetails(true)}
              >
                Details
              </span>
              <span
                style={{
                  color: !details ? "Black" : "gray",
                  textDecorationLine: !details ? "underline" : "",
                }}
                onClick={() => setDetails(false)}
              >
                How to Use ?
              </span>
            </Heading>
            {details ? (
              <div>
                <Text pr={"5%"} mb={"20px"}>
                  ⚠️If you have{" "}
                  <span style={{ fontWeight: "bold" }}>
                    receding hairline or bald spots on the crown,
                  </span>{" "}
                  use our Stage 2 Hair fall Kit
                </Text>
                <Text pr={"5%"} mb={"20px"}>
                  If you've been battling hair loss for over a year, it's time
                  to take action. Our kit combines twopowerful treatments to
                  address your long-term hair fall:
                </Text>
                <Text pr={"5%"} mb={"20px"}>
                  This treatment kit contains:
                </Text>
                <Text pr={"5%"}>
                  <span style={{ fontWeight: "bold" }}>💥 Biotin Gummies</span>{" "}
                  Combat hair fall, promote growth.
                </Text>
                <Text pr={"5%"} mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}>
                    🌿 Advanced Growth Serum:
                  </span>{" "}
                  Anagain, Redensyl, Procapil + Rosemary extracts fight hair
                  fall, boost growth.
                </Text>
                <Text mb={"20px"}>🚀 How to Use:</Text>
                <Text pr={"5%"}>
                  <span style={{ fontWeight: "bold" }}>💥 Biotin Gummies</span>{" "}
                  Take one gummy daily.
                </Text>
                <Text pr={"5%"} mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}>
                    🌿 Advanced Growth Serum:
                  </span>{" "}
                  Apply on scalp twice everyday, massage. Leave on for 2 hours
                  or overnight.{" "}
                </Text>
                <Text pr={"5%"} mb={"20px"}>
                  Complete{" "}
                  <span style={{ fontWeight: "bold" }}>3 months routine</span>{" "}
                  to see visible results
                </Text>
                <Flex gap={"10"} mb={"10px"}>
                  <Grid w={"15%"}>
                    <Image
                      p={"5px"}
                      borderRadius={"5px"}
                      src="https://i.mscwlns.co/mosaic-wellness/image/upload/v1628670504/Man%20Matters/New%20tonic/New%20format/icons/No_Side_Effects.png?tr=w-800"
                    />
                    <Text textAlign={"center"}>No Side Effects</Text>
                  </Grid>
                  <Grid w={"15%"}>
                    <Image
                      p={"5px"}
                      borderRadius={"5px"}
                      src="https://i.mscwlns.co/mosaic-wellness/image/upload/v1629111851/Man%20Matters/Minoxidil%20New%20format/Claims/Clinically_Tested.png?tr=w-800"
                    />
                    <Text textAlign={"center"}>Clinically Tested</Text>
                  </Grid>
                  <Grid w={"15%"}>
                    <Image
                      p={"5px"}
                      borderRadius={"5px"}
                      src="https://i.mscwlns.co/mosaic-wellness/image/upload/v1598396408/Man%20Matters/Hair%20Gummies/9.png?tr=w-800"
                    />
                    <Text textAlign={"center"}>No Added Sugar</Text>
                  </Grid>
                  <Grid w={"15%"}>
                    <Image
                      p={"5px"}
                      borderRadius={"5px"}
                      src="https://i.mscwlns.co/media/misc/pdp_rcl/141464/5%20months_6j3jzy.png?tr=w-600"
                    />
                    <Text textAlign={"center"}>5 Month Routine</Text>
                  </Grid>
                </Flex>
                <Text pr={"5%"} mb={"20px"}>
                  <span
                    style={{
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    Download the Man Matters App{" "}
                  </span>{" "}
                  and save upto 30% using Wallet!{" "}
                </Text>
              </div>
            ) : (
              <div>
                <Text mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}> 1: </span>Take 2-3 drops
                  of this leave-in treatment and apply at night.
                </Text>
                <Text mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}>2: </span>Massage until
                  absorbed.
                </Text>
                <Text mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}>3: </span>Do not wash
                  hair or scalp until 6-7 hours post application
                </Text>
                <Text mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}>4: </span>For best
                  results, massage with Scalp Massager
                </Text>
                <Text mb={"20px"}>
                  <span style={{ fontWeight: "bold" }}>5: </span>Have one gummy
                  per day after any meal
                </Text>
              </div>
            )}
          </Grid>
        </Grid>
        <Image
          w={"100%"}
          src="https://i.mscwlns.co/media/misc/pdp_rcl/141464/Creative-1%281000X1000%29%20%281%29_cv8ud7.jpg?tr=w-600"
          alt=""
        />
        {/* What Does the product do */}
        <Heading m={"10px"} ml={"5%"}>
          What Does the product do
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          justifyContent="center"
          gap="30px"
          w="90%"
          m="auto"
          alignItems={"center"}
        >
          <Box maxW="sm" borderRadius="lg" overflow="hidden">
            <Box position={"relative"}>
              <Image
                borderRadius={"10px"}
                w={"100%"}
                src={
                  "https://i.mscwlns.co/media/misc/pdp_rcl/26166729/Minox_1_sJQgw2Rgq.gif?tr=w-500"
                }
              />
              <button className="btn">Step 1</button>
            </Box>
            <Box pt="0">
              <Box
                fontWeight="semibold"
                lineHeight="tight"
                as="h4"
                mt="1"
                m={"7px"}
              >
                After 2 months - Reduced hair breakage
              </Box>
              <Box m={"7px"} as="h6" mt="1">
                Minoxidil 5% Solution works from the roots to promote hair
                growth. When applied, this Minoxidil topical solution stimulates
                follicles and does away with weak hair For strong result.
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderRadius="lg" overflow="hidden">
            <Box position={"relative"}>
              <Image
                borderRadius={"10px"}
                w={"100%"}
                src={
                  "https://i.mscwlns.co/media/misc/pdp_rcl/26166729/Minox_2_1rtjOu3uz.gif?tr=w-500"
                }
              />
              <button className="btn">Step 2</button>
            </Box>
            <Box pt="0">
              <Box
                fontWeight="semibold"
                lineHeight="tight"
                as="h4"
                mt="1"
                m={"7px"}
              >
                After 3 months - Visible baby hair growth
              </Box>
              <Box m={"7px"} as="h6" mt="1">
                Minoxidil 5% Solution stimulates the scalp and boosts the
                process of hair growth in places where there is scanty growth.
                With continuous use, Minoxidil helps in covering bald patches by
                .
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderRadius="lg" overflow="hidden">
            <Box position={"relative"}>
              <Image
                borderRadius={"10px"}
                w={"100%"}
                src={
                  "https://i.mscwlns.co/media/misc/pdp_rcl/26166752/Untitled_design__15___1__fh3W9dab2.gif?tr=w-500"
                }
              />
              <button className="btn">Step 3</button>
            </Box>
            <Box pt="0">
              <Box
                fontWeight="semibold"
                lineHeight="tight"
                as="h4"
                mt="1"
                m={"7px"}
              >
                After 4 months - Increase in hair volume
              </Box>
              <Box m={"7px"} as="h6" mt="1">
                Biotin in these multivitamin gummies helps improve keratin
                structure - an essential component for volumizing growth.
                Regular intake of these biotin gummies results in thicker and
                stronger.
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderRadius="lg" overflow="hidden">
            <Box position={"relative"}>
              <Image
                borderRadius={"10px"}
                w={"100%"}
                src={
                  "https://i.mscwlns.co/media/misc/pdp_rcl/26166752/Untitled_design__13___1__hwHZZj1bl.gif?tr=w-500"
                }
              />
              <button className="btn">Step 4</button>
            </Box>
            <Box pt="0">
              <Box
                fontWeight="semibold"
                lineHeight="tight"
                as="h4"
                mt="1"
                m={"7px"}
              >
                After 6 months - Improved hair health & density
              </Box>
              <Box m={"7px"} as="h6" mt="1">
                Minoxidil and biotin gummies work together to provide the hair
                nutrients essential for strengthening the hair cuticles for
                healthy hair growth, curbing hair fall.
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* Key Ingredients */}
        <Heading m={"10px"} ml={"5%"}>
          Key Ingredients
        </Heading>
        <div className="scrollmenu" style={{ display: "flex" }}>
          <Box
            m={"10px"}
            color={"white"}
            maxWidth={"500px"}
            pl={"10px"}
            p={"10px"}
            borderRadius={"5px"}
            bg={"#5194D1"}
          >
            <Heading>Minoxidil</Heading>
            <Text> Minoxidil topical solution stmulates hair</Text>
            <Text>growth and slows down the balding process</Text>
            <Button m={"10px"}>Learn More</Button>
          </Box>
          <Box
            m={"10px"}
            color={"white"}
            maxWidth={"500px"}
            pl={"10px"}
            p={"10px"}
            borderRadius={"5px"}
            bg={"#5194D1"}
          >
            <Heading>Procapil</Heading>
            <Text> A new breakthrough Formula that </Text>
            <Text>Straingths hair and prevent hair loss</Text>
            <Button m={"10px"}>Learn More</Button>
          </Box>
          <Box
            m={"10px"}
            color={"white"}
            maxWidth={"500px"}
            pl={"10px"}
            p={"10px"}
            borderRadius={"5px"}
            bg={"#5194D1"}
          >
            <Heading>Biotin</Heading>
            <Text> Biotin is known to improve keratin </Text>
            <Text>which thickness hair and stimulates</Text>
            <Button m={"10px"}>Learn More</Button>
          </Box>
          <Box
            m={"10px"}
            color={"white"}
            maxWidth={"500px"}
            pl={"10px"}
            p={"10px"}
            borderRadius={"5px"}
            bg={"#5194D1"}
          >
            <Heading>Zinc</Heading>
            <Text>Zinc has hair strenth properties</Text>
            <Text>Zinc has hair strenth properties</Text>
            <Button m={"10px"}>Learn More</Button>
          </Box>
          <Box
            m={"10px"}
            color={"white"}
            maxWidth={"500px"}
            pl={"10px"}
            p={"10px"}
            borderRadius={"5px"}
            bg={"#5194D1"}
          >
            <Heading>Minoxidil</Heading>
            <Text> Minoxidil topical solution stmulates hair</Text>
            <Text>growth and slows down the balding process</Text>
            <Button m={"10px"}>Learn More</Button>
          </Box>
          <Box
            m={"10px"}
            color={"white"}
            maxWidth={"500px"}
            pl={"10px"}
            p={"10px"}
            borderRadius={"5px"}
            bg={"#5194D1"}
          >
            <Heading>Procapil</Heading>
            <Text> A new breakthrough Formula that </Text>
            <Text>Straingths hair and prevent hair loss</Text>
            <Button m={"10px"}>Learn More</Button>
          </Box>
        </div>
        {/* Expert Advice that Works */}
        <Heading color={"#5194D1"} m="3% 0% 0% 11%" size="lg">
          Expert Advice that Works
        </Heading>
        <Heading color={"black"} m="0% 0% 0% 11%" size="sm">
          Consult our experts or take the self assessment test to get a
          personalized solution
        </Heading>
        {/* Take free hair test */}
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
          w={"100%"}
          bg={"#E1EFF8"}
          m="auto"
          alignItems={"center"}
        >
          <Grid m={"auto"}>
            <Image
              w={"200px"}
              src="https://i.mscwlns.co/media/misc/pdp_rcl/22189260/DOC-3_i1tc75.png?tr=w-500"
            />
          </Grid>
          <Grid textAlign={"center"}>
            <Heading>Take Free Hair Test 👨🏻‍🦱</Heading>
            <Text color={"gray"}>Understand your Concern</Text>
            <Center>
              <Button
                w={"20%"}
                bg={"#5194D1"}
                color={"white"}
                p={"25px 30px 25px 30px"}
                borderRadius={"10px"}
                border={"1px solid #5194D1"}
              >
                Click Here
              </Button>
            </Center>
          </Grid>
        </Grid>
        {/* Question And Answer */}
        <Heading textAlign={"center"} m={"15px"}>
          Question And Answer
        </Heading>
        <Grid w={"90%"} m={"auto"}>
          <Heading fontSize={"20px"}>Q. There will be no side effects</Heading>
          <Text color={"gray"}>
            A. Hi Sharma, This kit contains Hair Gummies & Minoxidil hair tonic
            which provide the required nutrition & nourishment for healthy hair.
            There is no side effect on our product. However, to know how to use
            this kit effectively, we recommend speaking to your doctor first.
            Please book a free consultation with our expert doctor at
            mattrs.in/49p8s6 The doctor will understand your case in detail &
            suggest the best way forward. Cheers, Team Man Matters 🙂
          </Text>
          <Heading fontSize={"20px"} mt={"10px"}>
            Sharma
          </Heading>
          <Text color={"gray"}>22/11/23</Text>
          <hr style={{ margin: "10px" }} />
          <Heading fontSize={"20px"}>
            Q. Man matters, Nourish hair gummies Use the Women.
          </Heading>
          <Text color={"gray"}>
            A. Hi Kuganesan, Thanks for your enquiry. All the products are
            designed keeping men's needs in mind. While women can definitely
            take it, the efficacy may differ from person to person. Also, we
            have a separate website for Women. You can check it here
            https://bebodywise.com/ In case you've any concerns, then you can
            always book a free consultation with our expert doctor at
            mattrs.in/49p8s6 Cheers, Team Man Matters 🙂
          </Text>
          <Heading fontSize={"20px"} mt={"10px"}>
            Kuganesan
          </Heading>
          <Text color={"gray"}>08/10/23</Text>
          <hr style={{ margin: "10px" }} />
          <Heading fontSize={"20px"}>
            Q. Iam Mohammed Afzal I was in stage 1 of hairfall and I’m a
            overthinking boy and sure na my hairfall is stops or not after
            taking these gummies and rollers and shampoo or tablets
          </Heading>
          <Text color={"gray"}>
            A. Hi Mohammed, Thanks for your enquiry. Our Hairloss Kit for
            Genetics is proven effective in male pattern baldness. However, to
            clear your doubts & to answer your all queries, please book a free
            consultation with our expert doctor at mattrs.in/49p8s6 This will
            happen on call. The doctor will suggest the best way forward.
            Cheers, Team Man Matters 🙂
          </Text>
          <Heading fontSize={"20px"} mt={"10px"}>
            Mohammed A.
          </Heading>
          <Text color={"gray"}>08/10/23</Text>
          <hr style={{ margin: "10px" }} />
          <Heading fontSize={"20px"}>Q. Can it be used at age 14?</Heading>
          <Text color={"gray"}>
            A. Hi Vimukth, We appreciate your interest in Man Matters. Please
            note that all our products are designed & are recommended for adults
            above the age of 18. However to understand more and get better
            guidance in this regard, you can book a free consultation with our
            expert doctor at mattrs.in/49p8s6 Cheers, Team Man Matters 🙂
          </Text>
          <Heading fontSize={"20px"} mt={"10px"}>
            Vimuth K.
          </Heading>
          <Text color={"gray"}>09/09/23</Text>
          <hr style={{ margin: "10px" }} />
        </Grid>
      </div>
      {/* add to cart */}
      <div className="navbar2">
        <div style={{ position: "relative", display: "flex" }}>
          <Show above="sm">
            <Box>
              <Flex ml={"50px"} p={"3px"} gap={"10px"}>
                {el && (
                  <Image borderRadius={"5px"} w={"90px"} src={el?.image[0]} />
                )}
                <div style={{ margin: "auto" }}>
                  <Text>{el?.with}</Text>
                  <Text color={"#042663"}>{el?.title}</Text>
                </div>
              </Flex>
            </Box>
          </Show>
          <Flex m={"auto"} p={"5px"} gap={"30px"} alignContent={"center"}>
            <Heading>₹{el?.price}</Heading>
            <Button
              color={"white"}
              bg={"black"}
              p={"10px 25px 10px 25px"}
              onClick={() => handleAddToCart(el)}
            >
              Add to Cart
            </Button>
            <Button
              color={"white"}
              bg={"#5194D1"}
              p={"10px 25px 10px 25px"}
              onClick={() => handleBuyNow(el)}
            >
              Buy Now
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};
