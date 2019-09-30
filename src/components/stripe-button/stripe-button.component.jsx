import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_iiLBYNIDoJTEEOY5PVxQLsHR00nvYnwwHm";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
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
