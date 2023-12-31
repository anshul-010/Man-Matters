import * as css from "../Styles/CheckoutStyles";
import CartItemCard from "../Componants/CartItemCard";
import EmptyCart from "../Componants/EmptyCart";
import { GetCartItems, CalculateCartTotal } from "../Redux/CartReducer/actions";
import { PaymentModes } from "../data/PaymentModes";
import { StateNames } from "../data/StateNames";
import TickImg from "../Images/CheckoutImgs/TickIcon.png";
import TruckImg from "../Images/CheckoutImgs/TruckIcon.png";
import SafetyImg from "../Images/CheckoutImgs/SafetyIcon.png";
import SafeAndSecureIcon from "../Images/CheckoutImgs/SafeAndSecureIcon.svg";
import PercentageStarIcon from "../Images/CheckoutImgs/PercentageStarIcon.svg";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPen as PenIcon } from "react-icons/fa6";
import { FaRegCircle as CircleIcon } from "react-icons/fa";
import { FaChevronRight as RightArrow } from "react-icons/fa";
import { FaRegCircleCheck as CircledTickIcon } from "react-icons/fa6";
import { Box, Text, Image, Button } from "@chakra-ui/react";

const Checkout = () => {
  // const dispatch = useDispatch();
  const [currStepper, setCurrStepper] = useState(1);
  const [activePayMode, setActivePayMode] = useState(PaymentModes[0].title);
  const [cartItemsArr, setCartItemsArr] = useState(GetCartItems());
  const [cartTotal, setCartTotal] = useState({
    itemTotal: 0,
    itemDiscount: 0,
    subTotal: 0,
  });
  const toggleCart = useSelector((state) => state.CartReducer.toggleCart);

  useEffect(() => {
    setCartItemsArr(GetCartItems());
  }, [toggleCart]);

  useEffect(() => {
    setCartTotal(CalculateCartTotal(cartItemsArr));
  }, [cartItemsArr, toggleCart]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Checkout is Easy with Us - Man Matters";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  // Function for changing checkout stepper
  const handleStepperChange = (val) => {
    if (val == 1) {
      setCurrStepper(1);
    } else if (val == 2 && currStepper == 3) {
      setCurrStepper(2);
    }
  };

  // Function for Footer button click
  const FooterBtnClick = () => {
    if (currStepper == 1) {
      setCurrStepper(2);
    } else if (currStepper == 2) {
      setCurrStepper(3);
    }
  };

  return cartItemsArr.length == 0 ? (
    <EmptyCart />
  ) : (
    <Box min-width="100%" bg={currStepper < 3 ? null : "whiteF"}>
      <Box css={css.MiddleOuter}>
        {/* Stepper */}
        <Box css={css.StepperBox}>
          <Box
            cursor={currStepper > 1 ? "pointer" : "default"}
            onClick={() => handleStepperChange(1)}
            css={css.EachStepBox}
          >
            <Box bg="greenA" color="whiteA">
              1
            </Box>
            <Text color="greenA">Cart</Text>
          </Box>
          <StepperDivider currStepper={currStepper} />
          <Box
            cursor={currStepper > 2 ? "pointer" : "default"}
            onClick={() => handleStepperChange(2)}
            css={css.EachStepBox}
          >
            <Box
              bg={currStepper >= 2 ? "greenA" : "whiteA"}
              color={currStepper >= 2 ? "whiteA" : "greyWhiteA"}
              borderColor={currStepper >= 2 ? "transparent" : "greyWhiteA"}
            >
              2
            </Box>
            <Text color={currStepper >= 2 ? "greenA" : "greyWhiteA"}>
              Address
            </Text>
          </Box>
          <StepperDivider currStepper={currStepper} />
          <Box
            cursor="default"
            onClick={() => handleStepperChange(3)}
            css={css.EachStepBox}
          >
            <Box
              bg={currStepper == 3 ? "greenA" : "whiteA"}
              color={currStepper == 3 ? "whiteA" : "greyWhiteA"}
              borderColor={currStepper == 3 ? "transparent" : "greyWhiteA"}
              css={css.NumBoxStepper}
            >
              3
            </Box>
            <Text color={currStepper == 3 ? "greenA" : "greyWhiteA"}>
              Payment
            </Text>
          </Box>
        </Box>

        {currStepper == 1 ? (
          // Cart
          <Box css={css.CartOuter}>
            <Box w={["100%", "100%", "68%", "65%"]}>
              <Box bg="blueA" color="whiteA" css={css.BlueBoxLeftSide}>
                <Box>
                  <Text fontFamily="font1">Talk to Doctor Now for FREE</Text>
                  <Box bg="blueC">
                    <Image as={PenIcon} />
                  </Box>
                </Box>
                <Box css={css.TypeLanguageCont}>
                  <Box>
                    <Text color="yellowB">Type</Text>
                    <Text>Audio Call</Text>
                  </Box>
                  <Box>
                    <Text color="yellowB">Language</Text>
                    <Text>English</Text>
                  </Box>
                </Box>
                <Text css={css.BottomTextLeftBlueBox}>
                  Your consultation will start on placement of order
                </Text>
              </Box>

              <Box css={css.BookAnotherSlotCont}>
                <span>Not free right now?</span>
                <Text fontFamily="font1" color="blueC">
                  Book Another Slot {`>`}
                </Text>
              </Box>

              <Box w="100%">
                {cartItemsArr?.map((item, ind) => (
                  <CartItemCard
                    {...item}
                    cartItemsArr={cartItemsArr}
                    key={ind + item._id}
                  />
                ))}
              </Box>
            </Box>

            <Box
              w={["100%", "100%", "32%", "35%"]}
              mt={["8px", "10px", "12px", "12px"]}
              fontFamily="font1"
            >
              <Box bg="whiteA" boxShadow="shadowC" css={css.ApplyCouponOuter}>
                <Box css={css.CirlceAndTextContainerDiv}>
                  <Image color="greenA" as={CircleIcon} />
                  <Box>
                    <Text>Apply Coupon</Text>
                    <Text>View Offers</Text>
                  </Box>
                </Box>
                <Image color="primary" as={RightArrow} />
              </Box>

              <Text css={css.OrderSummaryTitleCss}>Order Summary</Text>

              <Box css={css.SummaryContDiv}>
                <Box borderColor="whiteC" css={css.SummaryValuesContainer}>
                  <Box color="greyWhiteB" css={css.SummaryItemsValues(false)}>
                    <Text>Item total</Text>
                    <Text>₹{`${cartTotal.itemTotal}`}</Text>
                  </Box>
                  <Box css={css.SummaryItemsValues(false)}>
                    <Text color="greyWhiteB">Item Discount</Text>
                    <Text color="greenB">-₹{`${cartTotal.itemDiscount}`}</Text>
                  </Box>
                  <Box color="blackB" css={css.SummaryItemsValues(false)}>
                    <Text>Subtotal</Text>
                    <Text>₹{`${cartTotal.subTotal}`}</Text>
                  </Box>
                  <Box
                    color="greyWhiteB"
                    borderColor="whiteD"
                    css={css.ShippingDiv}
                  >
                    <Text>Shipping</Text>
                    <Text>Free!</Text>
                  </Box>
                  <Box color="blackB" css={css.SummaryItemsValues(true)}>
                    <Text>Order total</Text>
                    <Text>₹{`${cartTotal.subTotal}`}</Text>
                  </Box>
                </Box>
                <Box
                  bg="greenD"
                  color="greenC"
                  borderColor="whiteC"
                  css={css.SavedContDiv}
                >
                  <Image as={CircledTickIcon} />
                  <Text>
                    Saved ₹{`${cartTotal.itemDiscount} `}
                    <span>on your order</span>
                  </Text>
                </Box>
              </Box>

              <ReasonsToBuyComponent />
            </Box>
          </Box>
        ) : currStepper == 2 ? (
          // Address
          <Box fontFamily="font1" css={css.AddressOuter}>
            <Box css={css.AddressFormDiv}>
              <form>
                <Box css={css.InputOuterDivs}>
                  <span>Name*</span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </Box>
                <Box css={css.InputOuterDivs}>
                  <span>Address*</span>
                  <input
                    type="text"
                    placeholder="207, First Floor, UG Imperial, 19th Main Road"
                    name="address"
                    required
                  />
                </Box>
                <Box css={css.InputOuterDivs}>
                  <span>Pincode*</span>
                  <input
                    type="number"
                    placeholder="000000"
                    name="pincode"
                    required
                  />
                </Box>
                <Box css={css.CityAndStateDivsContainer}>
                  <Box>
                    <span>City*</span>
                    <input type="text" placeholder="-" name="city" required />
                  </Box>
                  <Box>
                    <span>State*</span>
                    <select placeholder="-" name="state" required>
                      {StateNames?.map((item, ind) => (
                        <option key={item.name + ind}>{item.name}</option>
                      ))}
                    </select>
                  </Box>
                </Box>
              </form>
            </Box>

            <ReasonsToBuyComponent />
          </Box>
        ) : (
          // Payment
          <Box fontFamily="font1" css={css.PaymentOuter}>
            <Box bg="whiteE" boxShadow="shadowD" css={css.DeliveryDetailsCont}>
              <Box>
                <Text color="blackA">
                  Delivery to <span>121001</span>
                </Text>
                <Text>asd, Faridabad, Haryana</Text>
              </Box>
              <Box bg="blueC" color="whiteA" css={css.EditDeliveryCont}>
                <Image as={PenIcon} />
              </Box>
            </Box>

            <Box bg="whiteE" borderColor="yellowC" css={css.PayOnlineContDiv}>
              <Image src={PercentageStarIcon} />
              <Text>Pay online : Faster delivery & 5% cashback</Text>
            </Box>

            <Box css={css.PaymentModesOuter}>
              {PaymentModes?.map((item, ind) => (
                <Box key={item.title + ind}>
                  <Text css={css.CommonTitleTextsCss}>{item.title}</Text>
                  <Box
                    bg="whiteE"
                    css={css.ModeParentDiv}
                    onClick={() => setActivePayMode(item.title)}
                  >
                    <Box css={css.InnerDivPaymentChilds}>
                      <Box>
                        <Image src={item.icon} />
                        <Box>
                          <Text>{item.upperText}</Text>
                          <Text
                            color={
                              item.title == "Pay on Delivery"
                                ? "redA"
                                : "greenB"
                            }
                          >
                            {item.lowerText}
                          </Text>
                        </Box>
                      </Box>
                      {activePayMode == item.title ? (
                        <input
                          type="radio"
                          checked={activePayMode == item.title}
                          readOnly
                        />
                      ) : (
                        <Image as={RightArrow} />
                      )}
                    </Box>
                    {activePayMode == item.title && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("btn clicked");
                        }}
                        bg="primary"
                        color="whiteA"
                        _hover={{
                          bg: "primary",
                        }}
                        type="submit"
                      >
                        Pay ₹{`${cartTotal.subTotal}`}
                      </Button>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box bg="blueD" css={css.SafeAndSecureOuterDiv}>
              <Image src={SafeAndSecureIcon} />
              <Box>
                <Text color="primary">Safe & Secure Payments</Text>
                <Text color="greyWhiteC">Safe payments | Safe Checkout</Text>
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Checkout Footer */}
      {currStepper < 3 && (
        <Box
          color="blackA"
          bg="white"
          boxShadow="shadowE"
          fontFamily="font1"
          css={css.FooterOuter}
        >
          <Box css={css.InnerFooter}>
            <Box>
              <Text color="blackB">Total ₹{`${cartTotal.subTotal}`}</Text>
              <Text color="greenA">Saved ₹{`${cartTotal.itemDiscount}`}</Text>
            </Box>
            <Button
              bg="primary"
              color="whiteA"
              _hover={{ bg: "primary" }}
              onClick={FooterBtnClick}
            >
              {currStepper == 1 ? "Checkout" : "Save Address"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Checkout;

export const StepperDivider = ({ currStepper }) => {
  return (
    <Text
      borderTop="1px dashed"
      w={["25px", "55px", "68px", "70px"]}
      borderColor={currStepper == 3 ? "primary" : "greyWhiteA"}
    ></Text>
  );
};

export const ReasonsToBuyComponent = () => {
  return (
    <Box color="blackB" css={css.ReasonsToBuyCont}>
      <Box css={css.ChildDivReasonsToBuy}>
        <Image src={TickImg} />
        <Text>100% Genuine</Text>
        <Text>Products</Text>
      </Box>
      <Box css={css.ChildDivReasonsToBuy}>
        <Image src={TruckImg} />
        <Text>Free & Fast</Text>
        <Text>Delivery</Text>
      </Box>
      <Box css={css.ChildDivReasonsToBuy}>
        <Image src={SafetyImg} />
        <Text>Trusted by</Text>
        <Text>1 Crore+ Men</Text>
      </Box>
    </Box>
  );
};
