import { initializePaystackPayment } from "./paystackServices";
import { initializeStripePayment } from "./stripeService";

export const processPayment = async (paymentMethod, customerData) => {
    switch (paymentMethod) {
        case "paystack":
            return await initializePaystackPayment(customerData)
        case "stripe":
            return await initializeStripePayment(customerData)
        default:
            throw new Error("Invalid payment method selected")
    }
}