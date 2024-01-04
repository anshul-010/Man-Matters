import { GetCartItems, SetCartItems } from "../Redux/CartReducer/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";

import { Link, useLocation } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Badge, Box, Image, useToast } from "@chakra-ui/react";

const Card2 = ({ property }: any) => {
  const toast = useToast();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [cartData, setCartData] = useState<any>([]);
  const toggleCart = useAppSelector(
    (state: any) => state.CartReducer.toggleCart
  );

  // Updating cart array when new item is added
  useEffect(() => {
    setCartData(GetCartItems());
  }, [toggleCart]);

  // Add to Cart function
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

  return (
    <Box
      width={{ base: "", lg: "18vw" }}
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Link
        to={`/product-detail/${property._id}`}
        replace
        state={{ redirectTo: location.pathname }}
      >
        <Box>
          <Box m="auto" height="28vh" width={{ base: "", lg: "18vw" }}>
            <Image
              src={property.image[0]}
              height="100%"
              width="100%"
              alt={property.image}
            />
          </Box>
          <Box pt="0">
            <Box ml="8px" display="flex" alignItems="baseline">
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "gold" : "gray.300"}
                    />
                  ))}
                <Box as="span" color="gray.600" fontSize="sm" ml="2">
                  {property.rating} reviews
                </Box>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
            </Box>
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              isTruncated
              ml="8px"
            >
              {property.title}
            </Box>
            <Box
              fontWeight="semibold"
              lineHeight="tight"
              as="h4"
              mt="1"
              ml="8px"
              isTruncated
            >
              ₹{property.price}{" "}
              <span
                style={{ color: "gray", textDecorationLine: "line-through" }}
              >
                {property.price + 195}
              </span>
            </Box>
            <Box lineHeight="tight" as="h6" mt="1" isTruncated ml="8px">
              <Badge bg={"none"} color="#5194D1">
                For
              </Badge>{" "}
              {property.for}
            </Box>
            <Box lineHeight="tight" as="h6" mt="1" isTruncated ml="8px">
              <Badge bg={"none"} color="#5194D1">
                With
              </Badge>{" "}
              {property.with}
            </Box>
          </Box>
        </Box>
      </Link>
      <Box
        as="button"
        w={"100%"}
        bg="#5194D1"
        color="white"
        py={2}
        mt="2"
        onClick={(e: any) => {
          e.stopPropagation();
          handleAddToCart(property);
        }}
      >
        Add To Cart
      </Box>
    </Box>
  );
};

export default Card2;
