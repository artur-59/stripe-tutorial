import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_TEST_KEY =
  "pk_test_51I6HClEBoSGdyQZkjS4xxxu4OR9v6LcloX8npXFfQKNShlXnrhXkHTODq4ugyuGy3fTK2TV2nNMN8mxhfkaF3sh600ETbJmmsd";

const stripeTestPromise = loadStripe(PUBLIC_TEST_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
