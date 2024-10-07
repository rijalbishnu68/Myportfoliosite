import React, { useState } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Solid icons for burger menu
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import bishnuLogo from '/Users/bishnurijal/my-app/src/assets/bishnuLogo.png';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/closed
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className="flex items-center justify-between bg-gray-400 p-4">
      {/* Logo Section */}
      <a href='/' className="flex items-center">
        <img
          className="w-20 h-20 rounded-full"
          src={bishnuLogo}
          alt="Bishnu Rijal"
        />
      </a> 

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`space-y-5  fixed inset-0 bg-purple-500 bg-opacity-95 z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:flex-row  md:space-x-3 md:space-y-1 md:bg-transparent md:translate-x-0`}
      >
        <li>
          <a href="#hero" className="text-white p-4 text-xl md:text-black hover:text-purple-600 transition-colors duration-300" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white p-4 text-xl md:text-black hover:text-purple-800 transition-colors duration-300" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white p-4 text-xl md:text-black hover:text-purple-800 transition-colors duration-300" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="text-white p-4 text-xl md:text-black hover:text-purple-800 transition-colors duration-300" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white p-4 text-xl md:text-black hover:text-purple-800 transition-colors duration-300" onClick={closeMenu}>
            Contact
          </a>
        </li>

        {/* Show Social Media Icons in the burger menu */}
        <div className="flex space-x-10 pt-10 hover:text-gray-500: md:hidden">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-800">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-800">
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-800">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-800">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>
      </ul>

      {/* Social Icons for large screens */}
      <div className="hidden md:flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-black hover:text-purple-600" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-black hover:text-purple-600" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black hover:text-purple-600" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-black hover:text-purple-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
