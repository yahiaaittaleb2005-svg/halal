import express from "express";
import Stripe from "stripe";
import path from "path";

const app = express();
const stripe = new Stripe("LA_TUA_API_KEY_STRIPE");

app.use(express.static("."));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: { currency: "eur", product_data: { name: "Olio di Neem" }, unit_amount: 1999 },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://halalhub.com/success",
    cancel_url: "https://halalhub.com/cancel",
  });
  res.json({ url: session.url });
});

app.listen(3000, () => console.log("Server attivo su http://localhost:3000"));
