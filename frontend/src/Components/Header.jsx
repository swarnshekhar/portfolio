import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import logodark from '../assets/logo-Photoroom.png';
import { useDarkMode } from '../contexts/DarkModeContext'; // Import the context

export default function Header() {
    const { isDarkMode, toggleDarkMode } = useDarkMode(); // Get the state and toggle function

    return (
        <header style={{ backgroundColor: isDarkMode ? '#111827' : '#FFFFFF', color: isDarkMode ? '#FFFFFF' : '#000000' }} className="shadow sticky z-50 top-0">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/portfolio/" className="flex items-center">
                        <img src={isDarkMode ? logodark : logo} className="mr-3 h-12" alt="Logo" />
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/portfolio/"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio/skills"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio/contact"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio/projects"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio/github"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-300"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <button 
                            onClick={toggleDarkMode} 
                            style={{ backgroundColor: isDarkMode ? '#F97316' : '#E5E7EB', color: isDarkMode ? '#FFFFFF' : '#000000' }}
                            className={`text-sm px-4 py-2 rounded-lg transition duration-300 hover:bg-orange-700`}
                        >
                            {isDarkMode ? 'Go Light' : 'Go Dark'}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
