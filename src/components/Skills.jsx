import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C++", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React",  "HTML", "CSS", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },


];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const leftSlide = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const rightSlide = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

export const Skills = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: '#5B3E96' }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {skillCategories.map(({ category, skills }, index) => (
          <motion.div
            key={category}
            
            className="bg-purple-50 rounded-2xl p-6 py-9 shadow-md"
             style={{ 
            background: 'rgba(255, 255, 255, 0.85)',
            boxShadow: 'inset 0 0 15px 5px rgba(127, 112, 209, 0.6)',
            border: '1px solid rgba(127, 112, 209, 0.5)',
          }}
            variants={index % 2 === 0 ? leftSlide : rightSlide}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-800">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-purple-200 text-purple-900 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:bg-purple-400 hover:text-white cursor-default transition-colors"
                  
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
