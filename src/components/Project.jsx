import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const projectsData = [
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
    techIcons: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
    screenshot: "/screenshots/inote.png",
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
      techIcons: [
    "fab fa-react",
    "fab fa-html5",
    "fab fa-css3-alt",
    "fab fa-js-square",
    "fas fa-newspaper", // representing News API with newspaper icon
  ],
    screenshot: "/screenshots/news.png",
  },
  {
    key: "portfolio",
    title: "Portfolio",
    subtitle: "Personal Developer Website",
    brief: "A personal portfolio website showcasing projects...",
    details: [
      "Includes skills, contact form, and responsive layout.",
      "Tech Stack: React, HTML, Tailwind, Framer Motion",
      "GitHub: https://github.com/Nisha-2410/Portfolio",
    ],
    techIcons: ["fab fa-react", "fab fa-html5", "fab fa-css3-alt"],
    screenshot: "/screenshots/portfolio.png",
  },
  // Additional projects
  {
    key: "EduVault",
    title: "EduVault",
    subtitle: "All Your Study Resources, One Vault",
    brief: "A platform to share technical articles and tutorials.",
    details: [
      "Your one-stop digital library for notes, previous year questions, and books across all departments and subjects..",
      "Tech Stack: HTML,CSS,JavaScript",
      "GitHub: https://github.com/Nisha-2410/EduVault",
    ],
    techIcons: ["fab fa-js", "fas fa-database", "fab fa-css3-alt"],
    screenshot: "/screenshots/blog.png",
  },
  {
    key: "TODO",
    title: "TODO ",
    subtitle: "Tasks Made Simple and Manageable.",
    brief: "A simple and efficient task manager to help you organize your day and boost productivity",
    details: [
      "Socket.IO powered, with private and group messaging.",
      "Tech Stack: React, Node.js, Socket.IO",
      "GitHub: https://github.com/Nisha-2410/todo",
    ],
    techIcons: ["fab fa-react", "fab fa-node-js", "fas fa-comments"],
    screenshot: "/screenshots/chatapp.png",
  },
];

export const Project = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine which projects to display
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section className="pt-10 pb-15 px-5 max-w-7xl mx-auto">
      <h1
        className="text-3xl md:text-5xl lg:text-6xl text-purple-900 font-bold text-center mb-8"
        
      >
        What I’ve{" "}

  Built
  




      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {displayedProjects.map((proj) => (
          <motion.div
            key={proj.key}
            className="bg-white rounded-3xl p-5 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            style={{
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: 'inset 0 0 15px 5px rgba(157, 89, 182, 0.7)',
            border: '1px solid rgba(127, 122, 209, 0.5)',
            }}
          >
            <img
              src={proj.screenshot}
              alt={proj.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h2
              className="text-xl font-bold mb-1"
              style={{ color: "#5B3E96" }}
            >
              {proj.title}
            </h2>
            <h3 className="text-sm text-gray-600 mb-2">{proj.subtitle}</h3>
            <p className="text-gray-700 mb-3">{proj.brief}</p>
            <div className="flex space-x-3 mb-2">
              {proj.techIcons.map((icon, idx) => (
                <i
                  key={idx}
                  className={`${icon} text-xl`}
                  title={icon.split(" ")[1].replace("fa-", "")}
                />
              ))}
            </div>
            <a
              href={proj.details.find((d) => d.startsWith("GitHub:"))?.split("GitHub: ")[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 text-sm"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* Toggle button */}
      <div className="text-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-6 py-3 bg-gradient-to-r from-purple-700 to-pink-500 text-white rounded-full font-semibold hover:from-pink-500 hover:to-purple-700 transition-colors duration-300 shadow-lg"
        >
          {showAll ? "View Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
};
