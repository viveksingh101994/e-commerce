import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_iiLBYNIDoJTEEOY5PVxQLsHR00nvYnwwHm";
  const onToken = token => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => alert("Payment Successful"))
      .catch(err => {
        console.log("Payment error: ", err);
        alert(
          "There was an issue with your payment. Please sure you use the provided card"
        );
      });
  };
  return (
    <StripeCheckout
      amount={priceForStripe}
      label="Pay Now"
      name="e-commerce"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      panelLable="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
