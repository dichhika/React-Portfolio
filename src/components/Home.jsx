import React from "react";
import photo1 from "../assets/img/Home-Img/pic2.jpg";
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
import figma from "../assets/img/Tools-Img/Figma.png";
import bootstrap from "../assets/img/Tools-Img/Bootstrap.png";
import portgenerator from "../assets/img/Project-Img/logo.png";
import portfolio from "../assets/img/Project-Img/Portfolio.png";
import pla from "../assets/img/Project-Img/Pla.png";

import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
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
  { name: "Figma", image: figma },
  { name: "Bootstrap", image: bootstrap },
];

const project = [
  {
    image: portfolio,
    name: "Personal Portfolio",
    description: "Built with React.js and Tailwind CSS",
    tech1: "React.js",
    tech2: "Tailwind CSS",
  },
  {
    image: portgenerator,
    name: "Card Generator",
    description: "Built with HTML, CSS and JavaScripts",
    tech1: "HTML/CSS",
    tech2: "JavaScripts",
  },
  {
    image: pla,
    name: "Business Website",
    description: "Built with HTML, CSS and JavaScripts",
    tech1: "HTML/CSS",
    tech2: "JavaScripts",
  },
];
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-green-500 flex flex-col-reverse md:flex-row items-center justify-around p-6 md:p-12 lg:p-20"
      >
        <div className="p-4 text-center md:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug">
            I'm Dichhika Baral
          </h1>
          <div className="text-white text-2xl sm:text-3xl md:text-4xl">
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
            <Link to="">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link to="">
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link to="">
              <FaInstagram className="text-2xl" />
            </Link>
          </motion.div>
          <Button btnStyle="p-3 border text-xl ">
            <Link to="">Download CV</Link>
          </Button>
        </div>

        <img
          className="p-5 rounded-full w-60 sm:w-72 md:w-80 lg:w-[500px]"
          src={photo1}
          alt="img"
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
              src={photo1}
              alt="Dichhika Baral"
            />
          </div>
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-center text-green-500 font-bold text-2xl sm:text-3xl p-4">
              ABOUT ME
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Hey, I'm Dichhika Baral — a passionate frontend developer who
              loves crafting clean and modern user experiences. I specialize in
              building responsive interfaces with Html, CSS, JavaScript, React
              and Tailwind CSS.
            </p>

            <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
              <li className="flex items-center gap-3">
                <FaUser className="text-purple-500" />
                <span>Dichhika Baral</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-purple-500" />
                <span>9816368996</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500" />
                <span>dichhika123@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>Biratnagar-4, Kharji</span>
              </li>
              <li className="flex items-center gap-3">
                <FaGraduationCap className="text-purple-500" />
                <span>Bachelor of Information Management</span>
              </li>
            </ul>
            <div className="text-center">
              <Button btnStyle="p-2 border text-xl bg-purple-500">
                <Link to="">Hire Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center text-black  justify-center px-4"
        id="skills"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-center font-bold text-5xl mb-4">My Toolbox</h2>
        <p className="text-center  mb-10 text-2xl ">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9">
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
              className="flex flex-col items-center bg-white justify-center px-12 py-8 rounded-xl shadow-md 
               transform transition-transform duration-300 hover:scale-110"
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
      {/* projects */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex flex-col   text-black items-center justify-center px-4 py-15"
        id="projects"
      >
        <h2 className="font-bold text-5xl">My Projects</h2>
        <p className="text-sm py-5 md:text-2xl">
          Selected work showcasing my frontend development expertise
        </p>
        <div className="grid grid-cols-1 gap-3 bg-grey md:grid-cols-2 gap-12">
          {project.map((projects, index) => (
            <div
              className="relative shadow-md rounded-2xl overflow-hidden h-70 w-full group"
              key={index}
            >
              <img
                src={projects.image}
                alt={projects.name}
                className="h-60 w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-opacity-80 w-full">
                <h3 className="text-xl font-bold text-blue-600 md:text-2x">
                  {projects.name}
                </h3>
                <p className="text-green-700 text-sm md:text-lg">
                  {projects.description}
                </p>
                <div className="flex ">
                  <p className=" mr-3 py-1 px-3 rounded-full bg-gray-300">
                    {projects.tech1}
                  </p>
                  <p className=" mr-3 py-1 px-3 rounded-3xl bg-gray-300">
                    {projects.tech2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <hr />

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="contact"
        className="flex items-center justify-center bg-white px-4 py-10 text-black"
      >
        <div className="w-full max-w-xl bg-gray-100 p-6 rounded shadow">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-green-600 mb-6">
            CONTACT ME
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded w-full"
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="p-3 border rounded w-full"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
