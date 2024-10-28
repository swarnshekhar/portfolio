import React, { useEffect, useState } from 'react';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import portfolio from '../assets/portfolio.png';
import { useDarkMode } from '../contexts/DarkModeContext';

const projectImages = {
  'todo_context': todo,
  'weather-App': weather,
  'portfolio': portfolio
};

export default function Projects() {
  const { isDarkMode } = useDarkMode(); // Access dark mode state from context
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    fetch('https://api.github.com/users/swarnshekhar/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
      })
      .catch(() => {
        setError('Failed to load projects. Please check your internet connection.'); // Set error message
      });
  }, []);

  return (
    <section id="projects" className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="title text-center text-5xl font-bold font-Londrina my-20 mb-10">Projects</h1>
      
      {error && <p className="text-center text-red-500">{error}</p>} {/* Display error message */}

      <div className="flex flex-wrap justify-center gap-6">
        {repos
          .filter(repo => projectImages[repo.name])
          .slice(0, 3)
          .map((repo, index) => {
            const imageUrl = projectImages[repo.name];
            return (
              <div
                key={index}
                className={`details-container color-container p-4 border-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-900 border-orange-600' : 'bg-white border-orange-500'} w-80 h-auto flex flex-col items-center`}
              >
                <img src={imageUrl} alt={repo.name} className="w-full h-40 object-cover mb-2 rounded-lg" />
                <h2 className="project-title text-xl font-semibold mb-2">{repo.name}</h2>
                <p className={`project-description text-sm text-center mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {repo.description || 'No description available.'}
                </p>
                <div className="flex justify-center">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition hover:bg-orange-700">
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
