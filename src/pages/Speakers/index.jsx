import React from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const SpeakersPage = () => {
  const speakers = [
    {
      name: "Assoc Prof. Shukurat Bello (CSAA)",
      title:
        "AAT, CIFE, CSAA, Team Lead, Shafana Innovate Hub and the CEO/Founder of Spak Innovation Hub.",
      bio: "Dr. Bello is an Associate Professor at Bayero University Kano, Nigeria, with over 20 years of experience in teaching, research, and community service. She specializes in business management, entrepreneurship, and innovation, and is recognized for her impactful role in empowering and mentoring emerging entrepreneurs. Dr. Bello's contributions to the academic and entrepreneurial landscape are matched by her active involvement in various startup ecosystems, where she has consistently driven change through mentorship and advisory roles. s an Advisory Committee Member of a prominent non-interest financial institutions, Dr. Bello provides strategic guidance, fostering growth and sustainability within ethical financial models. She has also been a Sabbatical Fellow at Opolo Global Innovation, where she nurtured entrepreneurs through pre-incubation, incubation, and acceleration programs, helping them reimagine their market approach. Dr. Bello is the Team Lead of Shafana Innovate Hub and the CEO/Founder of Spak Innovation Hub, Shafan Consult and Enterprises, and Shafana Pre-varsity Academy, Kano. She is also a Board Member of several organizations, including Safarina Travels and Tours Limited and IFING Media Limited, With a strong foundation in Shariah-compliant finance, Dr. Bello holds certifications, including Certified Shariah Advisor and Auditor (AAOIFI), Certified Islamic Finance Executive, and Associate Accounting Technician (ICAN). She is also a Fellow of the Institute of Strategic Entrepreneurship of Nigeria. Dr. Bello's career at Bayero University includes key leadership roles, such as Sub-Dean of Academics in the Faculty of Management Sciences and Pioneer Coordinator of the Entrepreneurship Programs at the Dangote Business School. She presently manages the Bayero University Innovation Hub, where she leads initiatives that foster innovation, support startup development, and bridge academia with the entrepreneurial ecosystem. Beyond her academic and entrepreneurial ventures, Dr. Bello is deeply committed to supporting entrepreneurship programs and outreach initiatives, where she plays a crucial role in promoting learning and community engagement. She has participated in international programs, such as the NUFFIC TMT+ Program on Horticulture and Entrepreneurship, sponsored by the Ministry of Foreign Affairs, The Netherlands. Through her personal experiences and research, Dr. Bello has developed a unique approach to enhancing intuition-driven decision-making and fostering innovation, both in academia and the entrepreneurial ecosystem.",
      topics: [
        "Innovation Hub Management",
        "Shariah-compliant Finance",
        "Entrepreneurship Education",
      ],
    },
    {
      name: "Mr. Mudathir Adesanya",
      title: "Founder, M-tech Noble Hub and MD IFING",
      bio: "About Mudathir Adesanya is an Islamic finance consultant and media CEO with a Master's degree in Islamic Banking and Finance from Bayero University, Kano, and a Bachelor's degree in Accounting from Crescent University, Abeokuta. He combines his expertise in Islamic finance, business development, and commodity trading to provide innovative and effective solutions to clients across various sectors. He is the Managing Director and CEO of IFING MEDIA LTD, a leading media company that provides news, insights, and analysis on Islamic finance and economics. He has grown IFING MEDIA to a prominent and trusted source of information and knowledge for the Islamic finance community, reaching a global audience of over 100,000 subscribers and followers. He has also established and maintained strategic partnerships with key stakeholders, such as regulators, scholars, practitioners, and investors, to promote and support the development and growth of the Islamic finance industry. is also a Lead Consultant at BIFCONT NG, a consulting firm that offers Islamic finance advisory, training, and research services. He has helped various clients, ranging from banks, microfinance institutions, cooperatives, to non-governmental organizations, foundations, and associations, design and implement Islamic finance products, services, and systems, such as Islamic microfinance, Islamic crowdfunding, Islamic social finance, and Islamic fintech. He has also conducted market research, feasibility studies, and impact assessments, as well as delivered training and capacity building programs, to enhance the skills and knowledge of his clients and their beneficiaries. He is passionate about Islamic finance and its potential to create positive social and economic impact in the world. He is constantly learning and improving his skills and knowledge, as well as sharing his insights and experiences with others through his media platforms and consulting projects. He is a skilled and analytical leader, communicator, and problem-solver, who values collaboration, innovation, and excellence.",
      topics: ["Islamic Finance", "Media & Communications", "Islamic Fintech"],
    },
    {
      name: "Mrs. Shakirat Animashaun",
      title: "Founder, Enricher FinTech",
      bio: "She is Shakirat Animashaun, the Founder/CEO of Enricher Fintech, a platform for fundraising and investments, which are fundamental to the success of every business. In her over 20 years of entrepreneurial experience in the tech arena, Shakirat has worked with Flyingdove Institute of Information Technology, an edtech company where over 5,000 youths have been trained in both soft and hardware engineering, system security computer networking, etc.",
      topics: [
        "Fundraising & Investments",
        "Fintech Solutions",
        "Tech Education",
      ],
    },
    {
      name: "Mr. Abubakar Abbagana",
      title: "Ethical Wealth Management Advisor",
      bio: "Abubakar Abbagana, based in Abuja, Federal Capital Territory, NG, is currently a Wealth Management Advisor - Islamic Products at Meristem Nigeria. Abubakar Abbagana brings experience from previous roles at Jaiz Bank Plc and LOTUS Bank. Abubakar Abbagana holds a 2020 - 2022 Master of Business Administration - MBA in Finance and Investment Ahmadu Bello University.",
      topics: ["Wealth Management", "Islamic Banking", "Investment Products"],
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
                <div className="text-md font-body text-gray-400 mt-4">
                  {speaker.bio.split('. ').reduce((result, sentence, i, array) => {
                    // Group sentences into 3-4 paragraphs
                    const totalSentences = array.length;
                    const paragraphCount = totalSentences > 12 ? 4 : 3;
                    const sentencesPerParagraph = Math.ceil(totalSentences / paragraphCount);
                    
                    if (i % sentencesPerParagraph === 0 && i > 0) {
                      result.push([]);
                    }
                    
                    if (!result.length) {
                      result.push([]);
                    }
                    
                    result[result.length - 1].push(sentence);
                    return result;
                  }, []).map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-3">
                      {paragraph.join('. ')}
                      {paragraph[paragraph.length - 1].slice(-1) !== '.' ? '.' : ''}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-heading text-gray-200 font-semibold">
                  Tags:
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
