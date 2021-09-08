import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JXOAkSBFFcsGDiRWbZp1ce3po91g8478qltI6dOAZb4uSkzj4mRmFBuszqwzz2Uq4LGSDRmRy1NI5DPbFetOPEU00uZLq9KQn";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful....");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
