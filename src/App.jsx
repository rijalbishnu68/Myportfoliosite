import React from 'react';
import { useState,useEffect } from 'react';
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
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
