import React from "react";
import { Link } from "react-router-dom";
import { PiArrowUpRight } from 'react-icons/pi';
import { motion } from "framer-motion";

const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Usman Shuaib Zunnurain",
      title: "Director, IIIBF. Member,CBN-FRACE",
    },

    {
      name: " Mr. Mudathir Adesanya",
      title: "Founder, M-tech Noble Hub and MD IFING MEDIA Ltd.",
    },
    {
      name: "Assoc Prof. Shukurat Bello (CSAA)",
      title:
        "Team Lead, Shafana Innovate Hub and the CEO/Founder of Spak Innovation Hub.",
    },
    {
      name: "Mrs. Shakirat Animashaun",
      title: "Founder, Enricher FinTech",
    },
    {
      name: "Mr. Abubakar Abbagana",
      title: "Co-founder, Ethica Capital",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-10 py-5 md:py-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(/images/speakers-bg.png)` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="md:container px-6 relative z-10">
        <div className="flex md:justify-between gap-4 flex-col md:flex-row">
          <h1 className="md:text-left text-gray-50 text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Keynote Speakers
          </h1>
          <p className="text-gray-50 font-body">
            <span className="block text-lg md:text-xl">
              Meeting industry leaders <br className="hidden md:block" />{" "}
              shaping the world of Islamic Finance
            </span>
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="px-0 md:px-5 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-12"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col justify-between gap-8 px-4 md:px-8 py-6 md:py-8 bg-prussian-blue rounded-2xl shadow-md"
            >
              <p className="text-2xl font-heading text-gray-50 font-semibold">
                {speaker.name}
              </p>
              <p className="text-lg font-body text-gray-50">{speaker.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="inline-block mt-8 px-0 md:px-5 lg:px-30">
          <Link to="/speakers" className="flex gap-2 whitespace-nowrap font-body bg-prussian-blue border-0 shadow-sm px-6 py-3 text-white text-xl rounded-full items-center">
            And more <PiArrowUpRight />{" "}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Speakers;
