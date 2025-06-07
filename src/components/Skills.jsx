import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiMongodb, SiJavascript,
  SiCplusplus, SiFirebase, SiMysql, SiExpress,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

const bubbleVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [skillLimit, setSkillLimit] = useState(skills.length);
  const [animatedOnce, setAnimatedOnce] = useState([]);

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;
      if (width < 768) setSkillLimit(6);
      else if (width < 1024) setSkillLimit(7);
      else setSkillLimit(skills.length);
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const visibleSkills = showAll ? skills : skills.slice(0, skillLimit);

  return (
    <section className="max-w-5xl mx-auto px-4 py-15">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-purple-800">
        My <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 bg-clip-text text-transparent underline">Evolving</span> Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {visibleSkills.map(({ name, icon }, i) => (
          <motion.div
            key={name}
            variants={bubbleVariant}
            initial={animatedOnce.includes(name) ? false : "hidden"}
            animate="visible"
            onAnimationComplete={() => {
              if (!animatedOnce.includes(name)) {
                setAnimatedOnce((prev) => [...prev, name]);
              }
            }}
            className="w-28 h-28 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all flex flex-col items-center justify-center text-purple-900 text-xl font-semibold"
            style={{
              border: "1px solid rgba(127, 112, 209, 0.4)",
              boxShadow: "inset 0 0 12px 2px rgba(127, 112, 209, 0.3)",
              background: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <div className="text-3xl mb-2">{icon}</div>
            <span className="text-sm text-center">{name}</span>
          </motion.div>
        ))}
      </div>

      {skillLimit < skills.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            {showAll ? "Hide Skills" : "View All Skills"}
          </button>
        </div>
      )}
    </section>
  );
};
