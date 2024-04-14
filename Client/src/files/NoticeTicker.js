import React from 'react';
import './NoticeTicker.css'; // Import your CSS file for styling

const NoticeTicker = ({ title, notices }) => {
  return (
    <div className="notice-ticker">
      <h2>{title}</h2>
      <div className="notice-list">
        <ul>
          {notices && notices.map((notice, index) => (
            <li key={index}>
              <a href={notice.link} target="_blank" rel="noopener noreferrer">{notice.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeTicker;
