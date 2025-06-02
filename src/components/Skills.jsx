import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS", "Redux"],
  },
  {
    category: "Languages",
    skills: ["C++", "JavaScript", "Python", "SQL"],
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
      staggerChildren: 0.15,
    },
  },
};

const topRowVariant = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const sideSquareLeftVariant = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const sideSquareRightVariant = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const bottomRowVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Skills = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 mt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
        variants={topRowVariant}
        style={{ color: "#5B3E96" }}
      >
        Here’s what I’m <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 bg-clip-text text-transparent font-sans underline">Capable</span> of
      </motion.h2>

      {/* === Small Devices Custom Layout === */}
      <div className="block md:hidden space-y-4">
        {/* Frontend - full width */}
        <motion.div
          className="rounded-2xl p-6 flex flex-col justify-center items-center bg-white"
          style={{
            border: "1px solid rgba(127, 112, 209, 0.5)",
            boxShadow: "inset 0 0 15px 5px rgba(127, 112, 209, 0.6)",
            background: "rgba(255, 255, 255, 0.85)",
          }}
          variants={topRowVariant}
        >
          <h3 className="text-2xl font-extrabold mb-6 text-purple-900">
            Frontend
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 text-sm text-center">
            {skillCategories[0].skills.map((skill) => (
              <li
                key={skill}
                className="bg-purple-200 text-purple-900 px-4 py-1 rounded-full hover:bg-purple-400 hover:text-white transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Backend and Databases side-by-side */}
        <div className="flex gap-4">
          <motion.div
            className="flex-1 rounded-2xl p-4 flex flex-col justify-center items-center bg-white"
            style={{
              border: "1px solid rgba(127, 112, 209, 0.5)",
              boxShadow: "inset 0 0 15px 5px rgba(127, 112, 209, 0.6)",
              background: "rgba(255, 255, 255, 0.85)",
            }}
            variants={sideSquareLeftVariant}
          >
            <h3 className="text-2xl font-extrabold mb-6 text-purple-900">
              Backend
            </h3>
            <ul className="flex flex-wrap justify-center gap-1 text-xs text-center">
              {skillCategories[2].skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full hover:bg-purple-400 hover:text-white transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex-1 rounded-2xl p-4 flex flex-col justify-center items-center bg-white"
            style={{
              border: "1px solid rgba(127, 112, 209, 0.5)",
              boxShadow: "inset 0 0 15px 5px rgba(127, 112, 209, 0.6)",
              background: "rgba(255, 255, 255, 0.85)",
            }}
            variants={sideSquareRightVariant}
          >
            <h3 className="text-2xl font-extrabold mb-6 text-purple-900">
              Databases
            </h3>
            <ul className="flex flex-wrap justify-center gap-1 text-xs text-center">
              {skillCategories[3].skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full hover:bg-purple-400 hover:text-white transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Languages - full width */}
        <motion.div
          className="rounded-2xl p-6 flex flex-col justify-center items-center bg-white"
          style={{
            border: "1px solid rgba(127, 112, 209, 0.5)",
            boxShadow: "inset 0 0 15px 5px rgba(127, 112, 209, 0.6)",
            background: "rgba(255, 255, 255, 0.85)",
          }}
          variants={bottomRowVariant}
        >
          <h3 className="text-2xl font-extrabold mb-6 text-purple-900">
            Languages
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 text-sm text-center">
            {skillCategories[1].skills.map((skill) => (
              <li
                key={skill}
                className="bg-purple-200 text-purple-900 px-4 py-1 rounded-full hover:bg-purple-400 hover:text-white transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* === Medium & Large Devices Grid with padding === */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 gap-6">
        {skillCategories.map(({ category, skills }) => (
          <motion.div
            key={category}
            className="rounded-2xl p-10 flex flex-col justify-center items-center bg-white" // increased padding for med/large
            style={{
              border: "1px solid rgba(127, 112, 209, 0.5)",
              boxShadow: "inset 0 0 15px 5px rgba(127, 112, 209, 0.6)",
              background: "rgba(255, 255, 255, 0.85)",
            }}
            variants={
              category === "Frontend" || category === "Languages"
                ? topRowVariant
                : category === "Backend"
                ? sideSquareLeftVariant
                : sideSquareRightVariant
            }
          >
            <h3 className="text-2xl font-extrabold mb-6 text-purple-900">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-3 text-base text-center">
              {/* increased bubble size by increasing padding and font size */}
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-purple-200 text-purple-900 px-6 py-2 rounded-full hover:bg-purple-400 hover:text-white transition"
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

