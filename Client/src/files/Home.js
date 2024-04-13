import React from 'react';
import './HomeStyles.css';
import CarouselPage from './CarouselPage';
import NoticeTicker from './NoticeTicker';
import Gallery from './Gallery';

function Home() {
  return (
    <div className='home'>
      <div className="home-main-content">
        <CarouselPage />
      </div>
      <div className='notice-head'>
        <h1>--Notice--</h1>
        <div className='ganga'><NoticeTicker /></div>
        {/* <div className='brahm'><NoticeTicker /></div> */}
      </div>
      {/* <div className="home-sidebar">
        <NoticeTicker />
      </div> */}
      <div className="home-gallery">
        <Gallery />
      </div>
      {/* Footer Section */}
      <footer className="home-footer">
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
          {/* You can add more contact information or a contact form here */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
