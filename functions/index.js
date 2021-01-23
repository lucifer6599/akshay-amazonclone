const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')(
  'sk_test_51ICVDXIA84vczVQH3g2QmQ28S6zjLH5rNCHRw30JT48qlCUzW4Xbx6hqdw5d4fo0W5VRMzpwMM8VKe0z68hJ6XtX00wMqzl6GA'
);
//API

//App config
const app = express();

// //Middleware
// app.use(cors({ origin: true }));
// app.use(express.json());

//Api routes
// - App config

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
//app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved to Akshay's clone!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//example-end point
//http://localhost:5001/clone-akshay/us-central1/api
