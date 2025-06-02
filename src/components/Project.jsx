import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export const Project = () => {
  const [showMore, setShowMore] = useState({
    inote: false,
    news: false,
    portfolio: false,
  });

  const toggle = (key) => {
    setShowMore({ ...showMore, [key]: !showMore[key] });
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay,
      },
    }),
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl mt-8">My Projects</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10 mt-8 text-center ml-3 mr-3 mb-2 items-start">

        {/* iNotebook Card */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-4xl w-fit md:w-[32%] shadow-amber-600 shadow bg-opacity-80 md:ml-10 md:mr-10 lg:mr-15 lg:ml-15 transform transition duration-300 hover:scale-105 hover:bg-amber-50"
        >
          <div className="font-bold mt-2 font-serif">iNotebook</div>
          <div className="text-sm mb-2 font-serif">Cloud-Based Note-Taking App</div>
          <div className="p-2 pl-3 pr-3 font-serif">
            A secure and responsive cloud-based note-taking web app...
            <div
              className={`transition-all duration-300 ease-in-out ${
                showMore.inote ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>
                Users can sign up, log in, and create, update, or delete notes from anywhere. Ideal for productivity on the go.
              </p>
              <p>
                <span className="font-semibold">Tech Stack:</span> React, Node.js, Express, MongoDB
              </p>
              <p>
                <span className="font-semibold">GitHub:</span> [Link]
              </p>
            </div>
          </div>
          <button
            className="mb-4 mt-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-6 shadow-lg px-4 py-1 rounded-full hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-colors duration-500 hover:scale-105 font-bold"
            onClick={() => toggle("inote")}
          >
            {showMore.inote ? "Show Less" : "Learn More"}
          </button>
        </motion.div>

        {/* NewsMonkey Card */}
        <motion.div
          custom={0.3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-4xl w-fit md:w-[32%] shadow-amber-600 shadow bg-opacity-80 md:ml-10 md:mr-10 transform transition duration-300 hover:scale-105 hover:bg-amber-50"
        >
          <div className="font-bold mt-2 font-serif">NewsMonkey</div>
          <div className="text-sm mb-2 font-serif">Live News App</div>
          <div className="p-2 pl-3 pr-3 font-serif">
            A news aggregator app that fetches real-time headlines...
            <div
              className={`transition-all duration-300 ease-in-out ${
                showMore.news ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>
                Users can view news based on categories like business, technology, and sports using the News API.
              </p>
              <p>
                <span className="font-semibold">Tech Stack:</span> React, Node.js, Express, MongoDB
              </p>
              <p>
                <span className="font-semibold">GitHub:</span> [Link]
              </p>
            </div>
          </div>
          <button
            className="mb-4 mt-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-6 shadow-lg px-4 py-1 rounded-full hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-colors duration-500 hover:scale-105 font-bold"
            onClick={() => toggle("news")}
          >
            {showMore.news ? "Show Less" : "Learn More"}
          </button>
        </motion.div>

        {/* Portfolio Card */}
        <motion.div
          custom={0.6}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-4xl w-fit md:w-[32%] shadow-amber-600 shadow bg-opacity-80 md:ml-10 md:mr-10 transform transition duration-300 hover:scale-105 hover:bg-amber-50"
        >
          <div className="font-bold mt-2 font-serif">Portfolio</div>
          <div className="text-sm mb-2 font-serif">Personal Developer Website</div>
          <div className="p-2 pl-3 pr-3 font-serif">
            A personal portfolio website showcasing projects...
            <div
              className={`transition-all duration-300 ease-in-out ${
                showMore.portfolio ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>
                It features skills, contact details, and a clean, responsive UI to reflect your developer journey.
              </p>
              <p>
                <span className="font-semibold">Tech Stack:</span> React
              </p>
              <p>
                <span className="font-semibold">GitHub:</span> [Link]
              </p>
            </div>
          </div>
          <button
            className="mb-4 mt-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] p-6 shadow-lg px-4 py-1 rounded-full hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-colors duration-500 hover:scale-105 font-bold"
            onClick={() => toggle("portfolio")}
          >
            {showMore.portfolio ? "Show Less" : "Learn More"}
          </button>
        </motion.div>

      </div>
    </div>
  );
};
