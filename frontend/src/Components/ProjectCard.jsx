// import React, { useEffect, useState } from 'react';
// import weather from '../assets/weather.png';
// import todo from '../assets/todo.png';
// import portfolio from '../assets/portfolio.png';

// const projectImages = {
//   'todo_context': todo,
//   'weather-App': weather,
//   'portfolio': portfolio
// };

// export default function Projects() {
//   const [repos, setRepos] = useState([]);
//   const [followers, setFollowers] = useState(0);
//   const [avatarUrl, setAvatarUrl] = useState('');

//   useEffect(() => {
//     fetch('https://api.github.com/users/swarnshekhar')
//       .then(response => response.json())
//       .then(data => {
//         setFollowers(data.followers);
//         setAvatarUrl(data.avatar_url);
//       });

//     fetch('https://api.github.com/users/swarnshekhar/repos')
//       .then(response => response.json())
//       .then(data => {
//         const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
//         setRepos(sortedRepos);
//       });
//   }, []);

//   return (
//     <section id="projects" className="p-6 bg-white text-black">
//       <h1 className="title text-center text-5xl font-bold mb-6 font-Londrina">Projects</h1>
//       <div className="flex flex-wrap justify-center gap-6">
//         {repos
//           .filter(repo => projectImages[repo.name])
//           .slice(0, 3)
//           .map((repo, index) => {
//             const imageUrl = projectImages[repo.name];
//             return (
//               <div
//                 key={index}
//                 className={`details-container color-container p-4 border-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gray-900 border-orange-600 w-80 h-auto flex flex-col justify-between`}
//               >
//                 <div className="article-container flex-grow">
//                   <img src={imageUrl} alt={repo.name} className="project-img w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
//                 </div>
//                 <h2 className="experience-sub-title project-title text-xl font-semibold text-center mb-2">{repo.name}</h2>
//                 <p className="project-description text-gray-700 text-sm text-center mb-4">{repo.description || 'No description available.'}</p>
//                 <div className="flex justify-center">
//                   <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition hover:bg-orange-700">View Project</a>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//       <div className="flex justify-center mt-6">
//         <img src={avatarUrl} alt="Avatar" className="w-16 h-16 rounded-full" />
//         <span className="ml-2 text-lg">{followers} Followers</span>
//       </div>
//     </section>
//   );
// }
