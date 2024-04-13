import React, { useState, useEffect } from 'react';
import '../files/issues.css'; // Import the CSS file

const Issues = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/complaints')
      .then(response => response.json())
      .then(data => {
        console.log('Data received from backend:', data); // Log the data received from backend
        setComplaints(data);
      })
      .catch(error => {
        console.error('Error fetching complaints:', error);
      });
  }, []);

  const handleCheckboxChange = async (complaintId) => {
    try {
      const response = await fetch(`http://localhost:8000/complaints/${complaintId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setComplaints(prevComplaints => prevComplaints.filter(complaint => complaint._id !== complaintId));
        console.log('Complaint deleted successfully');
      } else {
        console.error('Failed to delete complaint');
      }
    } catch (error) {
      console.error('Error deleting complaint:', error);
    }
  };

  return (
    <div className="container">
      <h2>Complaints</h2>
      <div className="total-complaints-box">
        Total Complaints: {complaints.length}
      </div>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>#</th> {/* Add numbering header */}
            <th>Name</th>
            <th>Roll Number</th>
            <th>Room Number</th>
            <th>Contact Number</th>
            <th>Issue</th>
            <th>Select</th> {/* Add a header for the checkboxes */}
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={complaint._id}>
              <td>{index + 1}</td> {/* Display numbering */}
              <td>{complaint.name}</td>
              <td>{complaint.rollNumber}</td>
              <td>{complaint.roomNumber}</td>
              <td>{complaint.phoneNumber}</td> {/* Display phoneNumber */}
              <td>{complaint.issueAvenue}</td> {/* Display issueAvenue */}
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(complaint._id)} // Handle checkbox change
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Issues;
