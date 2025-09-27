import React from 'react';

const PartnersPage = () => {
  const partners = [
    {
      name: "Sharia Labs",
      location: "UK",
      logo: "/images/sharia-labs.webp",
      description:
        "A company dedicated to fostering excellence in Sharia-compliant products, services, and processes. We aim to empower individuals and businesses by delivering tailored solutions grounded in Islamic principles.",
    },
    {
      name: "IIIBF",
      location: "Kano",
      logo: "/images/iiibf.webp",
      description:
        "The International Institute of Islamic Banking and Finance (IIIBF), Bayero University, Kano (BUK), Nigeria, is an exciting institution with a modest vibrant history and promising future, a wonderful place to learn and grow intellectually and academically through the Islamic teaching and principles. IIIBF possesses a wealth of academic experience combined with a great spirit and a commitment to excellence that clearly sets it apart from other institutes in Nigeria.",
    },
    {
      name: "RevsAI",
      location: "",
      logo: "/images/revsai.webp",
      description:
        "RevsAI (Revenue Revolution Amplifier Injector), where we build AI-powered marketing automation tools that help businesses improve their online visibility, reputation, customer engagement, and sales.",
    },
  ];

  return (
    <div className="bg-gray-50 font-body text-gray-800">
      {/* Hero Section */}
      <section className="bg-prussian-blue text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">
            Our Partners
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We are proud to collaborate with leading organizations to foster innovation and growth in the Islamic finance industry.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 object-contain"
                  />
                </div>
                <h4 className="text-xl font-heading font-semibold text-prussian-blue">
                  {partner.name}
                </h4>
                {partner.location && (
                  <p className="text-md font-body text-gray-600">
                    {partner.location}
                  </p>
                )}
                <div className="flex-grow">
                  {partner.description && (
                    <p className="mt-4 text-md font-body text-gray-700 text-left">
                      {partner.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;