import React from 'react';
import { motion } from 'framer-motion';
import Contact from '@/components/Contact';

const PartnersPage = () => {
  const partners = [
    {
      name: "Sharia Labs",
      location: "UK",
      logo: "/images/sharia-labs.webp",
      description:
        "A company dedicated to fostering excellence in Sharia-compliant products, services, and processes. We aim to empower individuals and businesses by delivering tailored solutions grounded in Islamic principles.",
    },
    {
      name: "CIBE",
      location: "UAE",
      logo: "/images/cibe.jpg",
      description:
        "Towards the pursuance of its key goal, to promote Islamic banking and finance all over the globe, AlHuda Centre of Islamic Banking and Economics is working diligently and under vigilance shariah compliant standards since its inception. AlHuda CIBE was established in 2005 and Mr. Zubair Mughal is its Chief Executive Officer. AlHuda CIBE has been accredited as a distinguished service provider due to our notable services, team of dedicated professionals and one stop solutions of Islamic banking and finance. Our aim is to provide state-of-the-art and science services of Islamic banking and finance worldwide. AlHuda head office is in UAE and regional offices are in Pakistan and in South Africa. AlHuda CIBE is omnipresent worldwide for its various services such as: advisory & consultancy, research & development, education & capacity building, Shariah advisory, publications & events, It is part of AlHuda CIBE commitment, to put the customer’s values foremost, hence providing them with Islamic Banking and Finance solution that is in line with their beliefs.",
    },
    {
      name: "MTECH",
      location: "Nigeria",
      logo: "/images/mtech.png",
      description:
        "MTECH Noble Hub International Ltd is a technology-driven company dedicated to transforming the global halal economy through innovative, Shariah-compliant digital solutions. Our platforms empower businesses, professionals, and consumers by providing tools that foster business growth, ethical networking, halal trade, and financial inclusion. The global halal economy is valued at over $7 trillion, yet it lacks a centralized digital ecosystem that seamlessly connects halal businesses, certification bodies, and consumers. MTECH addresses this gap by developing AI-driven platforms and services that create trust, efficiency, and accessibility in the halal business ecosystem.",
    },
    {
      name: "IIIBF",
      location: "Nigeria",
      logo: "/images/iiibf.webp",
      description:
        "The International Institute of Islamic Banking and Finance (IIIBF), Bayero University, Kano (BUK), Nigeria, is an exciting institution with a modest vibrant history and promising future, a wonderful place to learn and grow intellectually and academically through the Islamic teaching and principles. IIIBF possesses a wealth of academic experience combined with a great spirit and a commitment to excellence that clearly sets it apart from other institutes in Nigeria.",
    },
    {
      name: "Shurix",
      location: "UK",
      logo: "/images/shurix.jpg",
      description:
        "At Shurix, we have the modern tools necessary to make managing Shariah compliance easier, more transparent, and built for scale, so ethical finance can have confidence in growth. Our aim is simple; ease the operational pain points businesses face, and give scholars, advisors, and institutions a smarter, digitally-supported way to work together. We believe the future of Islamic finance depends on systems that are not only trustworthy, but built for scale",
    },
    {
      name: "IFING MEDIA",
      location: "Nigeria",
      logo: "/images/ifing.png",
      description:
        "IFING MEDIA was founded in 2018 with the mission to be a successful, creative and groundbreaking Islamic finance and halal industry (halal food, fashion, tourism & so on)  media company in Africa and beyond. Our raison d’être is to promote and advertise Islamic finance and halal industry products/services and to facilitate economic empowerment and activities inspired by Shariah principles. We are ideally positioned to leverage our core strengths and vast international relationship to make a difference. We identify market requirements for Islamic finance and halal industry products/services by promoting their development and delivery. Furthermore, we create vital linkages between the industry and the populace to promote the increase in economic activities in a socially responsible manner as a means to sustainable economic growth and development.",
    },
    {
      name: "Founders Friday",
      location: "Nigeria",
      logo: "/images/founders-friday.jpg",
      description:
        "Founders Friday is a monthly founder and ecosystem meetup designed to build connections and visibility for startups and their solutions, as well as visibility for other ecosystem players. It is conducted in a casual environment to increase learning opportunities, build connections, and relax after a month of hard work.",
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <div className="bg-gray-50 font-body text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-prussian-blue text-white py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold"
          >
            Our Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          >
            We are proud to collaborate with leading organizations to foster innovation and growth in the Islamic finance industry.
          </motion.p>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 object-contain"
                  />
                </div>
                <h4 className="text-xl font-heading font-semibold text-prussian-blue">
                  {partner.name}
                </h4>
                {partner.location && (
                  <p className="text-md font-body text-gray-600">
                    {partner.location}
                  </p>
                )}
                <div className="flex-grow">
                  {partner.description && (
                    <div className="mt-4 text-md font-body text-gray-700 text-left space-y-4">
                      {partner.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
    <Contact/>
    </>
  );
};

export default PartnersPage;