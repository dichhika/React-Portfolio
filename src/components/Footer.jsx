import React, { useEffect, useState } from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show button only when scroll is down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-green-400 text-white py-10 px-6 relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto text-xl flex flex-col md:flex-row justify-between gap-20">
        {/* Left Section */}
        <div className="space-y-4 max-w-xl md:flex-1">
          <h1 className="text-2xl font-bold text-white">DICHHIKA BARAL</h1>
          <div className="h-1 w-28 bg-white rounded"></div>
          <p className="text-white">
            Frontend Web Developer focused on crafting responsive, scalable, and
            smooth web interfaces using HTML, CSS, JavaScript, React, and
            Tailwind CSS.
          </p>
          <p className="flex items-center gap-2 text-white">
            <span className="h-2 w-2 rounded-full bg-blue-700 animate-pulse"></span>
            Available for new opportunities
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4 md:flex-1">
          <h2 className="text-xl font-semibold text-white">CONNECT</h2>
          <div className="flex gap-5 text-2xl">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-blue-500 hover:text-white shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-black hover:text-white shadow-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-green-500 hover:text-white shadow-lg transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-green-600 pt-4 flex flex-col md:flex-row justify-between items-center text-xl text-white gap-4">
        <p>&copy; {year} Made with ❤️ by Dichhika Baral</p>
        <p>Built with React & Tailwind CSS</p>
      </div>

      {/* Scroll to Top Button (only shows when scrolled down) */}
      {showScrollButton && (
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="fixed bottom-4 right-4 z-50 bg-white hover:bg-green-500 text-black p-3 rounded-full cursor-pointer transition-transform duration-500 hover:rotate-180"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </Link>
      )}
    </footer>
  );
};

export default Footer;
