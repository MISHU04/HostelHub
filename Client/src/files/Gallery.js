import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="image-container">
        {/* Add your gallery images here */}
        {/* Example: */}
        <img src="\images\vijay.jpg" alt="Image 1" className="gallery-image" />
        <img src="\images\zikra.jpg" alt="Image 2" className="gallery-image" />
        <img src="\images\mishhu.jpg" alt="Image 3" className="gallery-image" />
        <img src="\images\swa.jpg" alt="Image 3" className="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;