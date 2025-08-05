import React, { useState } from "react";
import photo1 from "../assets/img/Home-Img/pic2.jpg";
import laptop from "../assets/img/Home-Img/Laptop.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Button from "../components/Button";
import html from "../assets/img/Tools-Img/html.png";
import css from "../assets/img/Tools-Img/css.png";
import git from "../assets/img/Tools-Img/git.png";
import js from "../assets/img/Tools-Img/javascript.png";
import postman from "../assets/img/Tools-Img/postman.png";
import react from "../assets/img/Tools-Img/react.png";
import tailwind from "../assets/img/Tools-Img/tailwind.png";
import bootstrap from "../assets/img/Tools-Img/Bootstrap.png";
import figma from "../assets/img/Tools-Img/Figma.png";
import vercel from "../assets/img/Tools-Img/Vercel.png";
import cardgenerator from "../assets/img/Project-Img/logo.png";
import portfolio from "../assets/img/Project-Img/Portfolio.png";
import pla from "../assets/img/Project-Img/Pla.png";
import blog from "../assets/img/Project-Img/blog.jpg";
import ecommerce from "../assets/img/Project-Img/Ecommerce.png";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

const tools = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "React", image: react },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Postman", image: postman },
  { name: "Git", image: git },
  { name: "Bootstrap", image: bootstrap },
  { name: "Figma", image: figma },
  { name: "Vercel", image: vercel },
];

const project = [
  {
    image: portfolio,
    name: "Personal Portfolio",
    description: "Built with React.js and Tailwind CSS",
    link: "https://react-portfolio-mtdwun10x-dichhikas-projects.vercel.app/",
  },
  {
    image: cardgenerator,
    name: "Card Generator",
    description: "Built with HTML, CSS and JavaScript",
    link: "https://dichhika.github.io/Card-Generator/",
  },
  {
    image: pla,
    name: "Business Website",
    description: "Built with HTML, CSS and JavaScript",
    link: "https://dichhika.github.io/Pla-Js/",
  },
  {
    image: blog,
    name: "Blog Management System",
    description: "Built with React  and Tailwind Css",
    link: "https://react-redux-blog-ms.vercel.app/",
  },
  {
    image: ecommerce,
    name: "Ecommerce Website",
    description: "Built with  Tailwind Css and Javascript ",
    link: "https://dichhika.github.io/Tailwind-Ecommerce",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-base sm:text-lg"
          >
            I'm Dichhika Baral — a frontend developer passionate about crafting
            clean, modern, and responsive user interfaces. I specialize in
            translating designs into pixel-perfect layouts using HTML, CSS,
            JavaScript, React, and Tailwind CSS. I enjoy building interactive
            web applications that are fast, accessible, and easy to use. My
            focus is on writing clean, maintainable code and continuously
            learning new tools and best practices to enhance user experience.
          </motion.p>
        );
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-base sm:text-lg space-y-2"
          >
            <p>
              <strong>Bachelor of Information Management</strong>
            </p>
            <p>Nihareeka College , Biratnagar, Nepal</p>
            <p>(2020 - 2025)</p>
          </motion.div>
        );
      case "experience":
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-base sm:text-lg space-y-2"
          >
            <p>
              <strong>Frontend Development Intern</strong>
            </p>
            <p>Velocis Core Company, Biratnagar, Nepal</p>
            <p>Duration: December 23, 2024 - June 1, 2025</p>
          </motion.div>
        );
      default:
        return null;
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Thank you for contacting me!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-r from-green-200 via-white to-green-300 flex flex-col-reverse md:flex-row items-center justify-around p-6 md:p-12 lg:p-20"
      >
        {/* Decorative Balls with Soft Animation and Color Changes */}
        <div className="absolute top-5 left-5 size-12 rounded-full bg-green-400 opacity-40 blur-md "></div>
        <div className="absolute top-20 right-10 size-16 rounded-full bg-green-300 opacity-30 blur-lg "></div>
        <div className="absolute bottom-10 left-1/4 size-20 rounded-full bg-green-500 opacity-40 blur-lg "></div>
        <div className="absolute bottom-4 right-10 size-14 rounded-full bg-green-600 opacity-40 blur-md "></div>

        {/* Text content */}
        <div className="p-4 text-center md:text-left z-10">
          <h1 className="text-green-600 text-3xl sm:text-3xl md:text-4xl">
            I'm Dichhika Baral
          </h1>
          <div className="text-green-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
            <Typewriter
              options={{
                strings: ["Frontend Developer"],
                autoStart: true,
                loop: true,
                delay: 180,
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start gap-6 my-4"
          >
            {/* Facebook */}
            <a
              href="https://www.facebook.com/dichhika.baral"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md 
                    text-green-700 hover:bg-[#1877F2] hover:text-white cursor-pointer transition duration-300"
              >
                <FaFacebook className="text-xl" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dichhika-baral2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md 
        text-green-700 hover:bg-[#0077B5] hover:text-white cursor-pointer transition duration-300"
              >
                <FaLinkedin className="text-xl" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dichhika?igsh=NmYxNjI0NWhucHV4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md 
    text-green-700 hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-yellow-200
 hover:text-white transition duration-300 cursor-pointer"
              >
                <FaInstagram className="text-xl" />
              </div>
            </a>
          </motion.div>

          <Button
            btnStyle="px-5 py-2 border border-green-600 rounded-full text-lg text-white bg-green-500 mt-2 
  hover:bg-green-600 hover:shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
          >
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              Download CV
            </a>
          </Button>
        </div>

        {/* Hero image with Animation */}
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-5 rounded-full w-60 sm:w-72 cursor-pointer md:w-80 lg:w-[500px] z-10 shadow-xl hover:scale-105 transition-transform duration-300"
          src={photo1}
          alt="Dichhika Baral"
        />
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="about"
        className="py-10 px-4 bg-gray-100"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
          <div>
            <img
              className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto p-3 object-cover"
              src={laptop}
              alt="Dichhika Baral"
            />
          </div>
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-center text-green-500 font-bold text-2xl sm:text-3xl p-4">
              ABOUT ME
            </h2>
            <div className="flex justify-center gap-4 mb-4 ">
              {["about", "education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeTab === tab
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div>{renderContent()}</div>
            <div className="text-center pt-4">
              <Link
                to="contact"
                smooth={true}
                duration={700}
                offset={-80}
                className="cursor-none"
              >
                <Button btnStyle="bg-green-500 cursor-pointer text-white px-6 py-2 rounded shadow hover:scale-105 transition-transform duration-300">
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        className="relative flex flex-col items-center text-black justify-center px-4 pb-0 bg-gray-100"
        id="skills"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-center font-bold text-5xl mb-4 z-10">My Toolbox</h2>
        <p className="text-center mb-10 text-2xl z-10">
          Technologies and tools I work with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9 z-10">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "tween",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              className="flex flex-col items-center bg-white justify-center px-12 py-8 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="object-contain w-16 h-16 mb-3"
              />
              <h3 className="text-lg font-semibold">{tool.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <hr />

      {/* Project Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center px-4 py-16 bg-gradient-to-r from-green-200 to-green-300 mt-5"
        id="project-banner"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            Have a Project Idea?
          </h2>
          <p className="text-base text-gray-700 mb-5">
            Let's work together to create something amazing.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            className="cursor-pointer"
          >
            <Button btnStyle="bg-green-500 text-white px-6 py-2 rounded shadow hover:scale-105 transition-transform duration-300">
              Contact Me
            </Button>
          </Link>
        </div>
      </motion.section>

      <hr />
      {/* Projects Showcase */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gray-100 px-6 py-16"
        id="projects"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            A selection of work showcasing my frontend development skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover group-hover:opacity-90 transition duration-300"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-green-600">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2 mb-4">
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      {/* banner */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Contact</h1>
        <p className="text-gray-700 mb-1 text-2xl">
          Let's connect and work together
        </p>
      </div>

      {/* form */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="contact"
        className="flex items-center justify-center px-4 py-10 bg-grey-200" // min-h-screen REMOVED
      >
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <div className="bg-gradient-to-r from-green-200  to-green-300 p-6 rounded-xl shadow-xl text-black">
            <h1 className="text-3xl font-bold mb-6 text-green-700">
              Send Me a Message
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white placeholder-gray-700"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white placeholder-gray-700"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white placeholder-gray-700"
                required
              ></textarea>
              <div className="text-right text-sm text-black">
                {formData.message.length}/1000
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 rounded text-white font-semibold"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Right: Info & Links */}
          <div className="grid md:grid-cols-1 gap-6 text-black">
            {/* Contact Info */}
            <div className="rounded-xl p-6 bg-gradient-to-r from-green-200  to-green-300 shadow-md">
              <h2 className="text-2xl font-bold text-green-700 mb-6">
                Contact Information
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-green-700 text-lg" />
                <span className="font-medium">dichhika123@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-700 text-lg" />
                <span className="font-medium">Biratnagar, Nepal</span>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="rounded-xl p-6 bg-gradient-to-r from-green-200  to-green-300 shadow-md">
              <h2 className="text-2xl font-bold text-green-700 mb-6">
                Connect With Me
              </h2>
              <div className="flex gap-6 justify-start">
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.linkedin.com/in/dichhika-baral2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f172a] p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </a>

                  <p className="text-sm mt-2 font-medium text-[#0f172a]">
                    LinkedIn
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href="https://github.com/dichhika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0f172a] p-3 rounded-full hover:bg-gray-600 transition"
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <p className="text-sm mt-2 font-medium text-[#0f172a]">
                    GitHub
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href=""
                    className="bg-[#0f172a] p-3 rounded-full hover:bg-green-500 transition"
                  >
                    <FaWhatsapp className="text-white text-xl" />
                  </a>
                  <p className="text-sm mt-2 font-medium text-[#0f172a]">
                    WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
