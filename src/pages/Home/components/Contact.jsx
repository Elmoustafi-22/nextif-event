import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiFacebookLogoFill, PiLinkedinLogoFill, PiInstagramLogoFill, PiYoutubeLogoFill } from 'react-icons/pi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:nextif.connect@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-black py-10 md:py-20">
      <div className="md:container mx-auto px-6 mb-8">
        <img src='/images/location.png' className='rounded-4xl'/>
      </div>
      <div className="md:container mx-auto px-6">
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
          <div className="w-full md:w-3/5 bg-gray-100 p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-prussian-blue mb-8">
              NEXTIF Islamic Finance Roundtable
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-4 font-body text-royal-blue">
                <li>
                  <Link to="#" className="hover:underline">
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Register
                  </Link>
                </li>
              </ul>
              <ul className="space-y-4 font-body text-royal-blue">
                <li>
                  <Link to="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <p className="mt-16 text-sm text-gray-500 font-body">
              © 2025 NextIF. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-2/5 bg-royal-blue p-8 md:p-12 lg:p-16 text-white rounded-3xl md:-ml-8 md:mt-0 -mt-6">
            <h3 className="text-xl font-bold font-heading">GET IN TOUCH</h3>
            <p className="mt-2 font-body text-sm">
              Reach out with inquiries about tickets, partnerships, or event
              details.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="border-b border-white py-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>
              <div className="border-b border-white py-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>
              <div className="border-b border-white py-2">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                />
              </div>
              <div className="border-b border-white py-2">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white placeholder-white focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-royal-blue font-bold px-8 py-3 rounded-full mt-6 hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="mt-10">
              <h3 className="text-xl font-bold font-heading">FOLLOW US</h3>
              <div className="flex gap-6 mt-4">
                <a href="#" className="text-3xl hover:opacity-80">
                  <PiFacebookLogoFill />
                </a>
                <a href="#" className="text-3xl hover:opacity-80">
                  <PiLinkedinLogoFill />
                </a>
                <a href="#" className="text-3xl hover:opacity-80">
                  <PiInstagramLogoFill />
                </a>
                <a href="#" className="text-3xl  hover:opacity-80">
                  <PiYoutubeLogoFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;