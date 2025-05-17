import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Sidebar.css';

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="toggle-icon"></span>
      </button>
      
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/awal1.png" alt="Profile" />
          </div>
          <h2 className="profile-name">Muhamadawal</h2>
        </div>

        <nav className="sidebar-nav">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-toggle-button">
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;