import React from 'react';
import './Header.css';

const Header = () => {
  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><button onClick={() => handleScroll('landing')}>Home</button></li>
          <li><button onClick={() => handleScroll('projects')}>Projects</button></li>
          <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
