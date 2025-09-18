import React from "react";
import { Link } from "react-router-dom";
import { PiArrowUpRight } from 'react-icons/pi'

const Speakers = () => {
  const speakers = [
    { name: "Mr. Bala Muhammad", title: "CEO, OpenIF" },
    {
      name: "Dr. Aisha Rahman",
      title: "Head of Islamic Finance Research, Global Finance Institute",
    },
    {
      name: "Sheikh Ahmad Al-Maktoum",
      title: "Chairman, Ethical Investment Solutions",
    },
    {
      name: "Prof. Sarah Johnson",
      title: "Director, Center for Islamic Economics",
    },
    {
      name: "Mr. Hassan Ibrahim",
      title: "Chief Innovation Officer, TechFin Islamic",
    },
    {
      name: "Ms. Fatima Al-Zahra",
      title: "Senior Advisor, Sustainable Islamic Banking",
    },
  ];
  return (
    <section
      className="mt-10 py-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(/images/speakers-bg.png)` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="md:container px-6 relative z-10">
        <div className="flex md:justify-between gap-4 flex-col md:flex-row">
          <h1 className="md:text-left text-gray-50 text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
            Keynote Speakers
          </h1>
          <p className="text-gray-50 font-body">
            <span className="block text-lg md:text-xl">
              Meeting industry leaders <br className="hidden md:block" />{" "}
              shaping the world of Islamic Finance
            </span>
          </p>
        </div>
        <div className="px-0 md:px-5 lg:px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-8 p-10 bg-prussian-blue rounded-2xl shadow-md"
            >
              <p className="text-2xl font-heading text-gray-50 font-semibold">
                {speaker.name}
              </p>
              <p className="text-lg font-body text-gray-50">{speaker.title}</p>
            </div>
          ))}
        </div>
        <div className="inline-block mt-8 px-0 md:px-5 lg:px-30">
          <Link className="flex gap-2 whitespace-nowrap font-body bg-prussian-blue border-0 shadow-sm px-6 py-3 text-white text-xl rounded-full items-center">
            And more <PiArrowUpRight />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
