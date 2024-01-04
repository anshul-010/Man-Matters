import * as css from "../Styles/CheckoutStyles";
import { useAppDispatch } from "../Redux/store";
import { CalculateDiscount, SetCartItems } from "../Redux/CartReducer/action";

import { Link, useLocation } from "react-router-dom";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import { BsInfoSquareFill as InfoIcon } from "react-icons/bs";
import { HiMinusSm as MinusIcon, HiPlus as PlusIcon } from "react-icons/hi";

const CartItemCard = ({
  _id,
  title,
  image,
  price,
  itemQty,
  cartItemsArr,
}: any) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  // Cart item quantity handler
  const handleQty = (val: number) => {
    const newCartItemsArr = cartItemsArr?.filter(
      (item: any) => item._id !== _id
    );
    if (itemQty + val) {
      const updatedCartItemsArr = cartItemsArr.map((item: any) => {
        if (item._id == _id) {
          item.itemQty += val;
        }
        return item;
      });
      SetCartItems(dispatch, updatedCartItemsArr);
    } else {
      SetCartItems(dispatch, newCartItemsArr);
    }
  };

  return (
    <Box fontFamily="font1" css={css.CardOuter}>
      <Box display={["flex"]} w="81%">
        <Image css={css.ItemImg} src={image[0]} alt={title} />
        <Box css={css.TitleAndPriceDiv}>
          <Box css={css.TitleDiv}>
            <Link
              to={`/product-detail/${_id}`}
              replace
              state={{ redirectTo: location.pathname }}
            >
              {title}
            </Link>
            <Text>
              <span>₹</span>
              {CalculateDiscount(price)}
              <s>{price}</s>
            </Text>
          </Box>
          <i>
            * This is a prescription product
            <Image bg="whiteA" color="primary" as={InfoIcon} />
          </i>
        </Box>
      </Box>

      <Box css={css.QtyContolDiv}>
        <Center bg="primary" color="whiteA" onClick={() => handleQty(-1)}>
          <Image as={MinusIcon} />
        </Center>
        <Text>{itemQty}</Text>
        <Center bg="primary" color="whiteA" onClick={() => handleQty(1)}>
          <Image as={PlusIcon} />
        </Center>
      </Box>
    </Box>
  );
};

export default CartItemCard;
