import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/animations';

const Partners = () => {
  const partners = [
    {
      name: "Sharia Labs",
      logo: "/images/sharia-labs.webp",
    },
    {
      name: "IIIBF",
      logo: "/images/iiibf.webp",
    },
    {
      name: "RevsAI",
      logo: "/images/revsai.webp",
    },
  ];

return (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="py-5 md:py-10 bg-white"
  >
    <div className="md:container mx-auto px-6 text-center">
      <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
        Our Partners
      </h1>
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up")}
            className="flex justify-center"
          >
            <div className="p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);
};

export default Partners;
