import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import { useDarkMode } from './contexts/DarkModeContext';

function Layout() {
    const { isDarkMode } = useDarkMode(); // Get isDarkMode here

    return (
        <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
