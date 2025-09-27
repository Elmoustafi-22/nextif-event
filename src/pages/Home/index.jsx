import React from "react";
import Hero from "./components/Hero";
import Event from "./components/Event";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import WhyAttend from "./components/WhyAttend";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Venue from "./components/Venue";
import Partners from "./components/Partners";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Event />
      <Speakers />
      <Agenda />
      <WhyAttend/>
      <Register/>
      <Partners />
      <Venue />
      <Contact/>
    </div>
  );
};

export default HomePage;
