import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import '../files/issues.css'; // Import the CSS file

const Issues = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetch('http://localhost:8000/complaints')
      .then(response => response.json())
      .then(data => {
        console.log('Data received from backend:', data);
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

  const handleLogout = () => {
    // Redirect to the warden page
    navigate('/warden');
  };

  return (
    <div className="container">
      <h2>Complaints</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <div className="total-complaints-box">
        Total Complaints: {complaints.length}
      </div>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Room Number</th>
            <th>Contact Number</th>
            <th>Issue</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={complaint._id}>
              <td>{index + 1}</td>
              <td>{complaint.name}</td>
              <td>{complaint.rollNumber}</td>
              <td>{complaint.roomNumber}</td>
              <td>{complaint.phoneNumber}</td>
              <td>{complaint.issueAvenue}</td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(complaint._id)}
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