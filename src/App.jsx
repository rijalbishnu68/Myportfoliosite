import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact';

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<Hero />} /> {/* Redirect to Hero if route is not found */}
</Routes>

      </div>
  );
};

export default App;
