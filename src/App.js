import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentCanvas, setCurrentCanvas] = useState(0); // State to track the current canvas

  const navigateToCanvas = (canvasIndex) => {
    setCurrentCanvas(canvasIndex);
  };

  const containerStyle = {
    transform: `translateX(-${currentCanvas * 100}vw)`,
  };

  return (
    <div className="App">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="navbar-title">Tony.PL</div>
        <div className="navbar-links">
          <button onClick={() => navigateToCanvas(0)}>About</button>
          <button onClick={() => navigateToCanvas(1)}>Skills</button>
          <button onClick={() => navigateToCanvas(2)}>Projects</button>
        </div>
      </nav>

      {/* Container for the canvases */}
      <div className="canvas-container" style={containerStyle}>
        {/* Three canvases */}
        <div className="canvas about-page">
          <h2>About</h2>
          <p>Welcome to the About section.</p>
        </div>

        <div className="canvas skills-page">
          <h2>Skills</h2>
          <p>Here are some skills.</p>
        </div>

        <div className="canvas projects-page">
          <h2>Projects</h2>
          <p>Here are some projects.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
