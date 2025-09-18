import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(images/hero.jpg)` }}
    >
      <div className="absolute bg-black/60 inset-0 z-0">
        <div className="md:container flex flex-col justify-between gap-8 px-10 md:gap-4 py-20 md:py-40 md:flex-row relative z-10">
          <div className=" flex flex-col gap-8 md:gap-12 lg:gap-20 justify-center  w-full md:w-3/4">
            <div className="flex flex-col gap-5 justify-center">
              <h1 className="text-5xl text-center md:text-left md:text-6xl lg:text-7xl font-heading text-white font-extrabold leading-14 md:leading-16 lg:leading-[75px]">
                NEXTIF'
                <span className="text-4xl md:text-5xl lg:text-6xl">s</span>
                <br />
                <span className="text-5xl md:text-6xl">
                  Islamic Finance Roundtable
                </span>{" "}
              </h1>
              <h3 className="font-heading text-2xl mt-2 md:mt-4 md:text-[26px] lg:text-[31px] text-center md:text-left italic text-white">
                <span className="font-bold">Theme</span>: Building the Next Big
                Thing with Islamic Finance
              </h3>
              <ul className="list-disc flex flex-row justify-start gap-2 md:gap-8 font-body text-white italic mt-4 text-sm md:text-base px-6 md:px-5">
                {[
                  "Learn practical halal fintech models",
                  "Network with mentors",
                  "Pitch ideas to halal investors",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex md:justify-start justify-center">
              <Link className="bg-royal-blue font-heading font-semibold px-10 md:px-30 py-5 md:py-6 text-gray-50 rounded-full text-xl md:text-[20px] lg:text-2xl hover:bg-gray-100 hover:text-royal-blue transition duration-200">
                Reserve my seat
              </Link>
            </div>
          </div>
          <div className="w-full hidden lg:block md:w-2/4 lg:w-2/5">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src="/images/hero-img.jpg"
                alt="hero image"
                className="rounded-full w-[75%] md:w-[90%] lg:w-full shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
