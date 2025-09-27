import React from "react";
import {
  PiStudent,
  PiRocketLaunch,
  PiGraph,
  PiProjectorScreenChart,
  PiStarFill,
} from "react-icons/pi";
import { motion } from "framer-motion";

const AboutPage = () => {
  const offerings = [
    {
      title: "Periodic Mentorship Program",
      icon: <PiStudent size={40} />,
    },
    {
      title: "Startup Support",
      icon: <PiRocketLaunch size={40} />,
    },
    {
      title: "Career Acceleration Program",
      icon: <PiGraph size={40} />,
    },
    {
      title: "Conferences & Webinars",
      icon: <PiProjectorScreenChart size={40} />,
    },
  ];

  const testimonials = [
    {
      name: "Hameedat Brown",
      country: "UK",
      text: "The program equips aspiring professionals with essential tools to start a career in Islamic Finance",
      rating: 5,
    },
    {
      name: "Mutiu O. Rufai",
      country: "Nigeria",
      text: "It broadened my horizon with ethical, research, fintech, and compliance design skills in business administration",
      rating: 5,
    },
    {
      name: "Anas M",
      country: "India",
      text: "The program encouraged practical applications of Islamic Finance and inspired new startups and institutions",
      rating: 5,
    },
    {
      name: "Omar Muhammed",
      country: "Kenya",
      text: "NextIF is a global catalyst, combining strategic depth, values, and community to inspire greater impact",
      rating: 5,
    },
    {
      name: "Syed M. Abbas",
      country: "Pakistan",
      text: "The program bridges knowledge gaps, unites changemakers, and nurtures emerging talents across regions",
      rating: 5,
    },
    {
      name: "Tasneem Aaliyah Yadi",
      country: "South Africa",
      text: "The NextIF team did an incredible job, they were professional, supportive, and well-organized. This was a valuable initiative, and I hope to be part of more cohorts in the future, Insha’Allah.",
      rating: 5,
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          >
            To bridge the gap between aspiring young professionals and global
            leaders in the Islamic finance industry.
          </motion.p>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-prussian-blue">
              Who We Are
            </h2>
            <p className="mt-4 text-lg max-w-4xl mx-auto">
              Through mentorship, education, and networking, it empowers the
              next generation to excel in ethical and innovative finance
              practices. By fostering meaningful connections, NextIF creates a
              platform where passion meets expertise, driving the industry
              forward. It is committed to nurturing leaders who will shape the
              future of Islamic finance with integrity and vision. NextIF stands
              as a catalyst for growth, collaboration, and lasting impact in the
              global finance community.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-prussian-blue">
                Our Vision
              </h3>
              <p className="mt-4 text-lg">
                A world class platform where young enthusiasts are empowered to
                lead and innovate in Islamic finance, supported by a strong
                network of global players and mentors
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-prussian-blue">
                Our Mission
              </h3>
              <p className="mt-4 text-lg">
                To bridge the communication and mentorship gap between global
                industry leaders and young, aspiring professionals in the
                Islamic finance industry, fostering a new generation of ethical
                and innovative leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-prussian-blue">
              What We Offer
            </h2>
            <p className="mt-4 text-lg">Your Path Starts Here</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-md text-center text-prussian-blue"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-xl font-heading font-semibold">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-prussian-blue text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Reviews from the last Cohort
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 p-6 rounded-lg shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <PiStarFill key={i} />
                    ))}
                  </div>
                  <p className="mt-4 text-lg">"{testimonial.text}"</p>
                </div>
                <div className="mt-4 text-right">
                  <p className="font-bold font-heading">
                    {testimonial.name}
                  </p>
                  <p>({testimonial.country})</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

