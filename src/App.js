import './App.css';
import React, { useState } from 'react';

function App() {
  const [isSliding, setIsSliding] = useState(false);

  const handleGetStartedClick = () => {
    setIsSliding(true);
  };

  return (
    <div className={`App ${isSliding? 'slide' : ''}`}>
      <header className="App-header">
        {!isSliding ? (
          <>
            <p>Welcome to my blog.</p>
            <button className="App-link" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </>
        ) : (
          <div className="New-canvas">
            <h2>Test</h2>
            <p>Hello</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
