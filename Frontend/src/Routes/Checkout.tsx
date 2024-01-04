import * as css from "../Styles/CheckoutStyles";
import SafeAndSecureIcon from "../Images/CheckoutImgs/SafeAndSecureIcon.svg";
import PercentageStarIcon from "../Images/CheckoutImgs/PercentageStarIcon.svg";
import ReasonsToBuyComponent from "../Components/ReasonsToBuyComponent";
import CartItemCard from "../Components/CartItemCard";
import EmptyCart from "../Components/EmptyCart";
import OrderPlaced from "../Components/OrderPlaced";
import { GetUserDetails } from "../Redux/AuthReducer/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { PaymentModes } from "../Data/PaymentModes";
import { StateNames } from "../Data/StateNames";
import {
  GetCartItems,
  CalculateCartTotal,
  DoPayment,
} from "../Redux/CartReducer/action";
import {
  NAME_INP_CHANGE,
  ADDRESS_INP_CHANGE,
  PINCODE_INP_CHANGE,
  CITY_INP_CHANGE,
  STATE_INP_CHANGE,
} from "../Redux/CartReducer/reducer";

import { useState, useEffect } from "react";
import { PulseLoader as LoadingSpinner } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Text, Image, Button, useToast } from "@chakra-ui/react";
import { FaPen as PenIcon } from "react-icons/fa6";
import { FaRegCircle as CircleIcon } from "react-icons/fa";
import { FaChevronRight as RightArrow } from "react-icons/fa";
import { FaRegCircleCheck as CircledTickIcon } from "react-icons/fa6";

const Checkout = () => {
  const URL = import.meta.env.VITE_URL || "http://localhost:8080";
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [currStepper, setCurrStepper] = useState(1);
  const [activePayMode, setActivePayMode] = useState(PaymentModes[0].title);
  const [cartItemsArr, setCartItemsArr] = useState([]);
  const [userLoginInfo, setUserLoginInfo] = useState(GetUserDetails());
  const [cartTotal, setCartTotal] = useState({
    itemTotal: 0,
    itemDiscount: 0,
    subTotal: 0,
  });
  const isLoading = useAppSelector((state) => state.CartReducer.isLoading);
  const toggleCart = useAppSelector((state) => state.CartReducer.toggleCart);
  const showOrderPlaced = useAppSelector(
    (state) => state.CartReducer.showOrderPlaced
  );
  const name = useAppSelector((state) => state.CartReducer.name);
  const address = useAppSelector((state) => state.CartReducer.address);
  const pincode = useAppSelector((state) => state.CartReducer.pincode);
  const city = useAppSelector((state) => state.CartReducer.city);
  const state = useAppSelector((state) => state.CartReducer.state);

  // On changing Cart items in LS
  useEffect(() => {
    const newCartArr = GetCartItems();
    setCartItemsArr(newCartArr);
    setCartTotal(CalculateCartTotal(newCartArr));
  }, [toggleCart]);

  // Change Document Title
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Checkout is Easy with Us - Man Matters";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  // Function for changing checkout stepper
  const handleStepperChange = (val: number) => {
    if (val == 1) {
      setCurrStepper(1);
    } else if (val == 2 && currStepper == 3) {
      setCurrStepper(2);
    }
  };

  // Function for Footer button click
  const FooterBtnClick = () => {
    setUserLoginInfo(GetUserDetails());
    if (currStepper == 1 && userLoginInfo.token) {
      dispatch(NAME_INP_CHANGE(userLoginInfo.userName));
      setCurrStepper(2);
    } else if (!userLoginInfo.token) {
      toast({
        title: "Please Login first",
        status: "warning",
        position: "top",
      });
      navigate("/login", {
        state: { redirectTo: location.pathname },
        replace: true,
      });
    }
  };

  // Checkout Payment Function
  const handlePayBtnClick = (e: any) => {
    e.stopPropagation();
    if (!isLoading) {
      const cartData = cartItemsArr.map((item: any) => {
        let itemObj = {
          title: "",
          itemQty: "",
          image: "",
          price: "",
          link: "",
        };
        itemObj.title = item?.title;
        itemObj.itemQty = item?.itemQty;
        itemObj.image = item?.image[0];
        itemObj.price = `₹${item?.price}`;
        itemObj.link = `${URL}/product-detail/${item._id}`;

        return itemObj;
      });
      const orderData = {
        address: `${address}, ${city}, ${state}-${pincode}`,
        purchasedItems: cartData,
        total: `₹ ${cartTotal.itemTotal}`,
        discount: `- ₹ ${cartTotal.itemDiscount}`,
        subTotal: `₹ ${cartTotal.subTotal}`,
      };
      DoPayment(dispatch, toast, orderData);
    }
  };

  // Form Submit Function
  const SubmitAddress = (e: any) => {
    e.preventDefault();
    setCurrStepper(3);
  };

  // Input onChange Function
  const handleInpChange = (e: any) => {
    const { value, name } = e.target;
    if (name == "name") {
      dispatch(NAME_INP_CHANGE(value));
    } else if (name == "address") {
      dispatch(ADDRESS_INP_CHANGE(value));
    } else if (name == "pincode") {
      dispatch(PINCODE_INP_CHANGE(value));
    } else if (name == "city") {
      dispatch(CITY_INP_CHANGE(value));
    } else if (name == "state") {
      dispatch(STATE_INP_CHANGE(value));
    }
  };

  return showOrderPlaced ? (
    <OrderPlaced userMail={userLoginInfo.email} />
  ) : cartItemsArr.length == 0 ? (
    <EmptyCart />
  ) : (
    <Box min-width="100%" bg={currStepper < 3 ? "null" : "whiteF"}>
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
              // css={css.NumBoxStepper}
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
                {cartItemsArr?.map((item: any, ind: number) => (
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
              <form onSubmit={SubmitAddress} id="addressForm">
                <Box css={css.InputOuterDivs}>
                  <span>Name*</span>
                  <input
                    value={name}
                    onChange={handleInpChange}
                    type="text"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </Box>
                <Box css={css.InputOuterDivs}>
                  <span>Address*</span>
                  <input
                    value={address}
                    onChange={handleInpChange}
                    type="text"
                    placeholder="207, First Floor, UG Imperial, 19th Main Road"
                    name="address"
                    required
                  />
                </Box>
                <Box css={css.InputOuterDivs}>
                  <span>Pincode*</span>
                  <input
                    value={pincode}
                    onChange={handleInpChange}
                    type="text"
                    placeholder="000000"
                    name="pincode"
                    maxLength={6}
                    required
                  />
                </Box>
                <Box css={css.CityAndStateDivsContainer}>
                  <Box>
                    <span>City*</span>
                    <input
                      value={city}
                      onChange={handleInpChange}
                      type="text"
                      placeholder="-"
                      name="city"
                      required
                    />
                  </Box>
                  <Box>
                    <span>State*</span>
                    <select
                      value={state}
                      onChange={handleInpChange}
                      name="state"
                      required
                    >
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
                        onClick={handlePayBtnClick}
                        bg="primary"
                        color="whiteA"
                        _hover={{
                          bg: "primary",
                        }}
                        type="submit"
                      >
                        {isLoading ? (
                          <LoadingSpinner color="#ffffff" />
                        ) : (
                          `Pay ₹${cartTotal.subTotal}`
                        )}
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
              type={currStepper == 2 ? "submit" : "button"}
              form={currStepper == 2 ? "addressForm" : ""}
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

export const StepperDivider = ({ currStepper }: any) => {
  return (
    <Text
      borderTop="1px dashed"
      w={["25px", "55px", "68px", "70px"]}
      borderColor={currStepper == 3 ? "primary" : "greyWhiteA"}
    ></Text>
  );
};
