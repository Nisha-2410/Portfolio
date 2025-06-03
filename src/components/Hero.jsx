import { useState } from "react";
import cat from "../assets/cat.jpg";
import { About } from "./About";
import { Skills } from "./Skills";
import Contact from "./Contact";
import { Project } from "./Project";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen relative  px-6 md:px-14 lg:px-70 py-12">
      {/* Parallax Background Image */}
      <Parallax speed={-10}>
        <img
          src={"./parallax.jpg"}
          alt="Parallax cat"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
          style={{ zIndex: 0 }}
        />
      </Parallax>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi,{" "}
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-500 group-hover:from-pink-500 group-hover:via-fuchsia-500 group-hover:to-purple-600">
              I’m Nisha
            </span>{" "}
            <br className="hidden md:block" />
            Let’s Create Something Amazing Together.
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-gray-800 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus repudiandae molestias et corporis quas labore quidem.
          </motion.p>

          <motion.div
            className="mt-5 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Click here to see my{" "}
            <button
              onClick={() => setShowResume(true)}
              className="underline cursor-pointer text-blue-600 hover:text-blue-800"
            >
              resume
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-5 justify-center md:justify-start mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Your social links here */}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ zIndex: 10 }}
        >
          {/* This img is separate from parallax bg */}
          <img
            src={cat}
            alt="Nisha"
            className="rounded-full w-[220px] md:w-[280px] lg:w-[320px] transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_5px_rgba(147,51,234,0.6)] mt-5"
          />
        </motion.div>
      </div>

      {/* Resume Modal & Other Sections - no changes */}
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
  );
};

export default Hero;



