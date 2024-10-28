import React from 'react';
import gokuImg from '../assets/goku.jpg';
import gokudark from '../assets/goku-Photoroom.png';
import Projects from './Projects';
import Contact from './ContactUs';
import Skills from './Skills';
import bye from '../assets/tata_bye.png';
import byedark from '../assets/tata_bye-Photoroom.png';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ backgroundColor: isDarkMode ? '#111827' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#000000' }} className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl sm:text-5xl font-bold mb-2 font-Raleway">
          Welcome to My Portfolio
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="sm:w-1/2 mt-10 sm:mt-0">
            <img className="w-96 mx-auto" src={isDarkMode ? gokudark : gokuImg} alt="Goku" />
          </div>
          <div className="sm:w-1/2 sm:pr-8 text-center sm:text-left">
            <p className="text-lg mb-8 font-bold text-justify font-Raleway">
              Hi! I'm Swarn Shekhar, a passionate developer with a knack for creating beautiful and functional applications. As a web developer, I have experience working on both the frontend and backend, allowing me to build complete, seamless web experiences.
              On the backend, I work with frameworks like Node.js and Express, building robust APIs and managing databases with technologies like MongoDB and SQL. My backend skills allow me to handle server-side logic, user authentication, and data management, ensuring that everything runs smoothly behind the scenes.
            </p>
            <a
              href="#projects"
              style={{ backgroundColor: '#F97316', color: '#FFFFFF' }}
              className="py-2 px-4 rounded-lg hover:bg-orange-700 transition ml-10 font-semibold mt-4"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="my-0" id="skills">
        <Skills />
      </div>

      {/* Projects Section */}
      <div style={{ backgroundColor: isDarkMode ? '#374151' : '#F3F4F6' }} className="py-10" id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div style={{ backgroundColor: isDarkMode ? '#374151' : '#FFFFFF' }} className="py-10" id="contact">
        <Contact />
      </div>

      {/* Additional Image */}
      <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-55 w-48" src={isDarkMode ? byedark : bye} alt="Remote work illustration" />
      </div>

      {/* Footer Section */}
      <footer style={{ backgroundColor: isDarkMode ? '#111827' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#000000' }} className="text-center py-2">
        <h2 className="text-2xl font-medium">Don't Forget Me</h2>
        <p className="mt-2 text-gray-600">Feel free to reach me!</p>
      </footer>
    </div>
  );
}
