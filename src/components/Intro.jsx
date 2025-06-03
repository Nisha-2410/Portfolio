import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const firstLine = "Step inside my world";
const secondLine = "of code, color, and creativity.";

const container = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9 + i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Intro = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <Navbar/>
      {/* Centered Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center -mt-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.8rem)",
            lineHeight: 1.1,
            color: "#5B3E96",
            WebkitTextStroke: "1px rgba(0,0,0,0.6)",
            
            fontWeight: "800",
            fontFamily: "'Georgia'",
          }}
        >
          {firstLine}
        </motion.h1>

        <motion.h2
          style={{
            fontSize: "clamp(1rem, 3vw, 1.8rem)",
            lineHeight: 1.2,
            color: "#9B59B6",
            marginTop: "0.3rem",
            WebkitTextStroke: "0.8px rgba(0,0,0,0.4)",
            textStroke: "0.8px rgba(0,0,0,0.4)",
            fontWeight: "600",
            fontFamily: "'Georgia'",
          }}
          className="max-w-md"
        >
          {secondLine}
        </motion.h2>

        {/* Buttons */}
        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          <motion.button
            className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 via-purple-700 to-blue-900 text-white font-semibold shadow-lg hover:scale-105 transform transition-transform duration-300"
            variants={buttonVariants}
            custom={0}
          >
            Let’s Explore
          </motion.button>
          <motion.button
            className="px-6 py-3 rounded-md border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300"
            variants={buttonVariants}
            custom={1}
          >
            Let’s Connect
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;



