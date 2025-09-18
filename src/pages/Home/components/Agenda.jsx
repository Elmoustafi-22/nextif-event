import React from "react";

const Agenda = () => {
const agendaItems = [
    {
        day: "Day 1",
        time: "9:00 - 3:00",
        title: "Master Halal Fintech Models",
        description: "Understand profit-sharing, asset-backed financing, and Sukuk structures that comply with Islamic principles"
    },
    {
        day: "Day 2",
        time: "9:00 - 2:00",
        title: "Access Capital Networks",
        description: "Connect with Islamic investors, VCs, and accelerators actively funding halal startups"
    },
    {
        day: "Day 3",
        time: "10:00 - 12:00",
        title: "Build Sustainable Business Models",
        description: "Design fintech solutions that serve the 1.8 billion Muslim market while staying profitable"
    }
];

return (
  <section className="md:container px-6 mt-10">
    <div className="flex md:justify-between gap-4 flex-col md:flex-row">
      <h1 className="text-left text-prussian-blue text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
        Agenda
      </h1>
      <p className="text-royal-blue flex flex-col gap-1 font-body">
        <span className="block text-lg md:text-xl">
          October 12 - 15 | Horizon <br className="hidden md:block" />{" "}
          Convention center, Abuja
        </span>
      </p>
    </div>
    <div className="px-0 md:px-5 lg:px-30 grid grid-cols-1 gap-8 mt-8 md:mt-12">
      <div className="rounded-xl shadow flex flex-col gap-8 md:gap-24 justify-between shadow-blue-200 px-8 md:px-18 py-10 md:py-20 bg-royal-blue/20">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-2 justify-between"
          >
            <p className="text-2xl md:text-3xl font-heading text-prussian-blue font-semibold flex flex-col">
              <span>{item.day}</span>
              <span>{item.time}</span>
            </p>
            <p className="mt-4 md:mt-0 flex flex-col gap-2 md:gap-8 justify-start w-full md:w-2/3 text-lg font-body">
              <span className="text-2xl md:text-3xl font-heading text-prussian-blue font-semibold ">
                {item.title}{" "}
              </span>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Agenda;
