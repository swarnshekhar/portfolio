import React, { useState } from 'react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: "React", level: "Intermediate", description: "Building dynamic user interfaces." },
    { name: "HTML", level: "Experienced", description: "Creating structured web content." },
    { name: "CSS", level: "Basic", description: "Styling web pages with flexibility." },
    { name: "JavaScript", level: "Intermediate", description: "Adding interactivity to web applications." },
    { name: "MongoDB", level: "Intermediate", description: "NoSQL database management." },
    { name: "Express", level: "Basic", description: "Building web applications and APIs." },
    { name: "Tailwind CSS", level: "Intermediate", description: "Utility-first CSS framework for styling." },
  ];

  const internships = [
    { title: "Web Development Intern", company: "Tech Solutions", duration: "June 2022 - August 2022", description: "Developed and maintained web applications using React and Node.js." },
    { title: "Software Engineering Intern", company: "Innovatech", duration: "January 2023 - April 2023", description: "Assisted in backend development and API integration." },
  ];

  const experiences = [
    { title: "Freelance Developer", duration: "January 2021 - Present", description: "Created various web applications for clients, focusing on user experience and responsiveness." },
    { title: "Volunteer Developer", duration: "March 2020 - December 2020", description: "Contributed to open-source projects, improving skills in collaboration and code quality." },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-200 transition"
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
            >
              <h4 className="text-xl font-semibold">{skill.name}</h4>
              <span className="text-sm text-gray-500">{skill.level}</span>
            </div>
            {activeSkill === index && (
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-700">{skill.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold mb-6">Internships</h3>
      <div className="space-y-4">
        {internships.map((internship, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow">
            <h4 className="text-xl font-semibold">{internship.title} at {internship.company}</h4>
            <span className="text-sm text-gray-500">{internship.duration}</span>
            <p className="text-gray-700 mt-2">{internship.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold mb-6">Experience</h3>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow">
            <h4 className="text-xl font-semibold">{experience.title}</h4>
            <span className="text-sm text-gray-500">{experience.duration}</span>
            <p className="text-gray-700 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
