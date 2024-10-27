import React, { useEffect, useState } from 'react';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import portfolio from '../assets/portfolio.png';

const projectImages = {
  'todo_context': todo,
  'weather-App': weather,
  'portfolio':portfolio
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/swarnshekhar')
      .then(response => response.json())
      .then(data => {
        setFollowers(data.followers);
        setAvatarUrl(data.avatar_url);
      });

    fetch('https://api.github.com/users/swarnshekhar/repos')
      .then(response => response.json())
      .then(data => {
        const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
      });
  }, []);

  return (
    <section id="projects" className="p-6 bg-white text-black">
      <h1 className="title text-center text-5xl font-bold mb-6">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {repos
          .filter(repo => projectImages[repo.name])
          .slice(0, 3)
          .map((repo, index) => {
            const imageUrl = projectImages[repo.name];
            return (
              <div
                key={index}
                className={`details-container color-container p-4 border-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gray-100 border-gray-300 w-80 h-auto flex flex-col justify-between`}
              >
                <div className="article-container flex-grow">
                  <img src={imageUrl} alt={repo.name} className="project-img w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
                </div>
                <h2 className="experience-sub-title project-title text-xl font-semibold text-center mb-2">{repo.name}</h2>
                <p className='text-center text-gray-700 mb-4'>{repo.description || "It was good working on this project"}</p>
                <div className="btn-container flex justify-center gap-4 mb-2">
                  <button
                    className="btn btn-color-2 project-btn bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors"
                    onClick={() => window.open(repo.html_url, '_blank')}
                  >
                    GitHub
                  </button>
                  <button
                    className="btn btn-color-2 project-btn bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors"
                    onClick={() => window.open(repo.homepage || '#', '_blank')}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
