import { css } from "@emotion/react";

// ********** Middle Part *************
export const MiddleOuter = css`
  margin: auto;
  width: 990px;
  padding-bottom: 64px;
  margin-top: -50px;
  padding-top: 50px;
  padding-bottom: 70px;

  @media (max-width: 992px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    width: 92%;
  }
`;
export const StepperBox = css`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 30px auto;

  @media (max-width: 992px) {
    margin: 28px auto;
  }
  @media (max-width: 768px) {
    gap: 6px;
    margin: 24px auto;
  }
  @media (max-width: 480px) {
    gap: 5px;
    margin: 20px auto;
  }
`;
export const EachStepBox = css`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    place-items: center;
    place-content: center;
    border-width: 1px;
    border-style: solid;
    width: 26px;
    height: 26px;
    border-radius: 5px;
    font-weight: 400;
    font-size: 10px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    gap: 6.5px;
  }
  @media (max-width: 480px) {
    gap: 6.5px;

    > div {
      width: 24px;
      height: 24px;
      font-weight: 300;
    }

    p {
      font-size: 14px;
    }
  }
`;

// ******** Cart Css ********
export const CartOuter = css`
  display: flex;
  gap: 28px;

  @media (max-width: 992px) {
    gap: 22px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 32px;
  }
`;
export const BlueBoxLeftSide = css`
  padding: 16px 20px;
  border-radius: 20px;
  margin-bottom: 24px;

  > div:first-of-type {
    display: flex;
    justify-content: space-between;
  }
  > div:first-of-type > p {
    font-weight: 500;
    font-size: 16px;
    margin: 0px 0px 6px;
  }
  > div:first-of-type > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
  }
  > div:first-of-type > div svg {
    width: 13px;
    height: 14px;
  }

  @media (max-width: 992px) {
    padding: 14px 18px;
    border-radius: 18px;
    margin-bottom: 22px;

    > div:first-of-type > div {
      height: 28px;
      width: 28px;
      border-radius: 9px;
    }
  }
  @media (max-width: 768px) {
    padding: 16px 18px;
    border-radius: 14px;
    margin-bottom: 20px;

    > div:first-of-type > p {
      font-size: 15px;
      margin: 0px 0px 5px;
    }
    > div:first-of-type > div {
      height: 26px;
      width: 26px;
      border-radius: 8px;
    }
    > div:first-of-type > div svg {
      width: 14px;
      height: 14px;
    }
  }
  @media (max-width: 480px) {
    padding: 12px 14px;
    border-radius: 12px;
    margin-bottom: 16px;

    > div:first-of-type > p {
      font-size: 14.5px;
      margin: 0px 0px 3px;
    }
    > div:first-of-type > div {
      height: 24px;
      width: 24px;
      border-radius: 6px;
    }
    > div:first-of-type > div svg {
      width: 11px;
      height: 12px;
    }
  }
`;
export const TypeLanguageCont = css`
  display: flex;
  gap: 42px;
  margin-bottom: 12px;

  > div p:nth-of-type(1) {
    font-size: 12px;
    font-weight: 400;
  }
  > div p:nth-of-type(2) {
    font-weight: 400;
    font-size: 14px;
    margin-top: -4px;
  }

  @media (max-width: 768px) {
    gap: 38px;
    margin-bottom: 10px;

    > div p:nth-of-type(1) {
      font-size: 11px;
    }
    > div p:nth-of-type(2) {
      font-size: 13px;
      margin-top: -4px;
    }
  }
  @media (max-width: 480px) {
    gap: 30px;
    margin-bottom: 8px;

    > div p:nth-of-type(1) {
      font-size: 11px;
    }
    > div p:nth-of-type(2) {
      font-size: 12px;
      margin-top: -1px;
    }
  }
`;
export const BottomTextLeftBlueBox = css`
  font-weight: 400;
  font-size: 12px;

  @media (max-width: 768px) {
    margin-top: -2px;
  }
  @media (max-width: 480px) {
    font-weight: 100;
    margin-top: -5px;
    font-size: 11.5px;
  }
`;
export const BookAnotherSlotCont = css`
  display: flex;
  align-items: center;
  padding: 5px 20px 0px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  gap: 3px;

  p {
    cursor: pointer;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 5px 18px 0px;
    margin-bottom: -25px;
  }
  @media (max-width: 480px) {
    padding: 0px 16px 0px;
    font-size: 13.5px;
    gap: 3px;
    margin-bottom: -18px;

    p {
      font-weight: 100;
    }
  }
`;

// Cart Item Card Css *********
export const CardOuter = css`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 64px;
    gap: 15px;
  }
  @media (max-width: 480px) {
    min-width: 260px;
    margin-top: 42px;
    gap: 12px;
  }
`;
export const ItemImg = css`
  border-radius: 12px;
  overflow: hidden;
  width: 60px;
  aspect-ratio: auto 60 / 60;
  height: 60px;

  @media (max-width: 992px) {
    width: 58px;
    aspect-ratio: auto 58 / 58;
    height: 58px;
  }
  @media (max-width: 768px) {
    border-radius: 12px;
    width: 60px;
    aspect-ratio: auto 60 / 60;
    height: 60px;
  }
  @media (max-width: 480px) {
    border-radius: 10px;
    width: 54px;
    aspect-ratio: auto 54 / 54;
    height: 54px;
  }
`;
export const TitleAndPriceDiv = css`
  margin-left: 24px;
  flex-grow: 1;
  -webkit-box-flex: 1;

  > i {
    font-size: 15.5px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  > i svg {
    font-size: 10px;
    height: 14px;
    width: 14px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 20px;
    border-radius: 4px;
    font-style: normal;
    margin-left: 6px;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    margin-left: 14px;

    > i {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    margin-left: 16px;

    > i {
      font-size: 15px;
      gap: 2px;
      position: absolute;
      left: 15px;
      margin-top: 12px;
    }
    > i svg {
      font-size: 10px;
      height: 14px;
      width: 14px;
      line-height: 20px;
      border-radius: 4px;
      margin-left: 6px;
    }
  }
  @media (max-width: 480px) {
    margin-left: 10px;

    > i {
      font-size: 13px;
      gap: 1px;
      position: absolute;
      left: 15px;
      margin-top: 14px;
    }
    > i svg {
      line-height: 16px;
      border-radius: 2px;
      margin-left: 5px;
    }
  }
`;
export const TitleDiv = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2px;

  // Title Css
  a {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    max-width: 300px;
    text-overflow: clip;
  }
  a:hover {
    text-decoration: none;
  }
  // Price Css
  p {
    display: flex;
    gap: 5px;
    align-items: baseline;
    max-width: 120px;
    font-size: 20px;
    font-weight: 900;
  }
  p span {
    font-size: 16px;
    position: relative;
    bottom: 3px;
  }
  p s {
    font-size: 12px;
    font-weight: 400;
    color: rgba(108, 108, 108, 1);
  }

  @media (max-width: 992px) {
    // Title Css
    a {
      font-size: 18.5px;
      line-height: 20px;
      margin-bottom: 8px;
    }
    // Price Css
    p {
      max-width: 120px;
      font-size: 17.5px;
      font-weight: 600;
    }
    p s {
      font-size: 12px;
      font-weight: 400;
      color: rgba(108, 108, 108, 1);
    }
  }
  @media (max-width: 768px) {
    gap: 0px;
    flex-direction: column;

    // Title Css
    a {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 7px;
    }
    // Price Css
    p {
      gap: 2px;
      font-size: 17px;
      font-weight: 900;
    }
    p span {
      font-size: 16px;
      bottom: 1px;
    }
  }
  @media (max-width: 480px) {
    // Title Css
    a {
      font-size: 14.5px;
      font-weight: 600;
      margin-bottom: 2px;
    }
    // Price Css
    p {
      gap: 1px;
      font-size: 14px;
      font-weight: 500;
    }
    p span {
      font-size: 14px;
      bottom: 1px;
      font-weight: 400;
    }
  }
`;
export const QtyContolDiv = css`
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 2px;
  font-size: 18px;
  user-select: none;

  div {
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 6px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    text-overflow: clip;
  }

  @media (max-width: 992px) {
    gap: 1px;
    font-size: 17px;

    div {
      width: 23px;
      height: 23px;
      border-radius: 6px;
    }
    p {
      font-size: 15px;
      min-width: 23px;
      height: 23px;
    }
  }
  @media (max-width: 768px) {
    gap: 2px;
    font-size: 18px;

    div {
      width: 22px;
      height: 22px;
      border-radius: 6px;
    }
    p {
      min-width: 22px;
      height: 22px;
    }
  }
  @media (max-width: 480px) {
    gap: 1px;
    font-size: 14px;

    div {
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
      min-width: 20px;
      height: 20px;
    }
  }
`;

// Right Side Cart Css ***********
export const ApplyCouponOuter = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  margin-bottom: 24px;
  padding: 10px 12px;
  border: 1px solid #e1eff8;
  cursor: pointer;

  @media (max-width: 992px) {
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 8px 10px;
  }
  @media (max-width: 768px) {
    padding: 8px 14px;
  }
  @media (max-width: 480px) {
    border-radius: 8px;
    margin-bottom: 18px;
    padding: 6px 12px;
  }
`;
export const CirlceAndTextContainerDiv = css`
  display: flex;
  align-items: center;
  gap: 12px;

  > svg {
    height: 14px;
    width: 14px;
  }
  > div p:nth-of-type(1) {
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 4px;
  }
  > div p:nth-of-type(2) {
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
  }

  @media (max-width: 992px) {
    gap: 10px;

    > div p:nth-of-type(1) {
      font-weight: 600;
      font-size: 17px;
      line-height: 16px;
      margin-bottom: 6px;
    }
    > div p:nth-of-type(2) {
      font-weight: 300;
      font-size: 14.5px;
      line-height: 15px;
    }
  }
  @media (max-width: 768px) {
    gap: 12px;

    > div p:nth-of-type(1) {
      font-size: 16px;
      margin-bottom: 5px;
    }
    > div p:nth-of-type(2) {
      font-size: 14px;
    }
  }
  @media (max-width: 480px) {
    gap: 10px;

    > div p:nth-of-type(1) {
      font-size: 14px;
      margin-bottom: 5px;
      line-height: 14px;
    }
    > div p:nth-of-type(2) {
      font-size: 13px;
      font-weight: 100;
      line-height: 13px;
    }
  }
`;
export const OrderSummaryTitleCss = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 14px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export const SummaryContDiv = css`
  height: auto;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;

  @media (max-width: 992px) {
    border-radius: 14px;
  }
  @media (max-width: 768px) {
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;
export const SummaryValuesContainer = css`
  padding: 6px 16px;

  @media (max-width: 768px) {
    padding: 6px 14px;
  }
  @media (max-width: 480px) {
    padding: 4px 12px;
  }
`;
export const SummaryItemsValues = (isLast) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0px;
  font-size: 18px;
  font-weight: ${isLast ? 700 : 300};

  @media (max-width: 992px) {
    padding: 5px 0px;
    font-size: 17px;
    font-weight: ${isLast ? 700 : 300};
  }
  @media (max-width: 768px) {
    font-size: 16.5px;
    font-weight: ${isLast ? 600 : 300};
  }
  @media (max-width: 480px) {
    padding: 4px 0px;
    font-size: 16px;
    margin-bottom: ${isLast ? "0px" : "-3px"};
  }
`;
export const ShippingDiv = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  margin: 8px 0px;
  font-size: 18px;
  font-weight: 400;
  border-top-width: 2px;
  border-top-style: dashed;
  border-bottom-width: 2px;
  border-bottom-style: dashed;

  @media (max-width: 992px) {
    padding: 10px 0px;
    margin: 6px 0px;
    font-size: 17px;
    font-weight: 400;
    border-top-width: 1px;
    border-bottom-width: 1px;
  }
  @media (max-width: 768px) {
    padding: 8px 0px;
    margin: 7px 0px;
    font-size: 16.5px;
  }
  @media (max-width: 480px) {
    padding: 7px 0px;
    margin: 6px 0px;
    font-size: 16px;
  }
`;
export const SavedContDiv = css`
  display: flex;
  align-items: center;
  padding: 20px 16px;
  border-top-width: 1px;
  border-top-style: solid;
  font-size: 18px;

  svg {
    font-size: 14px;
    margin-right: 8px;
  }
  p {
    font-weight: 600;
    margin-right: 4px;
  }
  p span {
    font-size: 17px;
    font-weight: 500;
  }

  @media (max-width: 992px) {
    padding: 18px 14px;
    font-size: 17px;

    p {
      font-weight: 600;
      margin-right: 3px;
    }
    p span {
      font-size: 16px;
    }
  }
  @media (max-width: 768px) {
    padding: 16px 12px;
    font-size: 16.5px;

    svg {
      font-size: 14px;
      margin-right: 8px;
    }
    p span {
      font-size: 16px;
    }
  }
  @media (max-width: 480px) {
    padding: 12px 10px;
    font-size: 16px;

    svg {
      margin-right: 6px;
    }
    p span {
      font-size: 15px;
    }
  }
`;
export const ReasonsToBuyCont = css`
  display: flex;
  justify-content: space-between;
  padding: 0px 28px;
  width: 100%;
  -webkit-box-pack: justify;
  margin-bottom: 40px;
  margin-top: 20px;

  @media (max-width: 992px) {
    padding: 0px 12px;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding: 0px 10px;
  }
`;
export const ChildDivReasonsToBuy = css`
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 30%;
  -webkit-box-align: center;
  align-items: center;

  p {
    overflow-wrap: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.25px;
    opacity: 0.7;
  }
  img {
    width: 28px;
    height: 28px;
    margin-bottom: 5px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

// ******** Address Css ********
export const AddressOuter = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 15px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    max-width: auto;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`;
export const AddressFormDiv = css`
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    form {
      gap: 25px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 480px) {
    form {
      gap: 20px;
      margin-bottom: 20px;
    }
  }
`;
export const InputOuterDivs = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  gap: 5px;

  span {
    font-size: 18px;
    font-weight: 100;
    color: rgb(33, 33, 33);
  }
  input {
    width: 100%;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    font-size: 22px;
  }
  input:focus {
    outline: none;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
  input::placeholder {
    color: #bdbdbd;
  }

  @media (max-width: 768px) {
    gap: 0px;

    span {
      font-size: 16px;
    }
    input {
      font-size: 20px;
    }
  }
  @media (max-width: 480px) {
    span {
      font-size: 13.5px;
    }
    input {
      font-size: 16px;
    }
  }
`;
export const CityAndStateDivsContainer = css`
  display: flex;
  justify-content: space-between;

  div {
    width: 48%;
    display: flex;
    align-items: left;
    flex-direction: column;
    text-align: left;
    gap: 5px;
  }
  span {
    font-size: 18px;
    font-weight: 100;
    color: rgb(33, 33, 33);
  }
  input {
    width: 100%;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    font-size: 22px;
  }
  input:focus {
    outline: none;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
  input::placeholder {
    color: #bdbdbd;
  }
  select {
    width: 100%;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    font-size: 22px;
    padding-bottom: 4px;
  }
  select:focus {
    outline: none;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  }
  select::placeholder {
    color: #bdbdbd;
  }
  select > div {
    background-color: red;
  }
  option {
    width: 300px;
    background: white;
    color: #22548a;
    overflow: auto;
    font-size: 18px;
    padding: 22px;
  }

  @media (max-width: 768px) {
    > div {
      gap: 0px;
    }
    span {
      font-size: 16px;
    }
    input {
      font-size: 20px;
    }
    select {
      font-size: 20px;
    }
    option {
      width: 150px;
      font-size: 16px;
      padding: 18px;
    }
  }
  @media (max-width: 480px) {
    > div:nth-of-type(1) {
      width: 42%;
    }
    > div:nth-of-type(2) {
      width: 54%;
    }
    span {
      font-size: 13.5px;
    }
    input {
      font-size: 16px;
    }
    select {
      font-size: 16px;
      padding-bottom: 3px;
    }
    option {
      width: 100px;
      font-size: 1px;
      padding: 14px;
    }
  }
`;

// ****** Payment *******
export const PaymentOuter = css`
  margin: auto;
  max-width: 500px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    max-width: auto;
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const DeliveryDetailsCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  padding: 14px 20px;

  p:nth-of-type(1) {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 8px;
    font-weight: 400;
  }
  p:nth-of-type(1) span {
    font-size: 17px;
    margin-right: 2px;
    font-weight: 500;
    line-height: 18px;
  }
  p:nth-of-type(2) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    opacity: 0.8;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;

    p:nth-of-type(1) {
      margin-bottom: 4px;
    }
    p:nth-of-type(1) span {
      font-size: 16px;
      line-height: 16px;
    }
    p:nth-of-type(2) {
      font-size: 15px;
      font-weight: 100;
    }
  }
  @media (max-width: 480px) {
    padding: 8px 16px;

    p:nth-of-type(1) {
      margin-bottom: 2px;
      font-size: 14.5px;
    }
    p:nth-of-type(1) span {
      font-size: 15.5px;
      line-height: 16px;
    }
    p:nth-of-type(2) {
      font-size: 14px;
      font-weight: 100;
    }
  }
`;
export const EditDeliveryCont = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  border-radius: 8px;
  cursor: pointer;

  svg {
    width: 11px;
    height: 12px;
  }

  @media (max-width: 480px) {
    height: 24px;
    width: 24px;
    border-radius: 6px;

    svg {
      width: 10px;
      height: 11px;
    }
  }
`;
export const PayOnlineContDiv = css`
  width: 100%;
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: dashed;
  gap: 8px;
  border-radius: 16px;
  padding: 8px 10px;
  margin: 45px auto 35px;

  img {
    height: 24px;
    aspect-ratio: auto 24 / 24;
    width: 24px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 7px;
    border-radius: 14px;
    padding: 6px 9px;
    margin: 30px auto 25px;

    img {
      height: 22px;
      aspect-ratio: auto 22 / 22;
      width: 22px;
    }
    p {
      font-size: 15px;
      font-weight: 300;
    }
  }
  @media (max-width: 480px) {
    gap: 6px;
    border-radius: 12px;
    padding: 5px 8px;
    margin: 26px auto 22px;

    img {
      height: 20px;
      aspect-ratio: auto 20 / 20;
      width: 20px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
    }
  }
`;
export const PaymentModesOuter = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 25px;
  }
  @media (max-width: 480px) {
    gap: 20px;
  }
`;
export const CommonTitleTextsCss = css`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  @media (max-width: 480px) {
    font-size: 16.5px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
export const ModeParentDiv = css`
  border-radius: 16px;
  padding: 16px;

  button {
    width: 100%;
    margin-top: 16px;
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    text-align: center;
  }

  @media (max-width: 768px) {
    border-radius: 13px;
    padding: 14px;

    button {
      margin-top: 14px;
      height: 48px;
      font-size: 16px;
    }
  }
  @media (max-width: 480px) {
    border-radius: 10px;
    padding: 12px;

    button {
      margin-top: 12px;
      height: 44px;
      font-size: 14.5px;
    }
  }
`;
export const InnerDivPaymentChilds = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  > div > img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
  > div > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  > div > div p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 400;
  }
  > div > div p:nth-of-type(2) {
    font-size: 16px;
    font-weight: 400;
  }
  svg {
    font-size: 18px;
    cursor: pointer;
  }
  input[type="radio"] {
    width: 20px;
    height: 20px;
    accent-color: #22548a;
  }

  @media (max-width: 768px) {
    > div {
      gap: 14px;
    }
    > div > img {
      width: 46px;
      height: 46px;
      border-radius: 6.5px;
    }
    > div > div {
      gap: 2px;
    }
    > div > div p:nth-of-type(1) {
      font-size: 16.5px;
    }
    > div > div p:nth-of-type(2) {
      font-size: 14.5px;
    }
    svg {
      font-size: 16.5px;
    }
    input[type="radio"] {
      width: 18px;
      height: 18px;
    }
  }
  @media (max-width: 480px) {
    > div {
      gap: 12px;
    }
    > div > img {
      width: 44px;
      height: 44px;
      border-radius: 5px;
    }
    > div > div {
      gap: 1px;
    }
    > div > div p:nth-of-type(1) {
      font-size: 16px;
    }
    > div > div p:nth-of-type(2) {
      font-size: 14px;
      margin-top: -2px;
    }
    svg {
      font-size: 16px;
    }
    input[type="radio"] {
      width: 16.5px;
      height: 16.5px;
    }
  }
`;
export const SafeAndSecureOuterDiv = css`
  max-width: 500px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  margin: 64px auto 48px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;

  img {
    width: 48px;
    height: 48px;
  }
  div p:nth-of-type(1) {
    font-size: 18px;
    font-size: 300;
    margin-bottom: 4px;
  }
  div p:nth-of-type(2) {
    font-size: 16px;
    font-size: 300;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 14px;
    padding: 12px;
    margin: 50px auto 40px;
    border-radius: 13px;

    img {
      width: 46px;
      height: 46px;
    }
    div p:nth-of-type(1) {
      font-size: 16.5px;
      margin-bottom: 2px;
    }
    div p:nth-of-type(2) {
      font-size: 14.5px;
    }
  }
  @media (max-width: 480px) {
    gap: 12px;
    padding: 10px;
    margin: 40px auto 30px;
    border-radius: 10px;

    img {
      width: 44px;
      height: 44px;
    }
    div p:nth-of-type(1) {
      font-size: 16px;
      margin-bottom: 0px;
    }
    div p:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;

// ******* Footer ********
export const FooterOuter = css`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-radius: 8px 8px 0px 0px;
  height: 70px;

  @media (max-width: 768px) {
    border-radius: 7px 7px 0px 0px;
    height: 60px;
  }
  @media (max-width: 480px) {
    border-radius: 6px 6px 0px 0px;
    height: 55px;
  }
`;
export const InnerFooter = css`
  margin: auto;
  width: 990px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
  }
  > div p:nth-of-type(1) {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
  > div p:nth-of-type(2) {
    margin-top: 12px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }
  button {
    width: 300px;
    border-radius: 20px;
    padding: 17px;
    font-size: 18px;
    font-weight: 600;
    height: 85%;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    > div {
      margin-left: 10px;
    }
    > div p:nth-of-type(1) {
      font-size: 16px;
      font-weight: 600;
      line-height: 12px;
    }
    > div p:nth-of-type(2) {
      margin-top: 8px;
      font-size: 14px;
      line-height: 10px;
    }
    button {
      width: 220px;
      border-radius: 14px;
      padding: 14px;
      font-size: 16px;
      font-weight: 600;
      height: 80%;
    }
  }
  @media (max-width: 480px) {
    > div {
      margin-left: 8px;
    }
    > div p:nth-of-type(1) {
      font-size: 15px;
      font-weight: 600;
      line-height: 12px;
    }
    > div p:nth-of-type(2) {
      margin-top: 7px;
      font-size: 12.5px;
      line-height: 8px;
    }
    button {
      width: 180px;
      border-radius: 12px;
      padding: 10px;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
`;

/* 

export const Temp = css`

@media (max-width: 992px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
`;

*/
