import React, { useState } from 'react';

const App = () => {
  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDivClick = () => {
    setLoading(true);
    fetch('/model.glb')
      .then(response => response.arrayBuffer())
      .then(data => {
        setFileData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching file:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <div onClick={handleDivClick}>
        Click to Load File
      </div>
      {loading && <div>Loading...</div>}
      {fileData && (
        <div>
          <h2>File Loaded!</h2>
          {/* Render your GLB file here */}
        </div>
      )}
    </div>
  );
};

export default App;