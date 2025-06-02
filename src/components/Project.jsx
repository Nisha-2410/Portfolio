import React, { useState } from "react";
import { motion } from "framer-motion";

export const Project = () => {
  const [showMore, setShowMore] = useState({
    inote: false,
    news: false,
    portfolio: false,
  });

  const toggle = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      key: "inote",
      title: "iNotebook",
      subtitle: "Cloud-Based Note-Taking App",
      brief: "A secure and responsive cloud-based note-taking web app...",
      details: [
        "Users can sign up, log in, and manage notes from anywhere.",
        "Tech Stack: React, Node.js, Express, MongoDB",
        "GitHub: https://github.com/Nisha-2410/inotebook",
      ],
    },
    {
      key: "news",
      title: "NewsMonkey",
      subtitle: "Live News App",
      brief: "A news aggregator app that fetches real-time headlines...",
      details: [
        "Get category-based news using News API.",
        "Tech Stack: React, NewsAPI",
        "GitHub: https://github.com/Nisha-2410/my-app",
      ],
    },
    {
      key: "portfolio",
      title: "Portfolio",
      subtitle: "Personal Developer Website",
      brief: "A personal portfolio website showcasing projects...",
      details: [
        "Includes skills, contact form, and responsive layout.",
        "Tech Stack: React,HTML,Tailwind,framer motion",
        "GitHub: https://github.com/Nisha-2410/Portfolio",
      ],
    },
  ];

  return (
    <section className="pt-10 pb-15 px-5 ">
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        style={{ color: "#5B3E96" }}
      >
        What I’ve <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 bg-clip-text text-transparent font-sans underline">Built</span>
      </h1>

      <motion.div
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-10 md:grid-cols-3"
      >
        {projects.map((proj) => (
          <div
            key={proj.key}
            className="bg-white p-6 text-center rounded-3xl shadow-inner border border-gray-200 transition-transform transform hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.85)",
              boxShadow: "inset 0 0 15px 5px rgba(127, 112, 209, 0.6)",
              border: "1px solid rgba(127, 112, 209, 0.5)",
            }}
          >
            <h2
              className="text-xl font-bold mb-1"
              style={{ color: "#5B3E96" }}
            >
              {proj.title}
            </h2>
            <h3 className="text-sm text-gray-600 mb-3">{proj.subtitle}</h3>
            <p className="text-sm mb-3 text-gray-800">{proj.brief}</p>
            {showMore[proj.key] && (
              <ul className="text-sm text-gray-700 space-y-1">
                {proj.details.map((line, i) => {
                  if (line.startsWith("GitHub:")) {
                    const url = line.split("GitHub: ")[1];
                    return (
                      <li key={i}>
                        • <span className="font-semibold">GitHub:</span>{" "}
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          {url}
                        </a>
                      </li>
                    );
                  }
                  return <li key={i}>• {line}</li>;
                })}
              </ul>
            )}
            <button
              className="mt-4 bg-gradient-to-r from-[#ff6ec4] to-[#7873f5] px-4 py-2 rounded-full font-semibold text-white hover:from-[#7873f5] hover:to-[#ff6ec4] transition-all duration-300 shadow-md"
              onClick={() => toggle(proj.key)}
            >
              {showMore[proj.key] ? "Show Less" : "Learn More"}
            </button>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
