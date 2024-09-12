import React from 'react';
import './Gallery.css'; // Import the CSS file for styling
import svgImages from '../../assets/svg'; // Import all SVGs

const Gallery = () => {
  // Get all SVG file names from the imported object
  const svgFiles = Object.keys(svgImages);

  return (
    <div className="gallery-container">
        <div className="gallery">
        {svgFiles.map((fileName, index) => {
            // Remove the '.svg' extension from the file name
            const displayName = fileName.replace('.svg', '');

            return (
            <div key={index} className="gallery-item">
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

export default Gallery;
