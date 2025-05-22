import  { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleMenu = () => {
    if (menu) {
      setAnimateOut(true);
      setTimeout(() => {
        setMenu(false);
        setAnimateOut(false);
      }, 400); // should match the duration of your slide-diagonal-out
    } else {
      setMenu(true);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center p-3 bg-gray-100">
        <span className="font-bold text-xl xl:ml-80">LOGO</span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 xl:mr-80">
          <a className="text-lg hover:text-rose-400 cursor-pointer">Home</a>
          <a className="text-lg hover:text-rose-400 cursor-pointer">About</a>
          <a className="text-lg hover:text-rose-400 cursor-pointer">Skills</a>
          <a className="text-lg hover:text-rose-400 cursor-pointer">Projects</a>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={handleMenu}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div
          className={`fixed inset-0 bg-pink-100 p-4 z-50 rounded-bl-full shadow-lg md:hidden
          ${animateOut ? "animate-slide-diagonal-out" : "animate-slide-diagonal-in"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-xl">LOGO</span>
            <button onClick={handleMenu}>
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 text-lg mt-8">
            <a onClick={handleMenu} className="hover:text-rose-400 cursor-pointer text-xl">Home</a>
            <a onClick={handleMenu} className="hover:text-rose-400 cursor-pointer text-xl">About</a>
            <a onClick={handleMenu} className="hover:text-rose-400 cursor-pointer text-xl">Skills</a>
            <a onClick={handleMenu} className="hover:text-rose-400 cursor-pointer text-xl">Projects</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


