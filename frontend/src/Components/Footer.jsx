import React from 'react';
import logodark from '../assets/logo-Photoroom.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useDarkMode } from '../contexts/DarkModeContext'; // Import the context

export default function Footer() {
    const { isDarkMode } = useDarkMode(); // Get the darkMode value

    return (
        <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} border-t border-gray-200`}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img src={isDarkMode ? logodark : logo} className="mr-3 h-16" alt="logo" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="https://www.linkedin.com/in/swarn-shekhar-89890727b/" className="hover:underline">LinkedIn</Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/npm_shekhar/" className="hover:underline">Instagram</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/swarnshekhar" className="hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} sm:text-center`}>
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline"> swarnshekhar</a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="#" className={`text-gray-400 hover:text-gray-200`}>Facebook</a>
                        <a href="#" className={`text-gray-400 hover:text-gray-200`}>Discord</a>
                        <a href="#" className={`text-gray-400 hover:text-gray-200`}>Twitter</a>
                        <a href="#" className={`text-gray-400 hover:text-gray-200`}>GitHub</a>
                        <a href="#" className={`text-gray-400 hover:text-gray-200`}>Dribbble</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
