import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Our Partners", path: "/partners" },
  ];

  return (
    <header className=" sticky top-0 bg-prussian-blue z-50 py-3">
      <div className="md:container flex justify-between gap-6 items-center px-6">
        <div>
          <img
            src="/images/nextif-logo-lg.png"
            alt="Brand Logo"
            className="md:w-[50%] lg:w-[60%] w-[50%]"
          />
        </div>

        {/* Hamburger button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
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
              </svg>
            ) : (
              <svg
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
              </svg>
            )}
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex md:gap-8 lg:gap-12 font-heading capitalize text-blue-400 text-lg md:text-[18px] lg:text-xl">
            {navlinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link to={link.path}>{link.name}</Link>
                <span className="absolute w-0 h-[3px] bg-royal-blue left-0 bottom-0 group-hover:w-full transition-all duration-200"></span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://luma.com/gexigzaa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-royal-blue font-heading font-semibold px-6 md:px-8 lg:px-12 py-2.5 md:py-3 lg:py-5 text-gray-50 rounded-full text-lg md:text-[18px] lg:text-xl hover:bg-gray-100 hover:text-royal-blue transition duration-200"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-prussian-blue transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <nav>
            <ul className="flex flex-col items-center gap-8 font-heading capitalize text-blue-400 text-2xl">
              {navlinks.map((link) => (
                <li key={link.name} className="relative group">
                  <Link to={link.path} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <a
              href="https://luma.com/gexigzaa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-royal-blue font-heading font-semibold px-8 py-3 text-gray-50 rounded-full text-xl hover:bg-gray-100 hover:text-royal-blue transition duration-200"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
