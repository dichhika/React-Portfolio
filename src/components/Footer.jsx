import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-green-500 text-center text-xl text-gray-700 py-6 mt-10">
      <div className="mb-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
      
          className="mx-2 text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
         
          className="mx-2 text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          className="mx-2 text-blue-600 hover:underline"
        >
          Twitter
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Dichhika Baral. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer