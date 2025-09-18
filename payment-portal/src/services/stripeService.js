import axios from 'axios'
import { loadStripe } from "@stripe/stripe-js"
import { paymentConfig } from '../config/payment';

const stripePromise = loadStripe(paymentConfig.stripe.publishableKey)

export const initializeStripePayment = async (customerData) => {
    try {
        const response = await axios.post(`${paymentConfig.backendUrl}/api/create-checkout-session`);
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            sessionId: response.data.sessionId
        });
        if (error) {
            throw {
                success: false,
                message: error.message,
                gateway: "stripe",
            };
        }
        return {
            success: true,
            message: "Redirecting to Stripe Checkout",
            gateway: "stripe",
        }
    } catch (error) {
        throw {
            success: false,
            message: error.message || "Stripe payment initialization failed",
            gateway: "stripe",
        }
    }
}