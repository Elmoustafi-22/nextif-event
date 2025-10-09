import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import Countdown from "@/components/Countdown";
import { motion } from "framer-motion";

const Register = () => {
  const eventDate = "2025-12-27T09:00:00+01:00";
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="md:container px-6 mt-8 md:mt-10 py-5 md:py-10 bg-prussian-blue"
      >
        <div className="flex md:justify-between gap-2 md:gap-4 flex-col md:flex-row">
          <h1 className="text-left text-gray-50 text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Register Now
          </h1>
          <p className="text-gray-50 flex flex-col gap-1 font-body">
            <span className="block text-lg md:text-xl">
              Secure your spot at <br className="hidden md:block" /> NextIF
              Islamic finance roundtable
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:mt-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="px-0 md:px-5 lg:px-30 grid grid-cols-1 gap-8 mt-8 md:mt-12 md:w-3/4 w-full"
          >
            <div className="bg-royal-blue relative pl-8 md:pl-20 lg:pl-30 py-6 flex flex-col items-start">
              <img
                src="/images/register-vector.png"
                alt="register vector"
                className="absolute bottom-0 right-0 max-h-30 md:max-h-40 lg:max-h-50 z-0"
              />
              <div className="relative z-10">
                <h6 className="text-xl font-body text-gray-50 font-semibold">
                  Countdown:
                </h6>
                <Countdown targetDate={eventDate} className="text-white" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/4 w-[80%] mx-auto mt-8 md:mt-4"
          >
            <img src="/images/hero-event.jpg" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col justify-center items-center mt-10 md:mt-16 lg:mt-20"
        >
          <a
            href="https://luma.com/event/evt-hLkz6ZcRt5XX54G"
            data-luma-action="checkout"
            data-luma-event-id="evt-hLkz6ZcRt5XX54G"
            className="text-xl md:text-2xl font-body font-semibold text-gray-50 px-8 md:px-18 py-2 md:py-4 flex gap-2 items-center whitespace-nowrap rounded-full bg-royal-blue"
          >
            Register <PiArrowUpRight />{" "}
          </a>
          
        </motion.div>
      </motion.section>
    </>
  );
};

export default Register;
