import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(images/hero-bg-compressed.jpg)` }}
    >
      <div className="absolute bg-black/40 inset-0 z-0">
        <div className="md:container flex flex-col justify-between gap-8 px-10 md:gap-4 pt-30 md:pt-20 md:flex-row relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 md:gap-12 lg:gap-20 justify-center w-full md:w-3/4"
          >
            <div className="flex flex-col gap-5 justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl text-center md:text-left md:text-6xl lg:text-7xl font-heading text-white font-extrabold leading-14 md:leading-16 lg:leading-[75px]"
              >
                NEXTIF
                <br />
                <span className="text-5xl md:text-6xl">
                  Islamic Finance and Innovation Roundtable
                </span>{" "}
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-heading text-2xl mt-2 md:mt-4 md:text-[26px] lg:text-[31px] text-center md:text-left italic text-white"
              >
                <span className="font-bold">Theme</span>: Building the Next Big
                Thing with Islamic Finance
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden md:flex list-disc flex-row justify-start gap-2 md:gap-8 font-body text-white italic mt-4 text-sm md:text-base px-6 md:px-5"
              >
                {[
                  "Expert Speakers",
                  "Interactive Roundtable",
                  "Networking & Collaboration",
                  "Real-Time Project Development",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex md:justify-start justify-center"
            >
              
              <a
                href="https://luma.com/event/evt-hLkz6ZcRt5XX54G"
                className="bg-royal-blue font-heading font-semibold px-10 md:px-30 py-5 md:py-6 text-gray-50 rounded-full text-xl md:text-[20px] lg:text-2xl hover:bg-gray-100 hover:text-royal-blue transition duration-200"
                data-luma-action="checkout"
                data-luma-event-id="evt-hLkz6ZcRt5XX54G"
              >
                Reserve my seat
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full hidden lg:block md:w-2/4 lg:w-2/5"
          >
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src="/images/event.jpg"
                alt="hero image"
                className="rounded-2xl w-[70%] md:w-[80%] lg:w-[90%] shrink-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
