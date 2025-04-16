import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        <div className="text-2xl font-bold">PIYUSH SAINI</div>

        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-16 sm:top-0 left-0 w-full sm:w-auto bg-gray-800 sm:bg-transparent transition-transform transform sm:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } sm:translate-x-0`}
        >
          <ul className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 sm:py-0 py-4">
            <li className="hover:text-gray-400">
              <NavLink to="/" className='font-bold'>HOME</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/about" className='font-bold'>ABOUT</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/contact" className='font-bold'>CONTACT</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <a
                href="https://drive.google.com/file/d/1-1VJefqRL5hNpA1AHAmf0wjRXRUMR6jE/view?usp=sharing"
                target="blank"
                className="font-bold"
              >
                RESUME
              </a>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/skills" className='font-bold'>SKILLS</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/projects" className='font-bold'>Projects</NavLink>
            </li>
            <li className="hover:text-gray-400">
              <NavLink to="/experience" className='font-bold'>EXPERIENCE</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
