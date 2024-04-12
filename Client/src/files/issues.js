import React, { useState, useEffect } from 'react';
import './issuesStyle.css'; // Import the CSS file

const Issues = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch complaints data from MongoDB Atlas
    fetch('http://localhost:8000/complaints')
      .then(response => response.json())
      .then(data => {
        setComplaints(data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Complaints</h2>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Room Number</th>
            <th>Contact Number</th>
            <th>Issue</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(complaint => (
            <tr key={complaint._id}>
              <td>{complaint.name}</td>
              <td>{complaint.rollNumber}</td>
              <td>{complaint.roomNumber}</td>
              <td>{complaint.contactNumber}</td>
              <td>{complaint.issue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Issues;
