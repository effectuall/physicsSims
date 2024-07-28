import React from 'react';

const SimulationViewer = ({ selectedFile }) => {
  return (
    <iframe 
      id="viewer" 
      className="flex-grow"
      name="viewer" 
      allow="fullscreen; xr-spatial-tracking;" 
      src={`https://effectuall.github.io/Simulations/${selectedFile}.html`} 
    ></iframe>
  );
};

export default SimulationViewer;
