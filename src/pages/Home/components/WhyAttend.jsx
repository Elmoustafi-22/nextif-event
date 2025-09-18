import React from 'react'

const WhyAttend = () => {
  return (
    <section className="bg-white md:container px-6 mt-10">
      <div className="flex md:justify-between gap-4 flex-col md:flex-row">
        <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
          Why Attend?
        </h1>
        <p className="text-royal-blue flex flex-col gap-1 font-body">
          <span className="block text-lg md:text-xl">
            An exclusive gathering of selected
            <br className="hidden md:block" /> Islamic finance enthusiast,
            <br className="hidden md:block" /> tech innovators, ethical
            startups, <br className="hidden md:block" /> Halal entrepreneurs,
            and students.
          </span>
        </p>
      </div>
      <div className="px-0 md:px-5 lg:px-30 grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 md:mt-12">
        <div className="relative rounded-xl shadow flex flex-col gap-8 justify-between shadow-blue-200 px-8 py-6 bg-royal-blue/20 overflow-hidden">
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Cutting edge insights
          </h3>
          <div className="flex flex-row gap-6 md:gap-8 justify-between">
            <img src="/images/01.png" className="absolute left-3 bottom-0" />
            <p className="text-gray-800 text-lg font-body ml-65">
              Hear from industry leaders in Islamic finance with decades of
              combined experience building banks, funding startups, and
              pioneering halal fintech solutions across Africa.
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <div></div>
          </div>
        </div>
        <div className="relative rounded-xl shadow flex flex-col gap-8 justify-between shadow-blue-200 px-8 py-6 bg-royal-blue/20 overflow-hidden">
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Cutting edge insights
          </h3>
          <div className="flex flex-row gap-6 md:gap-8 justify-between">
            <img src="/images/02.png" className="absolute right-3 bottom-0" />
            <p className="text-gray-800 text-lg font-body mr-65">
              Hear from industry leaders in Islamic finance with decades of
              combined experience building banks, funding startups, and
              pioneering halal fintech solutions across Africa.
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <div></div>
          </div>
        </div>
        <div className="relative rounded-xl shadow flex flex-col gap-8 justify-between shadow-blue-200 px-8 py-6 bg-royal-blue/20 overflow-hidden">
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Cutting edge insights
          </h3>
          <div className="flex flex-row gap-6 md:gap-8 justify-between">
            <img src="/images/03.png" className="absolute left-3 -bottom-2" />
            <p className="text-gray-800 text-lg font-body ml-65">
              Hear from industry leaders in Islamic finance with decades of
              combined experience building banks, funding startups, and
              pioneering halal fintech solutions across Africa.
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <div></div>
          </div>
        </div>
        <div className="relative rounded-xl shadow flex flex-col gap-8 justify-between shadow-blue-200 px-8 py-6 bg-royal-blue/20 overflow-hidden">
          <h3 className="font-heading text-2xl md:text-4xl font-medium text-prussian-blue">
            Cutting edge insights
          </h3>
          <div className="flex flex-row gap-6 md:gap-8 justify-between">
            <img src="/images/04.png" className="absolute right-3 bottom-0" />
            <p className="text-gray-800 text-lg font-body mr-65">
              Hear from industry leaders in Islamic finance with decades of
              combined experience building banks, funding startups, and
              pioneering halal fintech solutions across Africa.
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAttend
