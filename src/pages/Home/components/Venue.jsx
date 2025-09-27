import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/animations';

const Venue = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="md:container px-6 my-10 bg-gray-50"
    >
      <div className="md:container mx-auto px-6 text-center">
        <div className="flex md:justify-between gap-4 flex-col md:flex-row">
          <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Venue
          </h1>
          <p className="text-royal-blue flex flex-col gap-1 font-body">
            <span className="block text-lg md:text-xl">
              December 27, 2025 | Outside Lab <br className="hidden md:block" />{" "}
              Conference Hall, Magaji Rumfa, Kano
            </span>
          </p>
        </div>

        <motion.div variants={fadeIn("up", 0.4)}>
          <img
            src="/images/location.png"
            alt="Event Location"
            className="rounded-lg shadow-lg mx-auto mt-8 md:mt-12"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Venue;
