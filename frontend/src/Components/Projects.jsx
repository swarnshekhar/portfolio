import React, { useEffect, useState } from 'react';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
// import portfolio from '../assets/portfolio.png';

const projectImages = {
  // 'portfolio': portfolio,
  'todo_context': todo,
  'weather-App': weather,
  // 'react-fiber-architecture': goku,
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

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
    <section id="projects" className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button onClick={toggleTheme} className={`relative inline-flex items-center h-10 rounded-full w-20 transition-colors ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
        <span className={`absolute h-8 w-8 rounded-full transition-transform ${isDarkMode ? 'transform translate-x-10 bg-orange-500' : 'bg-white'}`}></span>
        <span className={`text-sm font-semibold transition-transform duration-300 ${isDarkMode ? 'translate-x-[-30%] text-white' : 'translate-x-[30%] text-gray-800'}`}>
          {/* {isDarkMode ? 'Light' : 'Dark'} */}
        </span>
      </button>

      {/* <p className="section__text__p1 text-center">Browse My Recent</p> */}
      <h1 className="title text-center text-5xl font-bold mb-6">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {repos
          .filter(repo => projectImages[repo.name]) // Filter repos with associated images
          .slice(0, 3) // Limit to the first 3
          .map((repo, index) => {
            const imageUrl = projectImages[repo.name];
            return (
              <div
                key={index}
                className={`details-container color-container p-4 border-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} w-72 h-96 flex flex-col justify-between`}
              >
                <div className="article-container flex-grow">
                  <img src={imageUrl} alt={repo.name} className="project-img w-full h-40 object-cover mb-2 rounded" />
                </div>
                <h2 className="experience-sub-title project-title text-lg font-semibold text-center">{repo.name}</h2>
                <p className='text-center text-gray-700'>{repo.description || "It was good working on this project"}</p>
                <div className="btn-container flex justify-center gap-4 mt-2">
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
