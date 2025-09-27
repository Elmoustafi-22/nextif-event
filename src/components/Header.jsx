import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Our Partners", path: "/partners" },
  ];

  const navlist = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const navitem = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-prussian-blue z-50 py-3"
    >
      <div className="md:container flex justify-between gap-6 items-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/home">
            <img
              src="/images/nextif-logo-lg.png"
              alt="Brand Logo"
              className="md:w-[50%] lg:w-[60%] w-[50%]"
            />
          </Link>
        </motion.div>

        {/* Hamburger button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <AnimatePresence>
              {isOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </motion.svg>
              ) : (
                <motion.svg
                  key="open"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        <nav className="hidden md:block">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={navlist}
            className="flex md:gap-8 lg:gap-12 font-heading capitalize text-blue-400 text-lg md:text-[18px] lg:text-xl"
          >
            {navlinks.map((link) => (
              <motion.li
                key={link.name}
                variants={navitem}
                className="relative group"
              >
                <Link to={link.path}>{link.name}</Link>
                <span className="absolute w-0 h-[3px] bg-royal-blue left-0 bottom-0 group-hover:w-full transition-all duration-200"></span>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="hidden md:block"
        >
          <a
            href="https://luma.com/gexigzaa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-royal-blue font-heading font-semibold px-6 md:px-8 lg:px-12 py-2.5 md:py-3 lg:py-5 text-gray-50 rounded-full text-lg md:text-[18px] lg:text-xl hover:bg-gray-100 hover:text-royal-blue transition duration-200"
          >
            Register
          </a>
        </motion.div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-prussian-blue"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <nav>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={navlist}
                  className="flex flex-col items-center gap-8 font-heading capitalize text-blue-400 text-2xl"
                >
                  {navlinks.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={navitem}
                      className="relative group"
                    >
                      <Link to={link.path} onClick={() => setIsOpen(false)}>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <a
                  href="https://luma.com/gexigzaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="bg-royal-blue font-heading font-semibold px-8 py-3 text-gray-50 rounded-full text-xl hover:bg-gray-100 hover:text-royal-blue transition duration-200"
                >
                  Register
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

