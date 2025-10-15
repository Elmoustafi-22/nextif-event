import React from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const SpeakersPage = () => {
  const speakers = [
    {
      name: "Prof. Usman Shuaib Zunnurain",
      title: "Director, IIIBF. Member,CBN-FRACE",
      bio: "Professor Zunnurain was born in Funtua, Katsina State. He obtained his Bachelor of Laws (LLB) from Bayero University Kano in 1994. He was called to the Nigerian Bar in 1996. He completed his Masters of Laws Degree (LLM) in Bayero University in 2003. He obtained another Masters of Laws in International Human Right (LL.M, IHL.) from University of Essex United kingdom in 2006. He completed his PhD at Ahmadu Bello University Zaria, in 2015.  He joined the academic profession as a Lecturer with the Faculty of Law Bayero University Kano in January 2001. From his initial days at the bar, Professor Zunnurain has been a highly skilful legal practitioner whose passion for the legal profession was driven by his conviction to stand for the voiceless and the less privileged people. His good intention to uplift the right of the poor people was featured in the famous media chat by Lux Terra Media Foundation in its famous interview Program (Models of Integrity). Through his Academic life, Prof. Zunnurain is obviously seen as a professional Lecturer who digs deeper down the terrain of both Islamic and Western legal fields. His mastery of these two complex comparative areas is a rare gift among many law lecturers. His is bestowed with the ability of deeper researching skills, well thought reasonings as well as standard language articulation. When he assumed office as the Dean of Law in 2019, Professor Zunnurain's exemplary leadership skills was manifested in many aspects. He ensured strict compliance with the ethics and etiquettes of the law profession among his students.  He put in place many overall functionaries as the Dean of Law, that made the hosting of the 53rd Annual Conference of the Nigerian Association of Law Teachers (NALT) held in the Faculty of Law (BUK) one of the best conferences in the history of the Association. While interactions with his students, both at undergraduate and post-graduate levels, Prof. Zunnurain's dual expertise in common and Islamic knowledge can be seen as a clear coincidental representation of his name _Zunnurain (the possessor of two lights). Verily, Professor Zunnurain will remain a strong pillar and reference back to source, who would always be referred back to on so many complex and innovative Islamic issues arising, due to his ability to compose valid and rational answers. In the middle of his memorable tenure as the Dean of Law, Prof. Zunnurain got promoted to be the Director of International Islamic Institute of Banking and Finance (BUK) which could not allow him to continue serving as the Dean of Law. Many students were irritated by the sudden news of his shift in service. However, hundreds of them continue to wish him well and pray for their Father and Mentor_Prof. Zunnurain_(Allah's continues elevation), in appreciation of the Discipline, Knowledge and Virtue he instilled in the entire members of the faculty. ",
      topics: [
        "Islamic Banking & Finance",
        "Legal Education",
        "Human Rights Law",
      ],
    },
    {
      name: "Mr. Mudathir Adesanya",
      title: "Founder, M-tech Noble Hub and MD IFING",
      bio: "About Mudathir Adesanya is an Islamic finance consultant and media CEO with a Master's degree in Islamic Banking and Finance from Bayero University, Kano, and a Bachelor's degree in Accounting from Crescent University, Abeokuta. He combines his expertise in Islamic finance, business development, and commodity trading to provide innovative and effective solutions to clients across various sectors. He is the Managing Director and CEO of IFING MEDIA LTD, a leading media company that provides news, insights, and analysis on Islamic finance and economics. He has grown IFING MEDIA to a prominent and trusted source of information and knowledge for the Islamic finance community, reaching a global audience of over 100,000 subscribers and followers. He has also established and maintained strategic partnerships with key stakeholders, such as regulators, scholars, practitioners, and investors, to promote and support the development and growth of the Islamic finance industry. is also a Lead Consultant at BIFCONT NG, a consulting firm that offers Islamic finance advisory, training, and research services. He has helped various clients, ranging from banks, microfinance institutions, cooperatives, to non-governmental organizations, foundations, and associations, design and implement Islamic finance products, services, and systems, such as Islamic microfinance, Islamic crowdfunding, Islamic social finance, and Islamic fintech. He has also conducted market research, feasibility studies, and impact assessments, as well as delivered training and capacity building programs, to enhance the skills and knowledge of his clients and their beneficiaries. He is passionate about Islamic finance and its potential to create positive social and economic impact in the world. He is constantly learning and improving his skills and knowledge, as well as sharing his insights and experiences with others through his media platforms and consulting projects. He is a skilled and analytical leader, communicator, and problem-solver, who values collaboration, innovation, and excellence.",
      topics: ["Islamic Finance", "Media & Communications", "Islamic Fintech"],
    },
    {
      name: "Assoc Prof. Shukurat Bello (CSAA)",
      title:
        "AAT, CIFE, CSAA, Team Lead, Shafana Innovate Hub and the CEO/Founder of Spak Innovation Hub.",
      bio: "Dr. Bello is an Associate Professor of Business Management and Entrepreneurship at Bayero University, Kano (BUK), Nigeria, with over 20 years of experience in teaching, research, and community service. She is a Certified Islamic Finance Executive (CIFE) and Certified Shariah Advisor and Auditor (CSAA), with deep expertise in non-interest financial systems and entrepreneurship. Dr. Bello teaches Islamic Capital Markets at the International Institute of Islamic Banking and Finance (IIIBF), BUK, and serves on the Advisory Committee of Experts (ACE) for non-interest financial institutions. She manages the BoI-BUK Innovation Hub, driving startup growth through incubation and acceleration programs, and leads Shafana Innovate Hub, a platform dedicated to nurturing innovation and impact-driven entrepreneurship. As a Sabbatical Fellow at Opolo Global Innovation, she served as Divisional Head of Programs and Ecosystem, supporting high-growth startups and innovation initiatives. Dr. Bello is a Fellow of the Institute of Strategic Entrepreneurship of Nigeria, championing ethical and sustainable enterprise development.",
      topics: [
        "Innovation Hub Management",
        "Shariah-compliant Finance",
        "Entrepreneurship Education",
      ],
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
