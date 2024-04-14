import React from 'react';
import './HomeStyles.css';
import CarouselPage from './CarouselPage';
import NoticeTicker from './NoticeTicker';
import Gallery from './Gallery';

function Home() {
  // Sample data for notices
  const gagaMessages = [
    'Message 1 for Ganga Hostel',
    'Message 2 for Ganga Hostel',
    'Message 3 for Ganga Hostel',
    'Message 4 for Ganga Hostel',
    // Add more messages as needed
  ];
  const gagaLinks = [
    'https://example.com/ganga-1',
    'https://example.com/ganga-2',
    'https://example.com/ganga-3',
    'https://example.com/ganga-4',
    // Add more links as needed
  ];

  // Sample data for notices
  const brahmMessages = [
    'Message 1 for Brahmaputra Hostel',
    'Message 2 for Brahmaputra Hostel',
    'Message 3 for Brahmaputra Hostel',
    'Message 4 for Brahmaputra Hostel',
    // Add more messages as needed
  ];
  const brahmLinks = [
    'https://example.com/brahmaputra-1',
    'https://example.com/brahmaputra-2',
    'https://example.com/brahmaputra-3',
    'https://example.com/brahmaputra-4',
    // Add more links as needed
  ];

  return (
    <div className='home'>
      <div className="home-main-content">
        <CarouselPage />
      </div>
      <div className='notice-head'>
        <h1>--Notice--</h1>
        <div className='ganga'>
          <NoticeTicker title="Ganga Hostel" notices={gagaMessages.map((message, index) => ({ title: message, link: gagaLinks[index] }))} />
        </div>
        <div className='brahm'>
          <NoticeTicker title="BP Hostel" notices={brahmMessages.map((message, index) => ({ title: message, link: brahmLinks[index] }))} />
        </div>
      </div>
      <div className="home-sidebar">
        {/* Sidebar content */}
      </div>
      <div className="home-gallery">
        <Gallery />
      </div>
      {/* Footer Section */}
      <footer className="home-footer">
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
