// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition">
      <img src={project.image} alt={project.title} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <p className="text-sm text-gray-500">Technologies: {project.technologies.join(', ')}</p>
        <div className="mt-4">
          <a href={project.demoLink} className="text-blue-500 hover:underline">View Live</a>
          <span className="mx-2">|</span>
          <a href={project.repoLink} className="text-blue-500 hover:underline">View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
