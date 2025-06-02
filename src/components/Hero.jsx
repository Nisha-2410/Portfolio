import cat from "../assets/cat.jpg";
import { About } from "./About";
import { Skills } from "./Skills";
import Contact from "./Contact";
import { Project } from "./Project";
import { motion } from "framer-motion";


const Hero = () => {
  return (
<div className="min-h-screen custom-gradient-bg px-6 md:px-14 lg:px-70 py-12">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between">

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
        Hi, <span className="text-rose-400">I’m Nisha</span> <br className="hidden md:block" />
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
        Click here to see my <a href="/" className="underline">resume</a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-5 justify-center md:justify-start mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <i className="fa-brands fa-linkedin-in border text-gray-600 border-gray-300 p-3 rounded-full hover:scale-110 transition-transform duration-300"></i>
        <i className="fa-brands fa-whatsapp border text-gray-600 border-gray-300 p-3 rounded-full hover:scale-110 transition-transform duration-300"></i>
        <i className="fa-solid fa-phone border text-gray-600 border-gray-300 p-3 rounded-full hover:scale-110 transition-transform duration-300"></i>
      </motion.div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="flex-1 flex justify-center md:justify-end"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <img
        src={cat}
        alt="Nisha"
        className="rounded-full w-[220px] md:w-[280px] lg:w-[320px] transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  </div>

  {/* Other Sections */}
  <About />
  <Skills />
  <Project />
  <Contact />
</div>

  );
};

export default Hero;

