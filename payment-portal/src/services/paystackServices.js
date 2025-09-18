import { paymentConfig } from "../config/payment";

export const initializePaystackPayment = (customerData) => {
  return new Promise((resolve, reject) => {
    try {
      const handler = window.PaystackPop.setup({
        key: paymentConfig.paystack.publicKey,
        email: customerData.email,
        amount: paymentConfig.paystack.amount,
        currency: paymentConfig.paystack.currency,
        ref: `NEXTIF-${Math.floor(Math.random() * 1000000000 + 1)}`,
        metadata: {
          custom_fields: [
            {
              display_name: "Full Name",
              variable_name: "full_name",
              value: customerData.fullName,
            },
          ],
        },
        callback: (response) => {
          resolve({
            success: true,
            reference: response.reference,
            message: "Payment complete!",
            gateway: "paystack",
          });
        },
        onClose: () => {
          reject({
            success: false,
            message: "Payment window closed",
            gateway: "paystack",
          });
        },
      });
      handler.openIframe();
    } catch (error) {
      reject({
        success: false,
        message: error.message || "Payment initialization failed",
        gateway: "paystack",
      });
    }
  });
};
