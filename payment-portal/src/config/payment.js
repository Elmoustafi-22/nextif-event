export const paymentConfig = {
  paystack: {
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    amount: 5000000, // Amount in kobo
    currency: "NGN",
  },
  stripe: {
    publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
    amount: 3148,
    currency: "usd",
  },
  backendUrl: import.meta.env.VITE_BACKEND_URL,
};
