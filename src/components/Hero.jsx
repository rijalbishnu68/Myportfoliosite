import React from 'react';

const Hero = () => {
  return (
    <section className="h bg-gradient-to-t from-black-400 to-slate-400 text-center p-6 flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <img className="w-32 md:w-40  rounded-full border border-gray-800 transition-transform hover:scale-105" src='src/assets/portpic.jpg' alt="Bishnu Rijal" />
      </div>
      <h1 className="text-center mx-5 pt-6 text-xl sm:text-2xl md:text-3xl">
        Transforming Ideas
        <span className='text-purple-400'> Into Innovative Solutions </span> Using
        <span className='text-purple-600/90'> Modern Technologies.</span>
      </h1>
      <h2 className="mt-4 mx-3 my-3 text-purple-800 text-lg md:text-xl">Software Engineer</h2>
      <p className='text-center font-roboto text-sm md:text-base mx-4'>
        Hi, I am Bishnu Rijal. Passionate Data Analyst and Software Engineer with hands-on experience in project-based work. 
        Skilled in transforming data into actionable insights and building dynamic web solutions.
      </p>
      <div className="flex sm:flex-row justify-center items-center mx-2 my-2 pb-3 space-x-5 flex-wrap">
        <a 
          href="#hire" 
          className="bg-gradient-to-r from-purple-600 to-cyan-300 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition"
        >
          Hire Me
        </a>
        <a 
          href="#previous-work" 
          className="bg-gradient-to-r from-purple-600 to-cyan-300 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition"
        >
          Previous Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
