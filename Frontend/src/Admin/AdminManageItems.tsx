import "../Styles/Styles.css";
import { GetProducts } from "../Redux/ProductReducer/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Grid,
  Button,
  Heading,
  Select,
  Skeleton,
  useToast,
  Center,
  Spinner,
} from "@chakra-ui/react";
import AdminProductCard from "./AdminProductCard";

export const AdminManageItems = () => {
  const toast = useToast();
  const [page, setPage] = useState(1);
  const [cetagoryName, setCetagoryName] = useState("All Product");
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category");
  const initialOrder = searchParams.get("order");
  const initialRating = searchParams.get("rating");
  const [category, setCategory] = useState(initialCategory || "");
  const [order, setOrder] = useState(initialOrder || "");
  const [rating, setRating] = useState(initialRating || 0);
  const [state, setState] = useState(false);
  const [spin, setSpin] = useState(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector((store) => store.ProductReducer.products);
  const totalCount = useAppSelector((store) => store.ProductReducer.totalCount);
  const loading = useAppSelector((store) => store.ProductReducer.isLoading);

  const totalButton = Math.ceil(Number(totalCount) / 12);
  let paramObj = {
    params: {
      limit: 12,
      page: page,
      category: searchParams.get("category"),
      sort: searchParams.get("order") && "price",
      order: searchParams.get("order"),
      rating: rating,
    },
  };

  useEffect(() => {
    const params: any = { category: "", order: "", rating: 0 };

    category && (params.category = category);
    order && (params.order = order);
    rating && (params.rating = rating);

    setSearchParams(params);
  }, [order, category, rating]);

  function handleSort(e: any) {
    setOrder(e.target.value);
  }

  function handlePage(p: any) {
    setPage(p);
  }

  function handleAllCategory(name: any) {
    setCetagoryName(name);
    setCategory("");
  }
  function handleNewLaunch(name: any) {
    setCetagoryName(name);
    setCategory("");
  }
  function handleNutrition(name: any) {
    setCetagoryName(name);
    setCategory(name);
  }
  function handleHair(name: any) {
    setCetagoryName(name);
    setCategory(name);
  }
  function handleBeard(name: any) {
    setCetagoryName(name);
    setCategory(name);
  }

  useEffect(() => {
    GetProducts(dispatch, toast, paramObj);
  }, [searchParams, page, state]);

  return (
    <>
      {spin && (
        <Spinner
          thickness="10px"
          speed=".8s"
          emptyColor="white"
          color="blue.400"
          size="xl"
          zIndex="100"
          pos="relative"
          left="47vw"
          top="35vh"
        />
      )}
      {spin && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="1"
        ></Box>
      )}
      <div>
        <Box m={6}>
          <Center>
            <Heading color="#084934">Manage All Products</Heading>
          </Center>
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
              w="90%"
              m="auto"
              mt="10"
              mb="10"
              alignItems={"center"}
              position={{ base: "static", lg: "sticky" }}
              top={{ base: "auto", lg: "14vh" }}
              zIndex="1000"
              backgroundColor="white"
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
                onClick={() => {
                  handleAllCategory("All Products");
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
                onClick={() => {
                  handleNutrition("Nutrition");
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
                onClick={() => {
                  handleHair("Hair");
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
                onClick={() => {
                  handleBeard("Beard");
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
                onClick={() => {
                  handleNewLaunch("New Launch");
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
              top={{ base: "4vh", lg: "10vh" }}
              backgroundColor="white"
              zIndex="1000"
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
                  fontWeight="500"
                  color="gray.700"
                  m={{ base: "0", lg: " 20px auto" }}
                  onChange={handleSort}
                  defaultValue={order}
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
                  fontWeight="500"
                  color="gray.700"
                  m={{ base: "0", lg: " 20px auto" }}
                  onChange={(e) => setRating(Number(e.target.value))}
                  defaultValue={rating}
                >
                  <option value="">Filter by Rating</option>
                  <option value="4">4 & Above</option>
                  <option value="3">3 & Above</option>
                  <option value="2">2 & Above</option>
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
                >
                  {data?.map((property: any, i: number) => (
                    <AdminProductCard
                      property={property}
                      setState={setState}
                      state={state}
                      setSpin={setSpin}
                      key={i}
                    />
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
                    backgroundColor={index + 1 === page ? "#d50c5d" : "#5194D1"}
                    color="white"
                    m="2"
                    onClick={() => handlePage(index + 1)}
                    _hover={{
                      cursor: "pointer",
                      boxShadow:
                        index + 1 === page
                          ? "0px 0px 10px 0px #d50c5d"
                          : "0px 0px 10px 0px #0c81ef",
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
    </>
  );
};
