import React from "react";
import arrow from "../../assets/icons/left.svg";
import CheckoutSteps from "./CheckoutSteps";
import PaymentCheckHeading from "./PaymentCheckHeading";
import EmailConfirmation from "./EmailConfirmation";
import PaymentDetails from "./PaymentDetails";
import CardPaymentDetail from "./CardPaymentDetail";
import PaymentSuccess from "./PaymentSuccess";
import PaymentResponse from "./PaymentResponse";
export default function PaymentCheckoutBody() {
  return (
    <div className="payment-checkout">
      <CheckoutSteps />
      <PaymentCheckHeading />
      <div className="payment-checkout__content">
        {/* <EmailConfirmation /> */}
        {/* <PaymentDetails /> */}
        {/* <CardPaymentDetail /> */}
        {/* <PaymentSuccess /> */}
        {/* <PaymentResponse /> */}
      </div>
    </div>
  );
}
