import React from "react";
import { Link } from "react-router-dom";
import { PiMicrophoneStage, PiArrowUpRight } from "react-icons/pi";
import { motion } from "framer-motion";

const Event = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-5 md:py-10 md:container px-6"
    >
      <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
        Event at a glance
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-0 md:px-5 lg:px-30 grid grid-cols-1 gap-8 md:grid-cols-2 mt-6 md:mt-12"
      >
        <motion.div
          variants={itemVariants}
          className="rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-3 md:py-6 bg-royal-blue/20"
        >
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Speakers
          </h3>
          <div className="flex flex-row gap-6 md:gap-8">
            <div className=" bg-prussian-blue rounded-full w-10 md:w-14 lg:w-16 h-10 md:h-14 lg:h-16 flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl aspect-square">
              <PiMicrophoneStage />
            </div>
            <p className="text-gray-800 text-lg font-body">
              Hear from industry leaders in Islamic finance with decades of
              combined experience building banks, funding startups, and
              pioneering halal fintech solutions across Africa.
            </p>
          </div>
          <div className="flex justify-between mt-4 md:mt-8">
            <div></div>

            <Link
              to={"/speakers"}
              className="bg-white text-prussian-blue px-4 py-2 text-xl font-body border border-prussian-blue rounded-full hover:bg-prussian-blue hover:text-white transition-all duration-300 flex items-center whitespace-nowrap gap-2"
            >
              And more
              <PiArrowUpRight />
            </Link>
          </div>
        </motion.div>
        <div className="flex flex-col gap-6">
          <motion.div
            variants={itemVariants}
            className="rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-3 md:py-6 bg-royal-blue/20"
          >
            <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
              Develop Market Strategies
            </h3>
            <p className="text-gray-800 text-lg font-body">
              Understand consumer behavior and market penetration tactics for
              Islamic finance products
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-3 md:py-6 bg-royal-blue/20"
          >
            <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
              Navigate Regulatory Frameworks
            </h3>
            <p className="text-gray-800 text-lg font-body">
              Learn compliance requirements for Islamic financial products in
              Nigeria and globally
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Event;
