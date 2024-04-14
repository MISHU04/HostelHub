import React, { useRef, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          observer.unobserve(image);
        }
      });
    }, observerOptions);

    imagesRef.current.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="image-container">
        {/* Add your gallery images here */}
        {/* Example: */}
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c1.jpg"
          alt="Image 1"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c2.jpg"
          alt="Image 2"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c3.jpg"
          alt="Image 3"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c4.jpg"
          alt="Image 4"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c5.jpg"
          alt="Image 5"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c6.jpg"
          alt="Image 6"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c7.jpg"
          alt="Image 7"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c8.jpg"
          alt="Image 8"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c9.jpg"
          alt="Image 9"
          className="gallery-image"
        />
        <img
          ref={(el) => el && imagesRef.current.push(el)}
          data-src="\images\c10.jpg"
          alt="Image 10"
          className="gallery-image"
        />
      </div>
    </div>
  );
};

export default Gallery;
