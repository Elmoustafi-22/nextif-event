import React from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

const SpeakersPage = () => {
  const speakers = [
    {
      name: "Prof. Usman Shuaib Zunnurain",
      title: "Director, IIIBF | Member, CBN-FRACE",
      bio: "Professor Usman Shuaib Zunnurain is a distinguished legal scholar and authority in Islamic finance, Shariah governance, and regulatory compliance. He currently serves as the Director of the International Institute of Islamic Banking and Finance (IIIBF), Bayero University Kano, and is a member of the Central Bank of Nigeria’s Financial Regulation Advisory Council of Experts (CBN-FRACE), where he contributes to shaping Nigeria’s Islamic finance regulatory landscape. With deep training in both Islamic and conventional law, Professor Zunnurain brings a rare dual-lens perspective to complex issues at the intersection of law, ethics, and finance. A former Dean of the Faculty of Law at Bayero University Kano, he is widely respected for his role in strengthening professional ethics, institutional standards, and compliance culture within legal and financial education. His work consistently emphasizes compliance not as a constraint, but as a strategic foundation for trust, credibility, and sustainable scale in modern business and finance.",
      topics: [
        "Islamic Banking & Finance",
        "Legal Education",
        "Human Rights Law",
      ],
    },
    {
      name: "Mr. Mudathir Adesanya",
      title: "Founder, M-tech Noble Hub | MD, IFING Media Ltd.",
      bio: "Mudathir Adesanya is an Islamic finance consultant, halal economy strategist, and media entrepreneur with deep experience in shaping narratives and building ecosystems within the ethical finance space. He is the Managing Director of IFING Media, a leading Islamic finance storytelling platform that amplifies industry insights, policy conversations, and innovation across Africa and beyond, reaching a global audience of over 100,000 professionals and enthusiasts. Beyond media, Mudathir is a Lead Consultant at BIFCONT NG, where he advises financial institutions, startups, cooperatives, NGOs, and foundations on Islamic finance solutions spanning Islamic microfinance, halal business models, Islamic social finance, and emerging fintech applications. His work focuses on translating Shariah principles into practical, scalable solutions for real economies. He holds a Master’s degree in Islamic Banking and Finance and is widely respected for bridging knowledge, practice, and public understanding within the halal and Islamic finance ecosystem.",
      topics: ["Islamic Finance", "Media & Communications", "Islamic Fintech"],
    },
    {
      name: "Assoc Prof. Shukurat Bello (CSAA)",
      title:
        "AAT, CIFE, CSAA, Team Lead, Shafana Innovate Hub | CEO/Founder, Spak Innovation Hub.",
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
