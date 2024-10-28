import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Skills from './Components/Skills.jsx';
import Contact from './Components/ContactUs.jsx';
import Projects from './Components/Projects.jsx';
import Home from './Components/Home.jsx';
import Github from './Components/Github.jsx';
import { DarkModeProvider } from './contexts/DarkModeContext'; // Import your DarkModeProvider

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/portfolio' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='skills' element={<Skills />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='github' element={<Github />} />
        </Route>
    )
);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider> {/* Wrap with DarkModeProvider */}
      <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>
);
