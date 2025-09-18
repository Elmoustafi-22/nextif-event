import React from "react";
import Hero from "./components/Hero";
import Event from "./components/Event";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import WhyAttend from "./components/WhyAttend";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Event />
      <Agenda />
      <Speakers />
      <WhyAttend/>
    </div>
  );
};

export default HomePage;
