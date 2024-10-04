import React from 'react';

const skills = [
  { name: 'HTML', level: 9 },
  { name: 'CSS', level: 8 },
  { name: 'JavaScript', level: 9 },
  { name: 'React', level: 8 },
  { name: 'Python', level: 8 },
  { name: 'Pandas', level: 8 },
  { name: 'Scikit-learn', level: 8 },
  { name: 'SQL', level: 8 },
  { name: 'Java', level: 8 },
  { name: 'Spring Boot', level: 7 },
  { name: 'AWS', level: 7 },
  { name: 'Docker', level: 7 },
  { name: 'Kubernetes', level: 7 },
];

const Skills = () => {
  return (
    <section id="skills" className="p-10">
      <h2 className="text-2xl text-center font-bold">Skills</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="w-32">{skill.name}</span>
            <div className="relative w-full h-4 bg-gray-200 rounded">
              <div
                className="absolute top-0 left-0 h-4 bg-gradient-to-r from-purple-600 to-cyan-300 rounded"
                style={{ width: `${skill.level * 10}%` }}
              ></div>
            </div>
            <span className="ml-2 text-gray-700">{skill.level}/10</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
