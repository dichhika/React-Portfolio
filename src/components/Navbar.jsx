import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-around items-center sticky top-0">
      <div className="text-3xl font-bold">
        <span className="text-green-500">Port</span>
        <span className="text-white">folio</span>
      </div>
      <ul className="flex gap-5">
        <li>
          <Link
            to="/"
            className="px-3 py-1 rounded text-xl font-bold hover:bg-green-500 "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="px-3 py-1 rounded text-xl font-bold hover:bg-green-500 "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="px-3 py-1 rounded text-xl font-bold hover:bg-green-500 "
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="px-3 py-1 rounded text-xl font-bold hover:bg-green-500 "
          >
            Contact
          </Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar