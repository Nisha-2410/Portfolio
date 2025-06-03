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
      <nav className="flex justify-between items-center p-4 bg-transparent sticky top-0 z-50 font-medium">
        <span className="text-3xl xl:ml-80 font-bold text-purple-800 tracking-wide">LOGO</span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 xl:mr-80">
          {sections.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-2xl text-purple-800 hover:text-purple-600 transition duration-200 cursor-pointer group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_1px_rgba(128,90,213,0.5)]" />
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="fa-solid fa-bars text-3xl text-purple-800"></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-purple-100/90 p-4 z-50 rounded-bl-full shadow-2xl md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-2xl text-purple-800">LOGO</span>
              <button onClick={toggleMenu} aria-label="Close menu">
                <i className="fa-solid fa-xmark text-3xl text-purple-800"></i>
              </button>
            </div>

            <motion.div
              className="flex flex-col items-center gap-8 mt-12"
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
                  className="text-2xl text-purple-800 hover:text-purple-600 transition duration-200 relative group"
                  variants={itemVariants}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_1px_rgba(128,90,213,0.5)]" />
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



