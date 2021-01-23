import React from "react";
import Header from "./Header";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51ICVDXIA84vczVQHF2PK6AeUihAeF3VrOTBumkp2krK2bch51LlY68oX9fEyWkRVrb1EpWJBJk4qLqLIz1shJGbm00ihLPiB8p"
);
function PaymentCombined() {
  return (
    <div>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </div>
  );
}

export default PaymentCombined;
