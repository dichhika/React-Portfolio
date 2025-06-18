import React from "react";
import photo1 from "../assets/img/Home-Img/pic2.jpg";
import { Link } from "react-scroll";
import Button from "../components/Button";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

const skills = [
  { name: "HTML", percent: 85, color: "bg-green-500" },
  { name: "CSS", percent: 70, color: "bg-blue-500" },
  { name: "JavaScript", percent: 65, color: "bg-yellow-500" },
  { name: "Tailwind CSS", percent: 50, color: "bg-cyan-500" },
  { name: "ReactJS", percent: 60, color: "bg-indigo-500" },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
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
          <div className="flex justify-center md:justify-start gap-6 my-4">
            <Link to="">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link to="">
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link to="">
              <FaInstagram className="text-2xl" />
            </Link>
          </div>
          <Button btnStyle="p-3 border text-xl ">
            <Link to="">Download CV</Link>
          </Button>
        </div>

        <img
          className="p-5 rounded-full w-60 sm:w-72 md:w-80 lg:w-[500px]"
          src={photo1}
          alt="img"
        />
      </div>

      {/* About Me Section */}
      <div id="about" className="py-10 px-4 bg-gray-100">
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
                <FaBirthdayCake className="text-purple-500" />
                <span>26 August 2002</span>
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
      </div>

      {/* Skills Section */}
      <div id="skills" className="max-w-4xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-500 mb-8">
          My Skills
        </h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between mb-1 text-sm sm:text-lg">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="font-medium text-gray-700">
                {skill.percent}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
              <div
                className={`${skill.color} h-3 sm:h-4 rounded-full`}
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div
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
      </div>
    </>
  );
};

export default Home;
