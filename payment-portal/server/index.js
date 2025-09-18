import express from "express"
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express()

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json())

// app.post("/api/create-payment-intent", async (req, res) => {
//     try {
//         const { amount, currency = "usd" } = req.body;
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency,
//             payment_method_types: ["card"],
//         });
//         res.json({ clientSecret: paymentIntent.client_secret });
//     } catch(error) {
//         res.status(500).json({ error: error.message })
//     }
// })

app.post("/api/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: { name: "Certification Payment" },
                        unit_amount: 3148,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${req.headers.origin}/success`,
            cancel_url: req.headers.origin,
        });
        res.json({ sessionId: session.id });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
})

app.get("/api/verify-stripe-session/:sessionId", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
        res.json({ status: session.payment_status, paymentIntent: session.payment_intent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));