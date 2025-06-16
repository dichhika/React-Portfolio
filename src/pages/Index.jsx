import React from 'react';
import photo1 from '../assets/img/Home-Img/pic2.jpg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
const skills = [
  { name: 'HTML', percent: 85, color: 'bg-green-500' },
  { name: 'CSS', percent: 70, color: 'bg-blue-500' },
  { name: 'JavaScript', percent: 65, color: 'bg-yellow-500' },
  { name: 'Tailwind CSS', percent: 50, color: 'bg-cyan-500' },
  { name: 'ReactJS', percent: 60, color: 'bg-indigo-500' },
];
const Index= () => {
  return (
    
    <>
      <div className='bg-green-500 flex justify-around p-25'>
        <div className='p-4'>
          <h1 className=" text-white  text-7xl leading-[2.5]"> I'm Dichhika Baral </h1>
          <h2 className='text-white  text-4xl '> Frontend Developer</h2>
          <Link to=""><i className="fa-brands fa-facebook text-2xl" /></Link>
          <Link to=""><i className="fa-brands fa-linkedin p-6 text-2xl" /></Link>
          <Link to=""><i className="fa-brands fa-instagram text-2xl " /></Link>

          <Button btnStyle="p-3 border text-xl "><Link to="">Download CV</Link></Button>
        </div>
        
        <img className="p-5 rounded-full" src={photo1} alt="img" height="280px" width="500px" />
      </div>

   {/* About Me Section */}
   <div>

        <div className="min-h bg-gray-100 flex items-center justify-center">
          <div>
          <img className=" w-120 h-auto p-3 object-cover" src={photo1} alt="Dichhika Baral" />

          </div>
          <div className="max-w-2xl bg-white shawdow-10 rounded-2xl p-8 space-y-4">
        <h2 className="text-center text-green-500 font-bold text-3xl p-4">ABOUT ME</h2>

            <p className="text-gray-600 text-lg">
              Hey, I'm Dichhika Baral — a passionate frontend developer who loves crafting clean and modern user experiences.
              I specialize in building responsive interfaces with Html,CSS ,Javascript ,React and Tailwind CSS.
            </p>
           

            {/* Contact Details */}
            
            <ul className="space-y-3 text-gray-700 ">
            <li className="flex items-center gap-3">
                <i className="fa-solid fa-user text-purple-500"></i>
                <span>Dichhika Baral</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-birthday-cake text-purple-500"></i>
                <span>26 August 2002</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-purple-500"></i>
                <span>9816368996</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-purple-500"></i>
                <span>dichhika123@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-purple-500"></i>
                <span>Biratnagar-4, Kharji</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-graduation-cap text-purple-500"></i>
                <span>Bachelor of Information Management</span>
              </li>
            </ul>
          <Button btnStyle="p-2 border text-xl bg-purple-500"><Link to="">Hire Me</Link></Button>


          </div>
          
          
        </div>
      </div>
      {/*  Skills parts*/}
      <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-8">My Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-5">
          <div className="flex justify-between mb-1">
            <span className="text-xl font-medium text-gray-700">{skill.name}</span>
            <span className="text-xl font-medium text-gray-700">{skill.percent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`${skill.color} h-4 rounded-full`}
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    {/* contact */}
 <div className="flex items-center justify-center bg-white px-4 py-10 text-black">
      <div className="bg-gray-100 p-6 rounded shadow">
        <h1 className="text-center text-3xl font-bold text-green-600 mb-6">CONTACT ME</h1>
        <form className="space-y-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded" required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded" required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border rounded w-full" required
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-3 border rounded w-full" required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 "
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

export default Index;
