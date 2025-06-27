import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Projects.css';

const importAll = (requireContext) =>
  requireContext.keys().reduce((images, path) => {
    const fileName = path.replace('./', '');
    images[fileName] = requireContext(path);
    return images;
  }, {});

const budgetBuddyImages = importAll(require.context('../../assets/png/budget-buddy', false, /\.png$/));
const musicVisualiserImages = importAll(require.context('../../assets/png/music-visualizer', false, /\.png$/));

const Projects = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="projects-container">
      <div className="dropdown">
        <button onClick={handleDropdownToggle} className="dropdown-button">
          Budget Buddy
        </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <p className="dropdown-blurb">
                <a href="https://github.com/toeneeoh/Expense-Tracker" target="_blank" rel="noopener noreferrer" className="dropdown-link">
                  Budget Buddy
                </a> is an expense tracker app on web and mobile with AI-powered features. It was developed over the course of a semester in my group of four using Agile practices. The app performs functions such as storing user data and serving user requests, including generating financial recommendations with ChatGPT and displaying financial data. The other members of my team were not as familiar or used to the technologies we used, which resulted in some incomplete or broken features. It was a unique experience for me because it felt like I was the lead / senior engineer guiding the other members while making critical decisions about the tools we used.
              </p>
              {Object.keys(budgetBuddyImages).map((fileName, index) => (
                <div key={index} className="projects-item">
                  <img
                    src={budgetBuddyImages[fileName]}
                    alt={fileName.replace('.png', '')}
                    className="projects-image"
                    onClick={() => handleImageClick(budgetBuddyImages[fileName])}
                  />
                </div>
              ))}
            </div>
          )}
      </div>

      <div className="dropdown">
        <button onClick={handleDropdownToggle} className="dropdown-button">
          Music Visualizer
        </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <p className="dropdown-blurb">
                <a href="https://github.com/toeneeoh/java-music-visualizer" target="_blank" rel="noopener noreferrer" className="dropdown-link">
                  Music Visualizer
                </a> is a simple program written in Java that serves as an audio player with visible audio bands that render as a file is playing. I made it as a quick brush up for me on the common practices of the language. Admittedly, I had no idea what a Fast Fourier Transform was or how complicated working with different file types could be, so I had AI teach me and help implement what I needed to save hours of searching online.
              </p>
              {Object.keys(musicVisualiserImages).map((fileName, index) => (
                <div key={index} className="projects-item">
                  <img
                    src={musicVisualiserImages[fileName]}
                    alt={fileName.replace('.png', '')}
                    className="projects-image"
                    onClick={() => handleImageClick(musicVisualiserImages[fileName])}
                  />
                </div>
              ))}
            </div>
          )}
      </div>

      {fullscreenImage &&
        ReactDOM.createPortal(
          <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          </div>,
          document.body
        )}
    </div>
  );
};

export default Projects;
