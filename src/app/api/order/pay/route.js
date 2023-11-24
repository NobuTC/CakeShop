const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 50,
    currency: "eur",
    automatic_payment_methods: { enabled: true },
  });

  return Response.json(paymentIntent.client_secret);
}
