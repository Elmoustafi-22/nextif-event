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
      className="py-20 bg-white"
    >
      <div className="md:container mx-auto px-6 text-center">
        <motion.h2
          variants={fadeIn('down')}
          className="text-3xl md:text-4xl font-heading font-bold text-prussian-blue mb-12"
        >
          Our Partners
        </motion.h2>
        <motion.div
          variants={staggerContainer(0.3, 0.2)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              className="flex justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partners;
