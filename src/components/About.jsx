import flower from '../assets/flower.png'; 
import { motion } from "framer-motion";

export function About() {
  return (
<>
 <div className="flex flex-col justify-center items-center mt-12">
      
      {/* Heading */}
      <motion.div
        className="text-4xl font-bold md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.div>

      {/* Card */}
      <motion.div
        className="bg-white shadow shadow-amber-600 bg-opacity-80 flex flex-col justify-center items-center mt-5 rounded-4xl w-fit max-w-4xl md:w-[60%] lg:w-[70%] h-auto mx-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Paragraph Text */}
        <motion.div
          className="w-11/12 md:w-[65%] lg:w-[75%] text-center mx-auto font-serif text-sm md:text-2xl mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I’m a curious and driven student with a strong interest in web development. 
          I enjoy creating responsive, visually appealing interfaces using HTML, CSS, JavaScript, and React. 
          Coding allows me to blend creativity with logic, and I’m always exploring new tools and technologies to improve my skills.

          <br /><br />
          As I continue to learn and grow, I’m excited to take on new challenges, build real-world projects, 
          and collaborate with others who share the same passion for tech.
        </motion.div>

        {/* Flower Image */}
        <motion.div
          className="w-30 h-30 mt-4 mb-6"
          initial={{ opacity: 0, rotate: -15 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <img 
            src={flower} 
            alt="flower" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain" 
          />
        </motion.div>
      </motion.div>
    </div>

</>
  );
}