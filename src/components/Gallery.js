import React from 'react';

function Gallery({ imageUrls }) {
  return (
    <div className="container gallery">
      <h2>Games</h2>
      <div className="images">
      {imageUrls.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} className="gallery-image" alt="Game" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;