import React from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const SpeakersPage = () => {
  const speakers = [
    {
      name: "Mr. Bala Muhammad",
      title: "CEO, OpenIF",
      bio: "Mr. Bala Muhammad is a visionary leader with over 20 years of experience in the Islamic finance industry. As the CEO of OpenIF, he has been instrumental in driving innovation and promoting ethical financial practices. He is a sought-after speaker on topics such as fintech, sustainable investing, and the future of Islamic finance. His work has been recognized with numerous awards, and he is a passionate advocate for financial inclusion.",
      topics: ["Islamic Fintech", "Sustainable Investing", "Future of Finance"],
    },
    {
      name: "Dr. Aisha Rahman",
      title: "Head of Islamic Finance Research, Global Finance Institute",
      bio: "Dr. Aisha Rahman is a leading academic and researcher in Islamic finance. Her work at the Global Finance Institute has been published in numerous prestigious journals. She is a frequent speaker at international conferences, where she shares her insights on risk management, corporate governance, and the social impact of Islamic banking. She holds a PhD in Islamic Finance from the University of London.",
      topics: [
        "Risk Management",
        "Corporate Governance",
        "Social Impact Banking",
      ],
    },
    {
      name: "Sheikh Ahmad Al-Maktoum",
      title: "Chairman, Ethical Investment Solutions",
      bio: "Sheikh Ahmad Al-Maktoum is a prominent figure in the world of ethical and Islamic investments. As the Chairman of Ethical Investment Solutions, he has overseen the development of innovative financial products that align with Sharia principles. He is a strong advocate for social responsibility and sustainable development, and his firm has been a leader in financing green projects.",
      topics: [
        "Ethical Investments",
        "Sharia-compliant Products",
        "Sustainable Development",
      ],
    },
    {
      name: "Prof. Sarah Johnson",
      title: "Director, Center for Islamic Economics",
      bio: "Professor Sarah Johnson is a distinguished scholar and the Director of the Center for Islamic Economics. Her expertise lies in the historical development of Islamic economic thought and its application in contemporary markets. She is the author of several influential books and articles on the subject, and she is a respected voice in academic and policy circles.",
      topics: [
        "Islamic Economic History",
        "Contemporary Markets",
        "Economic Policy",
      ],
    },
    {
      name: "Mr. Hassan Ibrahim",
      title: "Chief Innovation Officer, TechFin Islamic",
      bio: "Mr. Hassan Ibrahim is a pioneer in the Islamic fintech space. As the Chief Innovation Officer at TechFin Islamic, he is responsible for developing cutting-edge solutions that are transforming the industry. He is passionate about leveraging technology to enhance financial inclusion and promote ethical finance. He was recently named one of the top 50 innovators in finance.",
      topics: [
        "Fintech Innovation",
        "Financial Inclusion",
        "Digital Transformation",
      ],
    },
    {
      name: "Ms. Fatima Al-Zahra",
      title: "Senior Advisor, Sustainable Islamic Banking",
      bio: "Ms. Fatima Al-Zahra is a seasoned expert in sustainable Islamic banking. With a career spanning over two decades, she has advised numerous financial institutions on integrating sustainability and ethical principles into their operations. She is a powerful voice for responsible finance and a mentor to many young professionals in the field. She serves on the board of several non-profit organizations.",
      topics: [
        "Sustainable Banking",
        "Ethical Finance",
        "Corporate Social Responsibility",
      ],
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
    <>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(/images/speakers-bg.png)` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="md:container px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-50 text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight"
          >
            Our Esteemed Speakers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-200 font-body mt-4 text-lg md:text-xl"
          >
            Learn from the brightest minds in Islamic Finance and technology.
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-prussian-blue/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-heading text-gray-50 font-semibold">
                  {speaker.name}
                </h3>
                <p className="text-lg font-body text-gray-300 mt-2">
                  {speaker.title}
                </p>
                <p className="text-md font-body text-gray-400 mt-4">
                  {speaker.bio}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-heading text-gray-200 font-semibold">
                  Topics:
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {speaker.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="bg-teal-500/20 text-teal-300 text-sm font-body px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    <Contact/>
    </>
  );
};

export default SpeakersPage;
