import { motion } from "framer-motion";
import CloudSkill from './Cloud';

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // more time between skills
        delayChildren: 0.5,   // initial delay before starting
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // smooth fade-up
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center flex-col items-center mt-15"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="font-bold text-3xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h1>

      <motion.div
        className="flex flex-col justify-center w-fit max-w-6xl items-center mt-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-row gap-4" variants={item}>
          <motion.div variants={item}><CloudSkill skill="C++" overlap={true} /></motion.div>
          <motion.div variants={item}><CloudSkill skill="JavaScript" overlap={true} /></motion.div>
          <motion.div variants={item}><CloudSkill skill="Python" overlap={true} /></motion.div>
        </motion.div>

        <motion.div className="flex flex-row gap-4 mt-4" variants={item}>
          <motion.div variants={item}><CloudSkill skill="React" overlap={true} /></motion.div>
          <motion.div variants={item}><CloudSkill skill="Node.js" overlap={true} /></motion.div>
          <motion.div variants={item}><CloudSkill skill="HTML" overlap={true} /></motion.div>
        </motion.div>

        <motion.div className="flex flex-row gap-4 mt-4" variants={item}>
          <motion.div variants={item}><CloudSkill skill="MongoDb" overlap={true} /></motion.div>
          <motion.div variants={item}><CloudSkill skill="MYSQL" overlap={true} /></motion.div>
          <motion.div variants={item}><CloudSkill skill="GitHub" overlap={true} /></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
