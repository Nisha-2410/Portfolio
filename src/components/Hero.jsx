import { useState } from "react";
import cat from "../assets/cat.jpg";
import { About } from "./About";
import { Skills } from "./Skills";
import Contact from "./Contact";
import { Project } from "./Project";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-14 py-45 text-black custom-gradient-bg">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Hi,{" "}
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              I’m Nisha
            </span>{" "}
            <br className="hidden md:block" />
            Let’s Create Something Amazing Together.
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-gray-700 max-w-xl mx-auto md:mx-0 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A creative developer passionate about building beautiful web
            experiences.
          </motion.p>

          <motion.div
            className="mt-5 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Click here to see my{" "}
            <button
              onClick={() => setShowResume(true)}
              className="underline text-blue-600 hover:text-blue-800"
            >
              resume
            </button>
          </motion.div>

          {/* 🔗 Social Links */}
          <motion.div
            className="mt-6 flex gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* LeetCode */}
            <a
              href="https://leetcode.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-500 transition-all duration-300"
            >
              <i className="fa-solid fa-code text-2xl hover:drop-shadow-[0_0_6px_rgba(255,191,0,0.8)]"></i>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-all duration-300"
            >
              <i className="fab fa-github text-2xl hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/your_username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 transition-all duration-300"
            >
              <i className="fab fa-instagram text-2xl hover:drop-shadow-[0_0_6px_rgba(255,105,180,0.7)]"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={cat}
            alt="Nisha"
            className="rounded-full w-[150px] md:w-[280px] lg:w-[320px] shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              boxShadow: "0 0 15px 7px rgba(155, 89, 182, 0.7)", // Purple glow
            }}
          />
        </motion.div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-6 relative">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close Resume"
            >
              &times;
            </button>
            <iframe
              src="/Nisha.pdf"
              title="Resume"
              className="w-full h-[80vh]"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}

      {/* Other Sections */}
      <div className="w-full">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Hero;


