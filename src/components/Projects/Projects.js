import React from 'react';
import './Projects.css';
import svgImages from '../../assets/svg/projects';

const Skills = () => {
  // Get all SVG file names from the imported object
  const svgFiles = Object.keys(svgImages);

  return (
    <div className="projects-container">
        <div className="projects">
        {svgFiles.map((fileName, index) => {
            const displayName = fileName.replace('.svg', '');

            return (
            <div key={index} className="projects-item">
                <img 
                src={svgImages[fileName]} 
                alt={`SVG ${index}`} 
                title={displayName}
                />
            </div>
            );
        })}
        </div>
    </div>
  );
};

export default Skills;
