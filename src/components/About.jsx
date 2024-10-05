import React, { useEffect, useState } from 'react';
import portpic from "/Users/bishnurijal/my-app/src/assets/portpic.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    const aboutSection = document.querySelector('#about');
    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="p-10 bg-gray-50">
      <h2 className={`text-2xl text-center font-bold transform transition-transform duration-1000 ${isVisible ? 'translate-y-0' : '-translate-y-20'}`}>
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Card with Image */}
        <div className={`bg-white shadow-md rounded-lg p-6 transform transition-transform duration-1000 ${isVisible ? 'translate-y-0' : '-translate-y-20'}`}>
          <img 
            src={portpic}
            alt="Your Image" 
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-center text-lg font-semibold">Bishnu Rijal</p>
          <p className="text-center text-sm text-gray-600 mt-2">
            Passionate about transforming data into actionable insights and building web applications using modern technologies.
          </p>
        </div>

        {/* Skill Cards */}
        <div className={`grid grid-cols-2 gap-4 transform transition-transform duration-1000 ${isVisible ? 'translate-y-0' : '-translate-y-20'}`}>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg">Data Analysis</h3>
            <p className="text-sm text-gray-600">Expert in analyzing datasets and extracting insights to guide decision-making.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg">Software Development</h3>
            <p className="text-sm text-gray-600">Experience in building scalable applications using modern frameworks and tools.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg">Database Management</h3>
            <p className="text-sm text-gray-600">Proficient in SQL and managing relational databases for web applications.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="font-bold text-lg">Web Development</h3>
            <p className="text-sm text-gray-600">Skilled in HTML, CSS, React, and building responsive, dynamic web pages.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
