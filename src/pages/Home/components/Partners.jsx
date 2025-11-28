import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/animations';
import { FiPhone, FiMail } from 'react-icons/fi';

const Partners = () => {
  const partners = [
    {
      name: "CIBE",
      logo: "/images/cibe.jpg",
    },
    {
      name: "Sharia Labs",
      logo: "/images/sharia-labs.webp",
    },
    {
      name: "IIIBF",
      logo: "/images/iiibf.jpeg",
    },
    {
      name: "Founders Friday",
      logo: "/images/founders-friday.jpg",
    },
    {
      name: "IFING MEDIA",
      logo: "/images/ifing.png",
    },
    {
      name: "SHURIX",
      logo: "/images/shurix.jpg",
    },
    {
      name: "MTECH",
      logo: "/images/mtech.png",
    },
    {
      name: "SHAFANA",
      logo: "/images/shafana.jpeg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-5 md:py-10 bg-white"
      >
        <div className="md:container mx-auto px-6 text-center">
          <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Partners and Sponsors
          </h1>
          <motion.div
            variants={staggerContainer(0.3, 0.2)}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mt-10"
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
                    className="h-40 w-40 object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        id="sponsorship"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-5 md:py-10 bg-white"
      >
        <div className="md:container mx-auto px-6 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-prussian-blue mb-2 md:mb-4"
          >
            Partner with Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-body text-gray-800 max-w-3xl mx-auto mb-10"
          >
            Join us as a partner or sponsor to connect with a vibrant community
            of innovators, entrepreneurs, and investors in the Islamic finance
            ecosystem. Showcase your brand and support the next generation of
            ethical finance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <a
              href="https://forms.gle/xo7v5ihgTmhW1Mt27"
              target="_blank"
              rel="noopenner noreferrer"
              className="bg-royal-blue text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-prussian-blue transition-colors flex items-center gap-3"
            >
              Partner with us
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Partners;