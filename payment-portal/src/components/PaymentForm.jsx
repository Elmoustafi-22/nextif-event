import { useEffect, useState } from "react";
import paystack from "../assets/payment/paystack.png";
import stripe from "../assets/payment/stripe.png";
import { useSnackbar } from "notistack";
import { processPayment } from "../services/paymentManager";
import { paymentConfig } from "../config/payment";

const PaymentForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    paymentMethod: "",
  });
  const [isSumitting, setIsSubmitting] = useState(false);

  //Load payment gateway scripts
  useEffect(() => {
    const paystackScript = document.createElement("script");
    paystackScript.src = "https://js.paystack.co/v1/inline.js";
    paystackScript.async = true;
    document.body.appendChild(paystackScript);

    return () => {
      document.body.removeChild(paystackScript);
    };
  }, [enqueueSnackbar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.paymentMethod) {
      enqueueSnackbar("Please fill in all required fields", {
        variant: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await processPayment(formData.paymentMethod, {
        fullName: formData.fullName,
        email: formData.email,
      });

      if (formData.paymentMethod === "stripe") {
        enqueueSnackbar(result.message, { variant: "info" });
        localStorage.setItem("pendingPayment", JSON.stringify({
          fullName: formData.fullName,
          email: formData.email
        }));
      } else {
        localStorage.setItem(
          "certificationUser",
          JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            paymentMethod: formData.paymentMethod,
            paymentDate: new Date().toISOString(),
            transactionReference: result.reference,
            certificateId: `nextif/certificate/${formData.fullName.replace(
              /\s+/g,
              "_"
            )}_${Math.random().toString(36).substring(2, 10)}`,
          })
        );
      }
      enqueueSnackbar(result.message, { variant: "success" });
      setIsSubmitting(false);
    } catch (error) {
      enqueueSnackbar(
        error.message || "Payment processing failed. Please try again.",
        { variant: "error" }
      );
      console.error(error.message);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodSelect = (method) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  return (
    <div className="font-montserrat max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Certification Payment
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name (as it should appear on certificate) *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Your certificate will be sent to this email address
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-gray-700 font-medium mb-4">
              Select Payment Method *
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PaymentMethodCard
                icon={<img src={paystack} alt="paystack" className="h-8" />}
                selected={formData.paymentMethod === "paystack"}
                onClick={() => handlePaymentMethodSelect("paystack")}
              />
              <PaymentMethodCard
                icon={<img src={stripe} alt="stripe" className="h-8" />}
                selected={formData.paymentMethod === "stripe"}
                onClick={() => handlePaymentMethodSelect("stripe")}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="cursor-pointer bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-900 transition disabled:opacity-50"
              disabled={isSumitting}
            >
              {isSumitting ? "Processing..." : "Pay Now - N50,000"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PaymentMethodCard = ({ icon, selected, onClick }) => {
  return (
    <div
      className={`cursor-pointer border rounded-md px-4 py-3 flex-col items-center transition ${
        selected
          ? "border-blue-800 bg-blue-50"
          : "border-gray-300 hover:border-blue-400"
      }`}
      onClick={onClick}
    >
      <div
        className={`mb-2 flex items-center justify-center ${
          selected ? "text-blue-800" : "text-gray-600"
        }`}
      >
        {icon}
      </div>
    </div>
  );
};

export default PaymentForm;
