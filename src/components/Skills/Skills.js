import React from 'react';
import './Skills.css';
import svgImages from '../../assets/svg/skills';

const Skills = () => {
  // Get all SVG file names from the imported object
  const svgFiles = Object.keys(svgImages);

  return (
    <div className="skills-container">
        <div className="skills">
        {svgFiles.map((fileName, index) => {
            const displayName = fileName.replace('.svg', '');

            return (
            <div key={index} className="skills-item">
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
