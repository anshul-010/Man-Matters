import * as css from "../Styles/CheckoutStyles";
import { CalculateDiscount, SetCartItems } from "../Redux/CartReducer/actions";

import { useDispatch } from "react-redux";
import { Box, Text, Image, Center, Link } from "@chakra-ui/react";
import { BsInfoSquareFill as InfoIcon } from "react-icons/bs";
import { HiMinusSm as MinusIcon, HiPlus as PlusIcon } from "react-icons/hi";

const CartItemCard = ({ _id, title, image, price, itemQty, cartItemsArr }) => {
  const dispatch = useDispatch();

  const handleQty = (val) => {
    const newCartItemsArr = cartItemsArr?.filter((item) => item._id !== _id);
    if (itemQty + val) {
      const updatedCartItemsArr = cartItemsArr.map((item) => {
        if (item._id == _id) {
          item.itemQty += val;
        }
        return item;
      });
      dispatch(SetCartItems(updatedCartItemsArr));
    } else {
      dispatch(SetCartItems(newCartItemsArr));
    }
  };

  return (
    <Box fontFamily="font1" css={css.CardOuter}>
      <Box display={["flex"]} w="81%">
        <Image css={css.ItemImg} src={image[0]} alt={title} />
        <Box css={css.TitleAndPriceDiv}>
          <Box css={css.TitleDiv}>
            <Link href={`/product-detail/${_id}`}>{title}</Link>
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
