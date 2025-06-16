import React from 'react'
import photo1 from '../assets/img/Home-Img/pic2.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>About
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
  )
}

export default About