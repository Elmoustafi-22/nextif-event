import React from "react";
import { motion } from "framer-motion";

const Agenda = () => {
  const agendaItems = [
    {
      topic: "Topic 1",
      title: "Halal Economy & Innovation",
      description:
        "Redefining the Halal Economy: Where Innovation Meets Billions in Untapped Opportunities",
    },
    {
      topic: "Topic 2",
      title: "Entrepreneurs & Halal",
      description:
        "Entrepreneurship with Barakah: Building Halal Enterprises That Outlive Founders",
    },
    {
      topic: "Topic 3",
      title: "Islamic Finance Tech",
      description:
        "Faith in Code: How Islamic Fintech is Rewiring the Future of Global Finance",
    },
    {
      topic: "Topic 4",
      title: "Startups & Investors",
      description:
        "Bridging Startups and Capital: What Investors Look for in Shariah-Compliant Ventures",
    },
    {
      topic: "Topic 5",
      title: "Shariah-Compliance ",
      description:
        "In the New Dawn of Business, Compliance is the Currency of Scale",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      id="agenda"
      className="md:container px-6 mt-6 md:mt-10"
    >
      <div className="flex md:justify-between gap-4 flex-col md:flex-row">
        <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
          Discussions
        </h1>
        
      </div>
      <div className="px-0 md:px-5 lg:px-30 grid grid-cols-1 md:gap-8 mt-6 md:mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-xl shadow flex flex-col gap-8 md:gap-16 justify-between shadow-blue-200 px-4 md:px-18 py-6 md:py-20 bg-royal-blue/20"
        >
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-0 md:gap-2 justify-between"
            >
              <p className="text-2xl md:text-3xl font-heading text-prussian-blue font-semibold flex flex-col">
                <span>{item.topic}</span>
              </p>
              <p className="md:mt-0 flex flex-col gap-2 md:gap-4 justify-start w-full md:w-2/3 text-lg font-body text-gray-800 ">
                <span className="text-2xl md:text-3xl font-heading text-prussian-blue font-semibold ">
                  {item.title}{" "}
                </span>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Agenda;

