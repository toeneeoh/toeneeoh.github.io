import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function Canvas() {
  const location = useLocation();
  const [currentCanvas, setCurrentCanvas] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/skills':
        setCurrentCanvas(1);
        break;
      case '/projects':
        setCurrentCanvas(2);
        break;
      default:
        setCurrentCanvas(0);
    }
  }, [location.pathname]);

  return (
    <div className="canvas-container" style={{ transform: `translateX(-${currentCanvas * 100}vw)` }}>
      <div className="canvas about-page">
        <About />
      </div>

      <div className="canvas skills-page">
        <Skills />
      </div>

      <div className="canvas projects-page">
        <Projects />
      </div>
    </div>
  );
}

function Navigate() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="navbar-title">Tony.PL</div>
        <div className="navbar-links">
          <button onClick={() => navigate('/')}>About</button>
          <button onClick={() => navigate('/skills')}>Skills</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Canvas />} />
        <Route path="/skills" element={<Canvas />} />
        <Route path="/projects" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default Navigate;
