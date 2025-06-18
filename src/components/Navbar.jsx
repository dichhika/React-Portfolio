import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav className="bg-black text-white font-600 px-6 py-4 flex justify-between items-center sticky top-0 z-50 md:justify-around ">
      {/* Logo */}
      <div className="text-3xl f cursor-pointer select-none">
        <span className="text-green-500">Port</span>
        <span className="text-white">folio</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5">
        {nav.map((navbar, index) => (
          <li key={index}>
            <Link
              activeClass="active"
              to={navbar.link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-3 py-1 rounded text-2xl cursor-pointer"
            >
              {navbar.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full cursor-pointer bg-black flex flex-col items-center gap-4 py-4 md:hidden z-40">
          {nav.map((navbar, index) => (
            <li key={index}>
              <Link
                activeClass="active"
                to={navbar.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-1 rounded text-xl f hover:bg-green-500 cursor-pointer block"
              >
                {navbar.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
