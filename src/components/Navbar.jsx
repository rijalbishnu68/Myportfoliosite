import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Solid icons for burger menu
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/closed
  };

  return (
    <nav className="flex items-center justify-between bg-gray-50 p-4">
      {/* Logo Section */}
      <a className="flex items-center">
        <img 
          className="w-20 h-20 object-cover rounded-full" 
          src="src/assets/Bishnu RIjallogo.png" 
          alt="Bishnu Rijal Logo" 
        />
      </a>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Navbar Links */}
      <ul className={`flex-col  mx-6 my-10 md:flex-row md:flex md:space-x-4 absolute md:relative bg-gray-50 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-16 left-0 w-full md:w-auto' : 'top-[-200px] md:top-0 md:flex'} md:items-center`}>
        <li>
          <a href="#hero" className="text-black p-2 cursor-pointer hover:text-xl">Home</a>
        </li>
        <li>
          <a href="#about" className="text-black p-2 cursor-pointer hover:text-xl">About</a>
        </li>
        <li>
          <a href="#projects" className="text-black p-2  cursor-pointer hover:text-xl">Projects</a>
        </li>
        <li>
          <a href="#skills" className="text-black p-2 cursor-pointer hover:text-xl">Skills</a>
        </li>
        <li>
          <a href="#contact" className="text-black p-2 cursor-pointer hover:text-xl">Contact</a>
        </li>
      </ul>

      {/* Show Social Media Icons only in the burger menu on small screens */}
      <div className={`flex-col md:flex md:space-x-5 absolute md:relative transition-all duration-300 ease-in-out ${isOpen ? 'top-20 left-0 w-full md:w-auto flex' : 'hidden md:flex'} md:top-0`}>
        <div className="flex justify-end items-end space-y-2 md:hidden">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black p-2 cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 hover:text-gray-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black p-2 cursor-pointer">
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 hover:text-gray-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black p-2 cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6 hover:text-gray-200" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black p-2 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 hover:text-gray-200" />
          </a>
        </div>
      </div>

      {/* Show Social Media Icons on larger screens only */}
      <div className="hidden md:flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-black hover:text-gray-200" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-black hover:text-gray-200" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-black hover:text-gray-200" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-black hover:text-gray-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
