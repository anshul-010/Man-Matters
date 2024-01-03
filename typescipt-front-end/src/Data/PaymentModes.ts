import UpiIcon from "../Images/CheckoutImgs/UpiIcon.svg";
import CardIcon from "../Images/CheckoutImgs/CardIcon.svg";
import NetBankingIcon from "../Images/CheckoutImgs/NetBankingIcon.svg";
import RupeesIcon from "../Images/CheckoutImgs/RupeesIcon.svg";

export const PaymentModes = [
  {
    title: "UPI",
    icon: UpiIcon,
    upperText: "Pay via UPI",
    lowerText: "Get Rs.445 in MM Wallet",
  },
  {
    title: "Card",
    icon: CardIcon,
    upperText: "Card",
    lowerText: "Get Rs.445 in MM Wallet",
  },
  {
    title: "Net Banking",
    icon: NetBankingIcon,
    upperText: "Net Banking",
    lowerText: "Get Rs.445 in MM Wallet",
  },
  {
    title: "Pay on Delivery",
    icon: RupeesIcon,
    upperText: "Pay on Delivery",
    lowerText: "MM Wallet balance cannot be used.",
  },
];
