import React from 'react';
import { motion } from 'framer-motion';

const WhyAttend = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white md:container px-6 mt-6 md:mt-10"
    >
      <div className="flex md:justify-between gap-3 md:gap-4 flex-col md:flex-row">
        <h1 className="text-left text-prussian-blue text-2xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
          Why Attend?
        </h1>
        <p className="text-royal-blue flex flex-col gap-1 font-body">
          <span className="block text-base md:text-xl">
            An exclusive gathering of selected
            <br className="hidden md:block" /> Islamic finance enthusiast,
            <br className="hidden md:block" /> tech innovators, ethical
            startups, <br className="hidden md:block" /> Halal entrepreneurs,
            and students.
          </span>
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-0 md:px-8 lg:px-30 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 mt-6 md:mt-12"
      >
        <motion.div
          variants={itemVariants}
          className="relative rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-4 md:py-6 bg-royal-blue/20 overflow-hidden"
        >
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Expert Speakers
          </h3>
          <div className="flex flex-row gap-4 md:gap-8 justify-between">
            <img
              src="/images/01.png"
              className="absolute left-3 bottom-0 max-h-14 md:max-h-20 lg:max-h-full"
            />
            <p className="text-gray-800 text-base md:text-xl font-body ml-30 md:ml-38 lg:ml-65">
              Trailblazers in Islamic finance, fintech, and impact investing
              share proven strategies to spark growth and scale ideas. Fresh
              insights. Real stories. Action you can use.
            </p>
          </div>
          <div className="flex justify-between mt-4 md:mt-8">
            <div></div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-4 md:py-6 bg-royal-blue/20 overflow-hidden"
        >
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Interactive Roundtable
          </h3>
          <div className="flex flex-row gap-4 md:gap-8 justify-between">
            <img
              src="/images/02.png"
              className="absolute right-3 bottom-0 max-h-14 md:max-h-20 lg:max-h-full"
            />
            <p className="text-gray-800 text-base md:text-xl font-body mr-30 md:mr-38 lg:mr-65">
              No speeches. No sidelines. Jump into interactive discussion, shape
              solutions, and leave with clear, workable actions.
            </p>
          </div>
          <div className="flex justify-between mt-4 md:mt-8">
            <div></div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-4 md:py-6 bg-royal-blue/20 overflow-hidden"
        >
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Networking & Collaboration
          </h3>
          <div className="flex flex-row gap-4 md:gap-8 justify-between">
            <img
              src="/images/03.png"
              className="absolute left-3 -bottom-2 max-h-14 md:max-h-20 lg:max-h-full"
            />
            <p className="text-gray-800 text-base md:text-xl font-body ml-30 md:ml-38 lg:ml-65">
              Meet founders, investors, and policy thinkers who drive ethical
              finance forward. Forge partnerships. Discover funding. Build a
              network that lasts.
            </p>
          </div>
          <div className="flex justify-between mt-4 md:mt-8">
            <div></div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative rounded-xl shadow flex flex-col gap-4 md:gap-8 justify-between shadow-blue-200 px-4 md:px-8 py-4 md:py-6 bg-royal-blue/20 overflow-hidden"
        >
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Real-Time Project Development
          </h3>
          <div className="flex flex-row gap-4 md:gap-8 justify-between">
            <img
              src="/images/04.png"
              className="absolute right-3 bottom-0 max-h-14 md:max-h-20 lg:max-h-full"
            />
            <p className="text-gray-800 text-base md:text-xl font-body mr-30 md:mr-38 lg:mr-65">
              Turn concepts into prototypes on the spot. Work with mentors, test
              your idea, and walk away with a roadmap ready for launch.
            </p>
          </div>
          <div className="flex justify-between mt-4 md:mt-8">
            <div></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default WhyAttend;

