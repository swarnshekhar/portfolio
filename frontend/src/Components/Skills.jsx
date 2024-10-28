import React, { useState } from 'react';
import resume from '../assets/resume.jpg';
import { FaDownload } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: "React", level: "Intermediate", description: "Building dynamic user interfaces." },
    { name: "HTML", level: "Experienced", description: "Creating structured web content." },
    { name: "CSS", level: "Basic", description: "Styling web pages with flexibility." },
    { name: "JavaScript", level: "Intermediate", description: "Adding interactivity to web applications." },
    { name: "MongoDB", level: "Intermediate", description: "NoSQL database management." },
    { name: "Express", level: "Basic", description: "Building web applications and APIs." },
    { name: "Tailwind CSS", level: "Intermediate", description: "Utility-first CSS framework for styling." },
    { name: "Machine Learning", level: "Basic", description: "Data analysis and predictive modeling using libraries like NumPy and Pandas." },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'Your_Resume.jpg');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`max-w-6xl mx-auto text-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-5xl font-bold mb-6 font-londrina mt-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10 justify-items-center">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`border-2 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-80 mb-4 ${isDarkMode ? 'bg-gray-700 border-gray-500' : 'bg-white border-orange-600'}`}
            onClick={() => setActiveSkill(activeSkill === index ? null : index)}
          >
            <div className="flex justify-between items-center p-4 cursor-pointer">
              <h4 className="text-xl font-semibold">{skill.name}</h4>
              <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>{skill.level}</span>
            </div>
            {activeSkill === index && (
              <div className={`p-4 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button 
          onClick={downloadResume} 
          className={`bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition first-letter: flex items-center mb-20`}
        >
          <FaDownload className="mr-2" />
          ReZume
        </button>
      </div>
    </div>
  );
};

export default Skills;
