import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)


  const navlinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Contact", path: "/contact" },
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
        <nav className="hidden md:block">
          <ul className="flex md:gap-8 lg:gap-12 font-heading capitalize text-blue-400 text-lg md:text-[18px] lg:text-xl">
            {navlinks.map((link) => (
              <li key={link} className="relative group">
                <Link to={link.path}>{link.name}</Link>
                <span className="absolute w-0 h-[3px] bg-royal-blue left-0 bottom-0 group-hover:w-full transition-all duration-200"></span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link className="bg-royal-blue font-heading font-semibold px-6 md:px-8 lg:px-12 py-2.5 md:py-3 lg:py-5 text-gray-50 rounded-full text-lg md:text-[18px] lg:text-xl hover:bg-gray-100 hover:text-royal-blue transition duration-200">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
