import React, { useRef, useEffect } from 'react';
import './NoticeTicker.css';

const NoticeTicker = () => {
  const tickerRef = useRef(null);

  // Configure scrolling behavior using useRef and useEffect
  useEffect(() => {
    const tickerElement = tickerRef.current;

    const scrollNoticeTicker = () => {
      if (tickerElement) {
        tickerElement.scrollTo({
          top: tickerElement.scrollTop + 1,
          behavior: 'smooth',
        });

        // Reset scroll to the top when reaching the end
        if (tickerElement.scrollTop + tickerElement.clientHeight >= tickerElement.scrollHeight) {
          tickerElement.scrollTo({ top: 0, behavior: 'auto' });
        }
      }

      requestAnimationFrame(scrollNoticeTicker);
    };

    const animationId = requestAnimationFrame(scrollNoticeTicker);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []); // Run this effect only once on component mount

  // Sample data for notices
  const notices = [
    {
      id: 1,
      category: 'General',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://example.com/general',
    },
    {
      id: 2,
      category: 'Events',
      message: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      link: 'https://example.com/events',
    },
    // Add more notices as needed
  ];

  // Group notices by category
  const groupedNotices = Object.values(notices.reduce((acc, notice) => {
    if (!acc[notice.category]) {
      acc[notice.category] = {
        category: notice.category,
        notices: [],
      };
    }
    acc[notice.category].notices.push(notice);
    return acc;
  }, {}));

  return (
    <div className="notice-ticker-container">
      {groupedNotices.map(({ category, notices }) => (
        <div key={category} className="notice-section">
          <h2 className="notice-heading">{category} Notices</h2>
          <div className="notice-ticker" ref={tickerRef}>
            {/* Render Notices for the current category */}
            {notices.map((notice) => (
              <a key={notice.id} href={notice.link} className="notice-item" target="_blank" rel="noopener noreferrer">
                <span className="notice-message">{notice.message}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeTicker;
