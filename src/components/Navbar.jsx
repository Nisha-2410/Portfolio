import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 30,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  closed: {
    x: "100%",
    y: "-100%",
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const sections = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScrollToSection = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-3 bg-gray-100 sticky top-0 z-50">
        <span className="font-bold text-xl xl:ml-80">LOGO</span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 xl:mr-80">
          {sections.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-lg hover:text-rose-400 cursor-pointer"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-pink-100 p-4 z-50 rounded-bl-full shadow-lg md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl">LOGO</span>
              <button onClick={toggleMenu} aria-label="Close menu">
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>

            <motion.div
              className="flex flex-col items-center gap-6 text-lg mt-8"
              variants={menuVariants}
            >
              {sections.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                    handleScrollToSection(href);
                  }}
                  className="hover:text-rose-400 cursor-pointer text-xl"
                  variants={itemVariants}
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


