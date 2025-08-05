import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="relative bg-gradient-to-r from-green-200 via-white to-green-300 text-black font-semibold px-6 py-5 flex justify-between items-center sticky top-0 z-50 md:justify-around shadow-md">
      {/* Balls Background */}
      <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-green-400 opacity-50 blur-sm z-0"></div>
      <div className="absolute top-1/2 left-16 w-16 h-16 rounded-full bg-green-500 opacity-40 blur-md z-0"></div>
      <div className="absolute bottom-10 left-1/3 w-14 h-14 rounded-full bg-green-600 opacity-40 blur-md z-0"></div>
      <div className="absolute top-16 right-1/4 w-12 h-12 rounded-full bg-green-300 opacity-50 blur-sm z-0"></div>

      {/* Logo */}
      <div className="text-2xl  font-extrabold cursor-pointer select-none z-10">
        <span className="text-green-700">Dichhika</span>
        <span className="text-black"> Baral</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 z-10">
        {nav.map((item, index) => (
          <li key={index}>
            <Link
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-xl font-bold px-4 py-2 rounded cursor-pointer hover:text-green-700 transition duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-3xl text-black z-20"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gradient-to-r from-green-200 via-white to-green-300 text-black flex flex-col items-center gap-4 py-4 md:hidden z-30 shadow-md">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold px-4 py-2 rounded hover:text-green-700 transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
