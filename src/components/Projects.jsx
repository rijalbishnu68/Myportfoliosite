import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      name: "WeatherAppJavaScript",
      url: "https://github.com/rijalbishnu68/WeatherAppJavaScript",
      description: "A simple weather app built with JavaScript that fetches real-time weather data using an API.",
    },
    {
      name: "TitanicDataset",
      url: "https://github.com/rijalbishnu68/TitanicDataset",
      description: "An analysis of the Titanic dataset using Python to predict survival rates with machine learning techniques.",
    },
    {
      name: "IrisFlowerViz",
      url: "https://github.com/rijalbishnu68/IrisFlowerViz",
      description: "Visualization of the Iris flower dataset using various plotting libraries to understand species classification.",
    },
    {
      name: "TSLA_analysis",
      url: "https://github.com/rijalbishnu68/TSLA_analysis",
      description: "Analysis of Tesla stock performance using data analysis techniques in Python.",
    },
    {
      name: "StudentRecordKeeper",
      url: "https://github.com/rijalbishnu68/StudentRecordKeeper",
      description: "A simple app for managing student records, with options to add, view, and delete entries.",
    },
    {
      name: "bookburrowform",
      url: "https://github.com/rijalbishnu68/bookburrowform",
      description: "A form created for book borrowing, storing entries in a database using basic form validation.",
    },
    {
      name: "The-Best-of-Ada",
      url: "https://github.com/prafulprd/The-Best-of-Ada",
      description: "A collection of Ada programming projects showcasing advanced algorithms.",
    },
  ];

  return (
    <section id="projects" className="p-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
